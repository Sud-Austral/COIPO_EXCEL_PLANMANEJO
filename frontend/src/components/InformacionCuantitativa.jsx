import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const InformacionCuantitativa = () => {
  const { plan, updateInformacionCuantitativa } = usePlan();
  const { informacionCuantitativa } = plan;

  const handleChange = (field, value) => {
    updateInformacionCuantitativa({ [field]: value });
  };

  return (
    <div className="view">
      <FormSection
        title="INFORMACIÓN CUANTITATIVA"
        description="Datos numéricos del inventario forestal"
      >
        <FormRow>
          <FormGroup label="Tipo de Datos">
            <select
              value={informacionCuantitativa.tipoDatos}
              onChange={(e) => handleChange('tipoDatos', e.target.value)}
              className="input"
            >
              <option value="">Seleccione</option>
              <option>Muestreo sistemático</option>
              <option>Censo completo</option>
              <option>Muestreo aleatorio</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Metodología de Levantamiento">
            <textarea
              value={informacionCuantitativa.metodologia}
              onChange={(e) => handleChange('metodologia', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa la metodología utilizada..."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Resultados Principales">
            <textarea
              value={informacionCuantitativa.resultados}
              onChange={(e) => handleChange('resultados', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa los resultados del análisis..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
