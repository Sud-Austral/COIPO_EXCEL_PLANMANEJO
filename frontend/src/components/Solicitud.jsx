import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const Solicitud = () => {
  const { plan, updateSolicitud } = usePlan();
  const { solicitud } = plan;

  const handleInteresadoChange = (field, value) => {
    updateSolicitud({
      interesado: { ...solicitud.interesado, [field]: value },
    });
  };

  const handleRepresentanteChange = (field, value) => {
    updateSolicitud({
      representante: { ...solicitud.representante, [field]: value },
    });
  };

  return (
    <div className="view">
      <FormSection
        title="1. SOLICITUD"
        description="Datos del solicitante relativa a la Ley N° 20.283"
      >
        <FormRow>
          <FormGroup label="Tipo de Solicitud" required>
            <select
              value={solicitud.tipoSolicitud}
              onChange={(e) => updateSolicitud({ tipoSolicitud: e.target.value })}
              className="input"
            >
              <option>Plan de Manejo Forestal de Bosque Nativo</option>
              <option>Plan de Manejo Forestal de Ordenación</option>
              <option>Otro</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Área afectada por incendios forestales (ha)">
            <input
              type="number"
              value={solicitud.areaIncendios}
              onChange={(e) => updateSolicitud({ areaIncendios: e.target.value })}
              className="input"
              placeholder="Ingrese el área"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Sistema Unificado de Permisos CUP N°">
            <input
              type="text"
              value={solicitud.cupNumero}
              onChange={(e) => updateSolicitud({ cupNumero: e.target.value })}
              className="input"
              placeholder="Ingrese el número CUP"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="2. INTERESADO/A">
        <FormRow>
          <FormGroup label="Nombre o razón social" required>
            <input
              type="text"
              value={solicitud.interesado.nombre}
              onChange={(e) => handleInteresadoChange('nombre', e.target.value)}
              className="input"
              placeholder="Nombre del interesado"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Domicilio" required>
            <input
              type="text"
              value={solicitud.interesado.domicilio}
              onChange={(e) => handleInteresadoChange('domicilio', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Tipo de propietario/a">
            <select
              value={solicitud.interesado.tipoPropiedad}
              onChange={(e) => handleInteresadoChange('tipoPropiedad', e.target.value)}
              className="input"
            >
              <option value="">Seleccione</option>
              <option>Persona Natural</option>
              <option>Persona Jurídica</option>
              <option>Comunidad Indígena</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Email">
            <input
              type="email"
              value={solicitud.interesado.email}
              onChange={(e) => handleInteresadoChange('email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
          <FormGroup label="Teléfono">
            <input
              type="tel"
              value={solicitud.interesado.telefono}
              onChange={(e) => handleInteresadoChange('telefono', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="3. REPRESENTANTE LEGAL">
        <FormRow>
          <FormGroup label="Nombre">
            <input
              type="text"
              value={solicitud.representante.nombre}
              onChange={(e) => handleRepresentanteChange('nombre', e.target.value)}
              className="input"
              placeholder="Nombre del representante"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Domicilio">
            <input
              type="text"
              value={solicitud.representante.domicilio}
              onChange={(e) => handleRepresentanteChange('domicilio', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Email">
            <input
              type="email"
              value={solicitud.representante.email}
              onChange={(e) => handleRepresentanteChange('email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
          <FormGroup label="Teléfono">
            <input
              type="tel"
              value={solicitud.representante.telefono}
              onChange={(e) => handleRepresentanteChange('telefono', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
