import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

const ELEMENTOS = [
  { key: 'limitesPredio', label: 'Límites del predio' },
  { key: 'limitesRodales', label: 'Límites de rodales' },
  { key: 'coberturaForestal', label: 'Cobertura forestal' },
  { key: 'intervencionesPropuestas', label: 'Intervenciones propuestas' },
  { key: 'infraestructura', label: 'Infraestructura' },
  { key: 'hidrografia', label: 'Hidrografía' },
  { key: 'accesos', label: 'Accesos' },
  { key: 'zonasExclusion', label: 'Zonas de exclusión' },
];

export const Cartografia = () => {
  const { plan, updateCartografia } = usePlan();
  const { cartografia } = plan;

  const set = (field, value) => updateCartografia({ [field]: value });

  const toggleElemento = (key) => {
    updateCartografia({
      elementos: { ...cartografia.elementos, [key]: !cartografia.elementos[key] },
    });
  };

  return (
    <div className="view">
      <FormSection
        title="13. CARTOGRAFÍA"
        description="Elementos a representar en la cartografía digital del plan"
      >
        <FormRow>
          <FormGroup label="Descripción de Elementos Cartográficos">
            <textarea
              value={cartografia.descripcion}
              onChange={(e) => set('descripcion', e.target.value)}
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
              onChange={(e) => set('escala', e.target.value)}
              className="input"
              placeholder="Ej: 1:10.000"
            />
          </FormGroup>
          <FormGroup label="Fuente de Información">
            <input
              type="text"
              value={cartografia.fuente}
              onChange={(e) => set('fuente', e.target.value)}
              className="input"
              placeholder="Ej: Catastro, GPS, Imágenes satelitales"
            />
          </FormGroup>
        </FormRow>

        <h3 className="subsection-title">Capas a representar</h3>
        <div className="checkbox-grid">
          {ELEMENTOS.map((el) => (
            <label key={el.key} className="checkbox-item">
              <input
                type="checkbox"
                checked={!!cartografia.elementos[el.key]}
                onChange={() => toggleElemento(el.key)}
              />
              <span>{el.label}</span>
            </label>
          ))}
        </div>

        <FormRow>
          <FormGroup label="Otras capas temáticas">
            <input
              type="text"
              value={cartografia.elementos.otras}
              onChange={(e) =>
                updateCartografia({
                  elementos: { ...cartografia.elementos, otras: e.target.value },
                })
              }
              className="input"
              placeholder="Especifique otras capas a representar"
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
