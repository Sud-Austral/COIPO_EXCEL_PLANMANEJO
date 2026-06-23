import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const AnalisisRodal = () => {
  const { plan, updateRodal } = usePlan();
  const { rodal } = plan;

  const handleChange = (field, value) => {
    updateRodal({ [field]: value });
  };

  return (
    <div className="view">
      <FormSection
        title="ANÁLISIS CUANTITATIVO DEL RODAL"
        description="Información detallada del rodal a intervenir"
      >
        <FormRow>
          <FormGroup label="Nombre del Rodal" required>
            <input
              type="text"
              value={rodal.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              className="input"
              placeholder="Ej: C2"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Tipo Forestal" required>
            <select
              value={rodal.tipoForestal}
              onChange={(e) => handleChange('tipoForestal', e.target.value)}
              className="input"
            >
              <option value="">Seleccione un tipo forestal</option>
              <option>Bosques Lenga</option>
              <option>Bosques Coihue</option>
              <option>Bosques Ñire</option>
              <option>Bosques Araucaria</option>
              <option>Bosques Pino Radiata</option>
              <option>Bosques Pino Insigne</option>
              <option>Bosques Eucalipto</option>
              <option>Bosques Roble</option>
              <option>Bosques Hualo</option>
              <option>Bosques Espino</option>
              <option>Bosques Queñoa</option>
              <option>Mixtos</option>
              <option>Otro</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Subtipo Forestal">
            <input
              type="text"
              value={rodal.subtipo}
              onChange={(e) => handleChange('subtipo', e.target.value)}
              className="input"
              placeholder="Ej: Bosques_Lenga_Puro"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Estructura">
            <select
              value={rodal.estructura}
              onChange={(e) => handleChange('estructura', e.target.value)}
              className="input"
            >
              <option>Regular</option>
              <option>Irregular</option>
              <option>Mixta</option>
            </select>
          </FormGroup>
          <FormGroup label="Estado de Desarrollo">
            <select
              value={rodal.estadoDesarrollo}
              onChange={(e) => handleChange('estadoDesarrollo', e.target.value)}
              className="input"
            >
              <option>Fustal joven</option>
              <option>Fustal adulto</option>
              <option>Latizal</option>
              <option>Brinzal</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Superficie del Rodal (ha)">
            <input
              type="number"
              step="0.01"
              value={rodal.superficie}
              onChange={(e) => handleChange('superficie', e.target.value)}
              className="input"
              placeholder="0.00"
            />
          </FormGroup>
        </FormRow>

        <h3 className="subsection-title">Parámetros de Muestreo</h3>

        <FormRow>
          <FormGroup label="Tipo de Muestreo">
            <select
              value={rodal.muestreo}
              onChange={(e) => handleChange('muestreo', e.target.value)}
              className="input"
            >
              <option>Aleatorio simple</option>
              <option>Sistemático</option>
              <option>Estratificado</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Número de Parcelas">
            <input
              type="number"
              value={rodal.numParcelas}
              onChange={(e) => handleChange('numParcelas', e.target.value)}
              className="input"
            />
          </FormGroup>
          <FormGroup label="Superficie Parcela (m²)">
            <input
              type="number"
              value={rodal.superficieParcelas}
              onChange={(e) => handleChange('superficieParcelas', e.target.value)}
              className="input"
            />
          </FormGroup>
          <FormGroup label="Forma Parcela">
            <select
              value={rodal.formaParcel}
              onChange={(e) => handleChange('formaParcel', e.target.value)}
              className="input"
            >
              <option>Circular</option>
              <option>Rectangular</option>
              <option>Cuadrada</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Fecha de Muestreo">
            <input
              type="date"
              value={rodal.fechaMuestreo}
              onChange={(e) => handleChange('fechaMuestreo', e.target.value)}
              className="input"
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
