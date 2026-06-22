import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const Diagnostico = () => {
  const { plan, updateDiagnostico } = usePlan();
  const { diagnostico } = plan;

  const handleChange = (field, value) => {
    updateDiagnostico({ [field]: value });
  };

  return (
    <div className="view">
      <FormSection
        title="DIAGNÓSTICO PRELIMINAR"
        description="Descripción del estado actual del bosque"
      >
        <FormRow>
          <FormGroup label="Descripción General">
            <textarea
              value={diagnostico.descripcion}
              onChange={(e) => handleChange('descripcion', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa el estado general del rodal..."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Flora Silvestre">
            <textarea
              value={diagnostico.flora}
              onChange={(e) => handleChange('flora', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa la composición florística..."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Fauna Asociada">
            <textarea
              value={diagnostico.fauna}
              onChange={(e) => handleChange('fauna', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa la fauna observada..."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Amenazas Identificadas">
            <textarea
              value={diagnostico.amenazas}
              onChange={(e) => handleChange('amenazas', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa las amenazas al bosque..."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Oportunidades y Potencialidades">
            <textarea
              value={diagnostico.oportunidades}
              onChange={(e) => handleChange('oportunidades', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa las oportunidades detectadas..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
