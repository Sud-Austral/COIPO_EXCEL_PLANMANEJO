import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';
import { EditableTable } from './EditableTable';

const ESTADIGRAFOS = [
  { key: 'media', label: 'Media' },
  { key: 'desviacionEstandar', label: 'Desviación Estándar' },
  { key: 'varianza', label: 'Varianza' },
  { key: 'coefVariacion', label: 'Coef. de Variación' },
  { key: 'tStudent', label: 't de Student (95%)' },
  { key: 'errorMuestreo', label: 'Error de Muestreo' },
];

export const AnalisisRodal = () => {
  const { plan, updateRodal } = usePlan();
  const { rodal } = plan;

  const set = (field, value) => updateRodal({ [field]: value });

  const setEstadigrafo = (grupo, key, value) => {
    updateRodal({
      estadigrafos: {
        ...rodal.estadigrafos,
        [grupo]: { ...rodal.estadigrafos[grupo], [key]: value },
      },
    });
  };

  const EstadigrafoBlock = ({ titulo, grupo }) => (
    <div className="estadigrafo-block">
      <h4 className="estadigrafo-title">{titulo}</h4>
      <div className="estadigrafo-grid">
        {ESTADIGRAFOS.map((e) => (
          <div key={e.key} className="estadigrafo-item">
            <label>{e.label}</label>
            <input
              type="number"
              step="any"
              value={rodal.estadigrafos[grupo][e.key]}
              onChange={(ev) => setEstadigrafo(grupo, e.key, ev.target.value)}
              className="input"
              placeholder="0.00"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="view">
      <FormSection
        title="12.3 ANÁLISIS CUANTITATIVO DE LA INTERVENCIÓN"
        description="Características del rodal y parámetros de muestreo"
      >
        <FormRow>
          <FormGroup label="Nombre del Rodal" required>
            <input
              type="text"
              value={rodal.nombre}
              onChange={(e) => set('nombre', e.target.value)}
              className="input"
              placeholder="Ej: C2"
            />
          </FormGroup>
          <FormGroup label="Tipo Forestal" required>
            <select
              value={rodal.tipoForestal}
              onChange={(e) => set('tipoForestal', e.target.value)}
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
              onChange={(e) => set('subtipo', e.target.value)}
              className="input"
              placeholder="Ej: Bosques_Lenga_Puro"
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Estructura">
            <select
              value={rodal.estructura}
              onChange={(e) => set('estructura', e.target.value)}
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
              onChange={(e) => set('estadoDesarrollo', e.target.value)}
              className="input"
            >
              <option>Fustal joven</option>
              <option>Fustal adulto</option>
              <option>Latizal</option>
              <option>Brinzal</option>
            </select>
          </FormGroup>
          <FormGroup label="Superficie del Rodal (ha)">
            <input
              type="number"
              step="0.01"
              value={rodal.superficie}
              onChange={(e) => set('superficie', e.target.value)}
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
              onChange={(e) => set('muestreo', e.target.value)}
              className="input"
            >
              <option>Aleatorio simple</option>
              <option>Sistemático</option>
              <option>Estratificado</option>
            </select>
          </FormGroup>
          <FormGroup label="Número de Parcelas">
            <input
              type="number"
              value={rodal.numParcelas}
              onChange={(e) => set('numParcelas', e.target.value)}
              className="input"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Superficie Parcela (m²)">
            <input
              type="number"
              value={rodal.superficieParcelas}
              onChange={(e) => set('superficieParcelas', e.target.value)}
              className="input"
            />
          </FormGroup>
          <FormGroup label="Forma Parcela">
            <select
              value={rodal.formaParcel}
              onChange={(e) => set('formaParcel', e.target.value)}
              className="input"
            >
              <option>Circular</option>
              <option>Rectangular</option>
              <option>Cuadrada</option>
            </select>
          </FormGroup>
          <FormGroup label="Fecha de Muestreo">
            <input
              type="date"
              value={rodal.fechaMuestreo}
              onChange={(e) => set('fechaMuestreo', e.target.value)}
              className="input"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="12.3.1 PARÁMETROS INICIALES Y FINALES DEL RODAL"
        description="Por especie — densidad, área basal, DMC y participación"
      >
        <EditableTable
          columns={[
            { key: 'especie', label: 'Especie', placeholder: 'Lenga' },
            { key: 'densidadInicial', label: 'Densidad Ini (*/ha)', type: 'number' },
            { key: 'densidadFinal', label: 'Densidad Fin (*/ha)', type: 'number' },
            { key: 'areaBasalInicial', label: 'AB Ini (m²/ha)', type: 'number' },
            { key: 'areaBasalFinal', label: 'AB Fin (m²/ha)', type: 'number' },
            { key: 'dmcInicial', label: 'DMC Ini (cm)', type: 'number' },
            { key: 'dmcFinal', label: 'DMC Fin (cm)', type: 'number' },
            { key: 'participacion', label: 'Participación (%)', type: 'number' },
          ]}
          rows={rodal.parametros}
          onChange={(rows) => set('parametros', rows)}
          newRow={{
            especie: '', densidadInicial: '', densidadFinal: '',
            areaBasalInicial: '', areaBasalFinal: '', dmcInicial: '',
            dmcFinal: '', participacion: '',
          }}
          addLabel="+ Agregar especie"
        />
      </FormSection>

      <FormSection
        title="12.3.2 ESTADÍGRAFOS Y LÍMITES DE CONFIANZA"
        description="Análisis estadístico del muestreo por variable"
      >
        <EstadigrafoBlock titulo="Densidad (N/ha)" grupo="densidad" />
        <EstadigrafoBlock titulo="Área Basal (m²/ha)" grupo="areaBasal" />
        <EstadigrafoBlock titulo="DMC (cm)" grupo="dmc" />
      </FormSection>

      <FormSection title="12.3.3 / 12.3.6 EFECTOS DE LA INTERVENCIÓN">
        <FormRow>
          <FormGroup label="Efecto sobre la distribución diamétrica">
            <textarea
              value={rodal.efectoIntervencion}
              onChange={(e) => set('efectoIntervencion', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa el efecto de la intervención sobre la distribución..."
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Efecto sobre la estructura por especies">
            <textarea
              value={rodal.efectoEstructura}
              onChange={(e) => set('efectoEstructura', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa el efecto sobre la estructura por especies..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
