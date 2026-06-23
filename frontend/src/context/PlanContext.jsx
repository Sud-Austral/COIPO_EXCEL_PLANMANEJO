import { createContext, useContext, useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const PlanContext = createContext();

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('usePlan debe usarse dentro de PlanProvider');
  }
  return context;
};

const initialState = {
  solicitud: {
    tipoSolicitud: 'Plan de Manejo Forestal de Bosque Nativo',
    areaIncendios: '',
    cupNumero: '',
    interesado: {
      nombre: '',
      domicilio: '',
      tipoPropiedad: '',
      email: '',
      telefono: '',
    },
    representante: {
      nombre: '',
      domicilio: '',
      email: '',
      telefono: '',
    },
  },
  antecedentes: {
    nombre: '',
    domicilio: '',
    telefonoContacto: '',
    email: '',
    profesionalResponsable: '',
    institucion: '',
  },
  rodal: {
    nombre: 'C2',
    tipoForestal: 'Lenga',
    subtipo: 'Bosques_Lenga_Puro',
    estructura: 'Regular',
    estadoDesarrollo: 'Fustal joven',
    superficie: '',
    muestreo: 'Aleatorio simple',
    numParcelas: 8,
    superficieParcelas: 500,
    formaParcel: 'Circular',
    fechaMuestreo: '',
  },
  inventario: [
    { rodal: 'C2', parcela: 1, especie: 'Lenga', dap: 56, intervencion: 'P' },
    { rodal: 'C2', parcela: 1, especie: 'Lenga', dap: 37, intervencion: 'p' },
    { rodal: 'C2', parcela: 1, especie: 'Lenga', dap: 45, intervencion: 'x' },
  ],
  diagnostico: {
    descripcion: '',
    flora: '',
    fauna: '',
    amenazas: '',
    oportunidades: '',
  },
  informacionCuantitativa: {
    tipoDatos: '',
    metodologia: '',
    resultados: '',
  },
  cartografia: {
    descripcion: '',
    escala: '',
    fuente: '',
  },
};

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState(() => {
    const saved = localStorage.getItem('planManejo');
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('planManejo', JSON.stringify(plan));
  }, [plan]);

  const updateSolicitud = (data) => {
    setPlan((prev) => ({
      ...prev,
      solicitud: { ...prev.solicitud, ...data },
    }));
  };

  const updateAntecedentes = (data) => {
    setPlan((prev) => ({
      ...prev,
      antecedentes: { ...prev.antecedentes, ...data },
    }));
  };

  const updateRodal = (data) => {
    setPlan((prev) => ({
      ...prev,
      rodal: { ...prev.rodal, ...data },
    }));
  };

  const updateInventario = (inventario) => {
    setPlan((prev) => ({
      ...prev,
      inventario,
    }));
  };

  const addInventarioRow = () => {
    setPlan((prev) => ({
      ...prev,
      inventario: [
        ...prev.inventario,
        { rodal: '', parcela: '', especie: '', dap: '', intervencion: '' },
      ],
    }));
  };

  const deleteInventarioRow = (index) => {
    setPlan((prev) => ({
      ...prev,
      inventario: prev.inventario.filter((_, i) => i !== index),
    }));
  };

  const updateDiagnostico = (data) => {
    setPlan((prev) => ({
      ...prev,
      diagnostico: { ...prev.diagnostico, ...data },
    }));
  };

  const updateInformacionCuantitativa = (data) => {
    setPlan((prev) => ({
      ...prev,
      informacionCuantitativa: { ...prev.informacionCuantitativa, ...data },
    }));
  };

  const updateCartografia = (data) => {
    setPlan((prev) => ({
      ...prev,
      cartografia: { ...prev.cartografia, ...data },
    }));
  };

  const exportarJSON = () => {
    const element = document.createElement('a');
    element.href = URL.createObjectURL(new Blob([JSON.stringify(plan, null, 2)], { type: 'application/json' }));
    element.download = 'plan-manejo.json';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const exportarPDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 10;
      let y = 15;

      // Header
      doc.setFontSize(18);
      doc.setTextColor(44, 95, 45);
      doc.text('PLAN DE MANEJO FORESTAL', margin, y);
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      y += 7;
      doc.text(`Ley N° 20.283 - Generado: ${new Date().toLocaleDateString('es-CL')}`, margin, y);
      y += 10;

      const addSection = (title, data) => {
        if (y > pageHeight - 30) {
          doc.addPage();
          y = 15;
        }
        doc.setFontSize(12);
        doc.setTextColor(44, 95, 45);
        doc.text(title, margin, y);
        y += 6;
        doc.setFontSize(9);
        doc.setTextColor(50, 50, 50);

        Object.entries(data).forEach(([key, value]) => {
          if (value && typeof value === 'object') {
            Object.entries(value).forEach(([k, v]) => {
              if (v) {
                const label = k.replace(/([A-Z])/g, ' $1').trim();
                const text = `${label}: ${v}`;
                const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
                lines.forEach(line => {
                  if (y > pageHeight - 10) {
                    doc.addPage();
                    y = 15;
                  }
                  doc.text(line, margin + 2, y);
                  y += 4;
                });
              }
            });
          } else if (value) {
            const label = key.replace(/([A-Z])/g, ' $1').trim();
            const text = `${label}: ${value}`;
            const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
            lines.forEach(line => {
              if (y > pageHeight - 10) {
                doc.addPage();
                y = 15;
              }
              doc.text(line, margin + 2, y);
              y += 4;
            });
          }
        });
        y += 3;
      };

      // Sections
      addSection('1. SOLICITUD', plan.solicitud);
      addSection('2. ANTECEDENTES GENERALES', plan.antecedentes);
      addSection('3. ANÁLISIS DEL RODAL', plan.rodal);

      // Inventario table
      if (plan.inventario && plan.inventario.length > 0) {
        if (y > pageHeight - 40) {
          doc.addPage();
          y = 15;
        }
        doc.setFontSize(12);
        doc.setTextColor(44, 95, 45);
        doc.text('4. INVENTARIO FORESTAL', margin, y);
        y += 6;

        const tableData = plan.inventario.map(row => [
          row.rodal || '',
          row.parcela || '',
          row.especie || '',
          row.dap || '',
          row.intervencion || ''
        ]);

        doc.autoTable({
          head: [['Rodal', 'Parcela', 'Especie', 'DAP/DAT', 'Intervención']],
          body: tableData,
          startY: y,
          margin: margin,
          styles: { fontSize: 8 },
          headStyles: { fillColor: [44, 95, 45], textColor: 255 }
        });
        y = doc.lastAutoTable.finalY + 5;
      }

      addSection('5. DIAGNÓSTICO PRELIMINAR', plan.diagnostico);
      addSection('6. INFORMACIÓN CUANTITATIVA', plan.informacionCuantitativa);
      addSection('7. CARTOGRAFÍA', plan.cartografia);

      doc.save('plan-manejo.pdf');
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert('Error al generar PDF. Por favor, intenta de nuevo.');
    }
  };

  const limpiarDatos = () => {
    setPlan(initialState);
    localStorage.removeItem('planManejo');
  };

  const value = {
    plan,
    updateSolicitud,
    updateAntecedentes,
    updateRodal,
    inventario: plan.inventario,
    updateInventario,
    addInventarioRow,
    deleteInventarioRow,
    updateDiagnostico,
    updateInformacionCuantitativa,
    updateCartografia,
    exportarJSON,
    exportarPDF,
    limpiarDatos,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};
