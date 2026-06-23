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
  // ===== SOLICITUD =====
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
    // Sección 4: Cesionario
    cesionario: {
      nombre: '',
      domicilio: '',
      email: '',
      telefono: '',
    },
    // Sección 5: Predio
    predio: {
      nombre: '',
      inscritoFojas: '',
      conservadorBienesRaices: '',
      numCertificadoMBN: '',
      rolAvaluoSII: '',
      superficieTotal: '',
    },
    declaracion: {
      fecha: '',
      ciudad: '',
    },
  },

  // ===== PM 00 - ANTECEDENTES GENERALES =====
  antecedentes: {
    nombre: '',
    domicilio: '',
    telefonoContacto: '',
    email: '',
    profesionalResponsable: '',
    institucion: '',
    // Información del Predio
    predio: {
      nombre: '',
      region: '',
      rolAvaluoSII: '',
      superficieTotal: '',
      tituloDominio: '',
      utmEste: '',
      utmNorte: '',
      utmZona: '18S',
    },
    // Puntos de referencia
    referencias: {
      accesoPredial: '',
      infraestructura: '',
      accesoRodal: '',
      otra: '',
    },
    viasAcceso: '',
    // Autor del Plan
    autor: {
      nombre: '',
      profesion: '',
      direccion: '',
      email: '',
    },
    // Fondo concursable
    fondoConcursable: {
      idProyecto: '',
      observaciones: '',
    },
    justificacionTecnica: '',
  },

  // ===== RODAL - ANÁLISIS CUANTITATIVO =====
  rodal: {
    nombre: 'C2',
    tipoForestal: 'Bosques Lenga',
    subtipo: 'Bosques_Lenga_Puro',
    estructura: 'Regular',
    estadoDesarrollo: 'Fustal joven',
    superficie: '',
    muestreo: 'Aleatorio simple',
    numParcelas: 8,
    superficieParcelas: 500,
    formaParcel: 'Circular',
    fechaMuestreo: '',
    // Parámetros iniciales/finales por especie
    parametros: [
      {
        especie: 'Lenga',
        densidadInicial: '',
        densidadFinal: '',
        areaBasalInicial: '',
        areaBasalFinal: '',
        dmcInicial: '',
        dmcFinal: '',
        participacion: '',
      },
    ],
    // Estadígrafos (análisis simpódico)
    estadigrafos: {
      densidad: {
        media: '',
        desviacionEstandar: '',
        varianza: '',
        coefVariacion: '',
        tStudent: '',
        errorMuestreo: '',
      },
      areaBasal: {
        media: '',
        desviacionEstandar: '',
        varianza: '',
        coefVariacion: '',
        tStudent: '',
        errorMuestreo: '',
      },
      dmc: {
        media: '',
        desviacionEstandar: '',
        varianza: '',
        coefVariacion: '',
        tStudent: '',
        errorMuestreo: '',
      },
    },
    efectoIntervencion: '',
    efectoEstructura: '',
  },

  // ===== INVENTARIO FORESTAL =====
  inventario: [
    { rodal: 'C2', parcela: 1, especie: 'Lenga', dap: 56, intervencion: 'P' },
    { rodal: 'C2', parcela: 1, especie: 'Lenga', dap: 37, intervencion: 'p' },
    { rodal: 'C2', parcela: 1, especie: 'Lenga', dap: 45, intervencion: 'x' },
  ],

  // ===== PM 01 - DIAGNÓSTICO =====
  diagnostico: {
    // 4.1 Descripción
    descripcionPredio: '',
    // 4.2.1 Flora
    flora: [
      { especie: '', estadoConservacion: '', observaciones: '' },
    ],
    criteriosBufferFlora: '',
    observacionesFlora: '',
    // 4.2.2 Fauna
    fauna: [
      { especie: '', estadoConservacion: '', observaciones: '' },
    ],
    observacionesFauna: '',
    // 5.1.1 Definición de rodales
    rodales: [
      { rodal: 'C2', superficie: '' },
    ],
    criteriosRodales: '',
    // 5.1.2 Descripción cualitativa
    descripcionCualitativa: [
      { rodal: 'C2', especiesDominantes: '', observaciones: '' },
    ],
    // 5.1.3 Regeneración
    regeneracion: [
      { rodal: 'C2', especies: '', altura: '', factoresRiesgo: '' },
    ],
    // 5.1.4 Antecedentes históricos
    bonificacionesAnteriores: [
      { rodal: 'C2', actividad: '', año: '' },
    ],
    historiaRodal: '',
    observacionesHistoricas: '',
    // Campos generales (legacy)
    descripcion: '',
    amenazas: '',
    oportunidades: '',
  },

  // ===== PM 02 - INFORMACIÓN CUANTITATIVA =====
  informacionCuantitativa: {
    tipoDatos: '',
    metodologia: '',
    resultados: '',
    // 12.1.1 Características generales
    justificacionMuestreo: '',
    // 12.1.2 Coordenadas UTM de parcelas
    coordenadasParcelas: [
      { parcela: 1, este: '', norte: '', zona: '18S' },
    ],
    identificacionTerreno: '',
    // 12.1.3 Funciones de volumen
    funcionesVolumen: [
      { especie: 'Lenga', funcion: '' },
    ],
    // 12.1.4 Resumen del inventario
    resumenInventario: [
      { rodal: 'C2', parcelas: 8, superficie: '' },
    ],
    // 12.1.5 Intensidad de intervención
    intensidadIntervencion: [
      { rodal: 'C2', densidadInicial: '', densidadFinal: '' },
    ],
  },

  // ===== PM 03 - CARTOGRAFÍA =====
  cartografia: {
    descripcion: '',
    escala: '',
    fuente: '',
    elementos: {
      limitesPredio: false,
      limitesRodales: false,
      coberturaForestal: false,
      intervencionesPropuestas: false,
      infraestructura: false,
      hidrografia: false,
      accesos: false,
      zonasExclusion: false,
      otras: '',
    },
  },
};

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState(() => {
    const saved = localStorage.getItem('planManejo');
    if (saved) {
      try {
        // Merge profundo con initialState para no perder campos nuevos
        const parsed = JSON.parse(saved);
        return deepMerge(initialState, parsed);
      } catch {
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('planManejo', JSON.stringify(plan));
  }, [plan]);

  // ===== UPDATERS =====
  const updateSolicitud = (data) => {
    setPlan((prev) => ({ ...prev, solicitud: { ...prev.solicitud, ...data } }));
  };

  const updateAntecedentes = (data) => {
    setPlan((prev) => ({ ...prev, antecedentes: { ...prev.antecedentes, ...data } }));
  };

  const updateRodal = (data) => {
    setPlan((prev) => ({ ...prev, rodal: { ...prev.rodal, ...data } }));
  };

  const updateInventario = (inventario) => {
    setPlan((prev) => ({ ...prev, inventario }));
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
    setPlan((prev) => ({ ...prev, diagnostico: { ...prev.diagnostico, ...data } }));
  };

  const updateInformacionCuantitativa = (data) => {
    setPlan((prev) => ({
      ...prev,
      informacionCuantitativa: { ...prev.informacionCuantitativa, ...data },
    }));
  };

  const updateCartografia = (data) => {
    setPlan((prev) => ({ ...prev, cartografia: { ...prev.cartografia, ...data } }));
  };

  // ===== EXPORTAR JSON =====
  const exportarJSON = () => {
    const element = document.createElement('a');
    element.href = URL.createObjectURL(
      new Blob([JSON.stringify(plan, null, 2)], { type: 'application/json' })
    );
    element.download = 'plan-manejo.json';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // ===== EXPORTAR PDF =====
  const exportarPDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 12;
      let y = 18;

      const checkPage = (needed = 6) => {
        if (y > pageHeight - needed - 8) {
          doc.addPage();
          y = 18;
        }
      };

      const labelize = (key) =>
        key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (s) => s.toUpperCase())
          .trim();

      // Header
      doc.setFillColor(44, 95, 45);
      doc.rect(0, 0, pageWidth, 12, 'F');
      doc.setFontSize(15);
      doc.setTextColor(255, 255, 255);
      doc.text('PLAN DE MANEJO FORESTAL', margin, 8.5);
      y = 20;
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(`Ley N° 20.283  ·  Generado: ${new Date().toLocaleDateString('es-CL')}`, margin, y);
      y += 8;

      const sectionTitle = (title) => {
        checkPage(12);
        doc.setFillColor(240, 247, 241);
        doc.rect(margin - 2, y - 4, pageWidth - 2 * margin + 4, 7, 'F');
        doc.setFontSize(11);
        doc.setTextColor(44, 95, 45);
        doc.setFont(undefined, 'bold');
        doc.text(title, margin, y);
        doc.setFont(undefined, 'normal');
        y += 8;
      };

      const subTitle = (title) => {
        checkPage(8);
        doc.setFontSize(9.5);
        doc.setTextColor(60, 90, 60);
        doc.setFont(undefined, 'bold');
        doc.text(title, margin, y);
        doc.setFont(undefined, 'normal');
        y += 5;
      };

      const field = (label, value) => {
        if (value === '' || value === null || value === undefined || value === false) return;
        checkPage();
        doc.setFontSize(8.5);
        doc.setTextColor(50, 50, 50);
        const text = `${label}: ${value}`;
        const lines = doc.splitTextToSize(text, pageWidth - 2 * margin - 4);
        lines.forEach((line) => {
          checkPage();
          doc.text(line, margin + 3, y);
          y += 4.2;
        });
      };

      // Tabla simple (sin autoTable)
      const simpleTable = (headers, rows) => {
        if (!rows || rows.length === 0) return;
        checkPage(12);
        const colW = (pageWidth - 2 * margin) / headers.length;
        // Header row
        doc.setFillColor(44, 95, 45);
        doc.rect(margin, y - 4, pageWidth - 2 * margin, 6, 'F');
        doc.setFontSize(7.5);
        doc.setTextColor(255, 255, 255);
        doc.setFont(undefined, 'bold');
        headers.forEach((h, i) => {
          doc.text(String(h), margin + 2 + i * colW, y);
        });
        doc.setFont(undefined, 'normal');
        y += 6;
        // Data rows
        doc.setTextColor(50, 50, 50);
        rows.forEach((row, ri) => {
          checkPage(6);
          if (ri % 2 === 0) {
            doc.setFillColor(248, 248, 248);
            doc.rect(margin, y - 4, pageWidth - 2 * margin, 5.5, 'F');
          }
          row.forEach((cell, ci) => {
            const txt = doc.splitTextToSize(String(cell ?? ''), colW - 3)[0] || '';
            doc.text(txt, margin + 2 + ci * colW, y);
          });
          y += 5.5;
        });
        y += 3;
      };

      const flatFields = (obj, skip = []) => {
        Object.entries(obj).forEach(([k, v]) => {
          if (skip.includes(k)) return;
          if (v && typeof v === 'object' && !Array.isArray(v)) {
            Object.entries(v).forEach(([k2, v2]) => {
              if (typeof v2 !== 'object') field(`${labelize(k)} - ${labelize(k2)}`, v2);
            });
          } else if (typeof v !== 'object') {
            field(labelize(k), v);
          }
        });
      };

      // ===== 1. SOLICITUD =====
      const s = plan.solicitud;
      sectionTitle('1. SOLICITUD');
      field('Tipo de Solicitud', s.tipoSolicitud);
      field('Área afectada por incendios (ha)', s.areaIncendios);
      field('CUP N°', s.cupNumero);
      subTitle('Interesado/a');
      flatFields(s.interesado);
      subTitle('Representante Legal');
      flatFields(s.representante);
      subTitle('Cesionario/a');
      flatFields(s.cesionario);
      subTitle('Predio');
      flatFields(s.predio);
      flatFields(s.declaracion);

      // ===== 2. ANTECEDENTES =====
      const a = plan.antecedentes;
      sectionTitle('2. ANTECEDENTES GENERALES');
      field('Nombre o razón social', a.nombre);
      field('Domicilio', a.domicilio);
      field('Teléfono', a.telefonoContacto);
      field('Email', a.email);
      field('Profesional Responsable', a.profesionalResponsable);
      field('Institución', a.institucion);
      subTitle('Predio');
      flatFields(a.predio);
      subTitle('Puntos de Referencia');
      flatFields(a.referencias);
      field('Vías de acceso', a.viasAcceso);
      subTitle('Autor del Plan');
      flatFields(a.autor);
      subTitle('Fondo Concursable');
      flatFields(a.fondoConcursable);
      field('Justificación Técnica', a.justificacionTecnica);

      // ===== 3. RODAL =====
      const r = plan.rodal;
      sectionTitle('3. ANÁLISIS DEL RODAL');
      field('Nombre del Rodal', r.nombre);
      field('Tipo Forestal', r.tipoForestal);
      field('Subtipo', r.subtipo);
      field('Estructura', r.estructura);
      field('Estado de desarrollo', r.estadoDesarrollo);
      field('Superficie (ha)', r.superficie);
      field('Tipo de muestreo', r.muestreo);
      field('N° parcelas', r.numParcelas);
      field('Superficie parcela (m²)', r.superficieParcelas);
      field('Forma parcela', r.formaParcel);
      field('Fecha muestreo', r.fechaMuestreo);
      subTitle('Parámetros por Especie');
      simpleTable(
        ['Especie', 'Dens.Ini', 'Dens.Fin', 'AB.Ini', 'AB.Fin', 'DMC.Ini', 'DMC.Fin'],
        (r.parametros || []).map((p) => [
          p.especie, p.densidadInicial, p.densidadFinal,
          p.areaBasalInicial, p.areaBasalFinal, p.dmcInicial, p.dmcFinal,
        ])
      );
      subTitle('Estadígrafos - Densidad');
      flatFields(r.estadigrafos.densidad);
      subTitle('Estadígrafos - Área Basal');
      flatFields(r.estadigrafos.areaBasal);
      subTitle('Estadígrafos - DMC');
      flatFields(r.estadigrafos.dmc);
      field('Efecto de la intervención', r.efectoIntervencion);
      field('Efecto sobre la estructura', r.efectoEstructura);

      // ===== 4. INVENTARIO =====
      sectionTitle('4. INVENTARIO FORESTAL');
      simpleTable(
        ['Rodal', 'Parcela', 'Especie', 'DAP/DAT', 'Intervención'],
        plan.inventario.map((row) => [
          row.rodal, row.parcela, row.especie, row.dap, row.intervencion,
        ])
      );

      // ===== 5. DIAGNÓSTICO =====
      const d = plan.diagnostico;
      sectionTitle('5. DIAGNÓSTICO PRELIMINAR');
      field('Descripción del predio', d.descripcionPredio || d.descripcion);
      subTitle('Flora');
      simpleTable(
        ['Especie', 'Estado Conservación', 'Observaciones'],
        (d.flora || []).map((f) => [f.especie, f.estadoConservacion, f.observaciones])
      );
      field('Criterios buffer flora', d.criteriosBufferFlora);
      field('Observaciones flora', d.observacionesFlora);
      subTitle('Fauna');
      simpleTable(
        ['Especie', 'Estado Conservación', 'Observaciones'],
        (d.fauna || []).map((f) => [f.especie, f.estadoConservacion, f.observaciones])
      );
      field('Observaciones fauna', d.observacionesFauna);
      subTitle('Definición de Rodales');
      simpleTable(
        ['Rodal', 'Superficie (ha)'],
        (d.rodales || []).map((ro) => [ro.rodal, ro.superficie])
      );
      field('Criterios rodales', d.criteriosRodales);
      subTitle('Descripción Cualitativa');
      simpleTable(
        ['Rodal', 'Especies Dominantes', 'Observaciones'],
        (d.descripcionCualitativa || []).map((dc) => [dc.rodal, dc.especiesDominantes, dc.observaciones])
      );
      subTitle('Regeneración');
      simpleTable(
        ['Rodal', 'Especies', 'Altura', 'Factores Riesgo'],
        (d.regeneracion || []).map((re) => [re.rodal, re.especies, re.altura, re.factoresRiesgo])
      );
      subTitle('Antecedentes Históricos');
      simpleTable(
        ['Rodal', 'Actividad Bonificada', 'Año'],
        (d.bonificacionesAnteriores || []).map((b) => [b.rodal, b.actividad, b.año])
      );
      field('Historia del rodal', d.historiaRodal);
      field('Observaciones históricas', d.observacionesHistoricas);
      field('Amenazas', d.amenazas);
      field('Oportunidades', d.oportunidades);

      // ===== 6. INFORMACIÓN CUANTITATIVA =====
      const ic = plan.informacionCuantitativa;
      sectionTitle('6. INFORMACIÓN CUANTITATIVA');
      field('Tipo de datos', ic.tipoDatos);
      field('Metodología', ic.metodologia);
      field('Resultados', ic.resultados);
      field('Justificación del muestreo', ic.justificacionMuestreo);
      subTitle('Coordenadas UTM de Parcelas');
      simpleTable(
        ['Parcela', 'Este', 'Norte', 'Zona'],
        (ic.coordenadasParcelas || []).map((c) => [c.parcela, c.este, c.norte, c.zona])
      );
      field('Identificación en terreno', ic.identificacionTerreno);
      subTitle('Funciones de Volumen');
      simpleTable(
        ['Especie', 'Función'],
        (ic.funcionesVolumen || []).map((fv) => [fv.especie, fv.funcion])
      );
      subTitle('Resumen del Inventario');
      simpleTable(
        ['Rodal', 'Parcelas', 'Superficie (ha)'],
        (ic.resumenInventario || []).map((ri) => [ri.rodal, ri.parcelas, ri.superficie])
      );
      subTitle('Intensidad de la Intervención');
      simpleTable(
        ['Rodal', 'Densidad Inicial', 'Densidad Final'],
        (ic.intensidadIntervencion || []).map((ii) => [ii.rodal, ii.densidadInicial, ii.densidadFinal])
      );

      // ===== 7. CARTOGRAFÍA =====
      const c = plan.cartografia;
      sectionTitle('7. CARTOGRAFÍA');
      field('Descripción', c.descripcion);
      field('Escala', c.escala);
      field('Fuente', c.fuente);
      subTitle('Elementos a representar');
      const elementosLabels = {
        limitesPredio: 'Límites del predio',
        limitesRodales: 'Límites de rodales',
        coberturaForestal: 'Cobertura forestal',
        intervencionesPropuestas: 'Intervenciones propuestas',
        infraestructura: 'Infraestructura',
        hidrografia: 'Hidrografía',
        accesos: 'Accesos',
        zonasExclusion: 'Zonas de exclusión',
      };
      Object.entries(elementosLabels).forEach(([k, label]) => {
        if (c.elementos?.[k]) field(label, 'Sí');
      });
      if (c.elementos?.otras) field('Otras capas', c.elementos.otras);

      doc.save('plan-manejo-forestal.pdf');
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert('Error al generar PDF: ' + error.message);
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

// Merge profundo para preservar nuevos campos al cargar de localStorage
function deepMerge(base, override) {
  const result = Array.isArray(base) ? [...base] : { ...base };
  for (const key in override) {
    if (
      override[key] &&
      typeof override[key] === 'object' &&
      !Array.isArray(override[key]) &&
      base[key] &&
      typeof base[key] === 'object'
    ) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}
