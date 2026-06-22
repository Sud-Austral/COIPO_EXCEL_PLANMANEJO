import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const Antecedentes = () => {
  const { plan, updateAntecedentes } = usePlan();
  const { antecedentes } = plan;

  const handleChange = (field, value) => {
    updateAntecedentes({ [field]: value });
  };

  return (
    <div className="view">
      <FormSection
        title="ANTECEDENTES GENERALES"
        description="Información del propietario y datos de contacto"
      >
        <FormRow>
          <FormGroup label="Nombre o razón social" required>
            <input
              type="text"
              value={antecedentes.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              className="input"
              placeholder="Nombre del propietario"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Domicilio" required>
            <input
              type="text"
              value={antecedentes.domicilio}
              onChange={(e) => handleChange('domicilio', e.target.value)}
              className="input"
              placeholder="Dirección del predio"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Teléfono de Contacto">
            <input
              type="tel"
              value={antecedentes.telefonoContacto}
              onChange={(e) => handleChange('telefonoContacto', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
          <FormGroup label="Email de Contacto">
            <input
              type="email"
              value={antecedentes.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Profesional Responsable" required>
            <input
              type="text"
              value={antecedentes.profesionalResponsable}
              onChange={(e) => handleChange('profesionalResponsable', e.target.value)}
              className="input"
              placeholder="Nombre del profesional"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Institución/Empresa">
            <input
              type="text"
              value={antecedentes.institucion}
              onChange={(e) => handleChange('institucion', e.target.value)}
              className="input"
              placeholder="Nombre de la institución"
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
