import { createContext, useContext, useState, useEffect } from 'react';

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
    limpiarDatos,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};
