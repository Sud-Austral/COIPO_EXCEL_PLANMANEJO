import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const Cartografia = () => {
  const { plan, updateCartografia } = usePlan();
  const { cartografia } = plan;

  const handleChange = (field, value) => {
    updateCartografia({ [field]: value });
  };

  return (
    <div className="view">
      <FormSection
        title="CARTOGRAFÍA"
        description="Información sobre los mapas y elementos cartográficos"
      >
        <FormRow>
          <FormGroup label="Descripción de Elementos Cartográficos">
            <textarea
              value={cartografia.descripcion}
              onChange={(e) => handleChange('descripcion', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa los elementos que se representarán en los mapas..."
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Escala">
            <input
              type="text"
              value={cartografia.escala}
              onChange={(e) => handleChange('escala', e.target.value)}
              className="input"
              placeholder="Ej: 1:10000"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Fuente de Información">
            <input
              type="text"
              value={cartografia.fuente}
              onChange={(e) => handleChange('fuente', e.target.value)}
              className="input"
              placeholder="Ej: Catastro, GPS, Imágenes satelitales"
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
