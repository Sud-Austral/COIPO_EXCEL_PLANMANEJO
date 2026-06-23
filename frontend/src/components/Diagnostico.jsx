import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';
import { EditableTable } from './EditableTable';

const ESTADOS_CONSERVACION = [
  'En Peligro Crítico (CR)',
  'En Peligro (EN)',
  'Vulnerable (VU)',
  'Casi Amenazada (NT)',
  'Preocupación Menor (LC)',
  'Datos Insuficientes (DD)',
  'Fuera de Peligro',
  'Sin clasificación',
];

export const Diagnostico = () => {
  const { plan, updateDiagnostico } = usePlan();
  const { diagnostico } = plan;

  const set = (field, value) => updateDiagnostico({ [field]: value });

  return (
    <div className="view">
      <FormSection
        title="4.1 DESCRIPCIÓN DE ASPECTOS RELEVANTES DEL PREDIO"
      >
        <FormRow>
          <FormGroup label="Descripción">
            <textarea
              value={diagnostico.descripcionPredio}
              onChange={(e) => set('descripcionPredio', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa los aspectos relevantes del predio..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="4.2.1 FLORA"
        description="Especies de flora con problemas de conservación"
      >
        <EditableTable
          columns={[
            { key: 'especie', label: 'Especie', placeholder: 'Nombre científico/común' },
            { key: 'estadoConservacion', label: 'Estado Conservación', type: 'select', options: ESTADOS_CONSERVACION },
            { key: 'observaciones', label: 'Observaciones', placeholder: 'Observaciones' },
          ]}
          rows={diagnostico.flora}
          onChange={(rows) => set('flora', rows)}
          newRow={{ especie: '', estadoConservacion: '', observaciones: '' }}
          addLabel="+ Agregar especie de flora"
        />
        <FormRow>
          <FormGroup label="Criterios para la definición de área buffer">
            <textarea
              value={diagnostico.criteriosBufferFlora}
              onChange={(e) => set('criteriosBufferFlora', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Criterios para área buffer de protección de flora..."
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Observaciones (Flora)">
            <textarea
              value={diagnostico.observacionesFlora}
              onChange={(e) => set('observacionesFlora', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Observaciones generales sobre la flora..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="4.2.2 FAUNA"
        description="Especies de fauna con problemas de conservación"
      >
        <EditableTable
          columns={[
            { key: 'especie', label: 'Especie', placeholder: 'Nombre científico/común' },
            { key: 'estadoConservacion', label: 'Estado Conservación', type: 'select', options: ESTADOS_CONSERVACION },
            { key: 'observaciones', label: 'Observaciones', placeholder: 'Observaciones' },
          ]}
          rows={diagnostico.fauna}
          onChange={(rows) => set('fauna', rows)}
          newRow={{ especie: '', estadoConservacion: '', observaciones: '' }}
          addLabel="+ Agregar especie de fauna"
        />
        <FormRow>
          <FormGroup label="Observaciones (Fauna)">
            <textarea
              value={diagnostico.observacionesFauna}
              onChange={(e) => set('observacionesFauna', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Observaciones generales sobre la fauna..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="5.1.1 DEFINICIÓN DE LOS RODALES">
        <EditableTable
          columns={[
            { key: 'rodal', label: 'Rodal', placeholder: 'Ej: C2' },
            { key: 'superficie', label: 'Superficie (ha)', type: 'number' },
          ]}
          rows={diagnostico.rodales}
          onChange={(rows) => set('rodales', rows)}
          newRow={{ rodal: '', superficie: '' }}
          addLabel="+ Agregar rodal"
        />
        <FormRow>
          <FormGroup label="Criterios para la definición de los rodales">
            <textarea
              value={diagnostico.criteriosRodales}
              onChange={(e) => set('criteriosRodales', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Criterios y observaciones para definir los rodales..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="5.1.2 DESCRIPCIÓN CUALITATIVA">
        <EditableTable
          columns={[
            { key: 'rodal', label: 'Rodal', placeholder: 'Ej: C2' },
            { key: 'especiesDominantes', label: 'Especies Dominantes', placeholder: 'Especies' },
            { key: 'observaciones', label: 'Observaciones', placeholder: 'Observaciones' },
          ]}
          rows={diagnostico.descripcionCualitativa}
          onChange={(rows) => set('descripcionCualitativa', rows)}
          newRow={{ rodal: '', especiesDominantes: '', observaciones: '' }}
          addLabel="+ Agregar descripción"
        />
      </FormSection>

      <FormSection
        title="5.1.3 CARACTERIZACIÓN DE LA REGENERACIÓN"
        description="Considerar altura de hasta 1m en condiciones especiales"
      >
        <EditableTable
          columns={[
            { key: 'rodal', label: 'Rodal', placeholder: 'Ej: C2' },
            { key: 'especies', label: 'Especies', placeholder: 'Especies en regeneración' },
            { key: 'altura', label: 'Altura (m)', type: 'number' },
            { key: 'factoresRiesgo', label: 'Factores de Riesgo', placeholder: 'Factores' },
          ]}
          rows={diagnostico.regeneracion}
          onChange={(rows) => set('regeneracion', rows)}
          newRow={{ rodal: '', especies: '', altura: '', factoresRiesgo: '' }}
          addLabel="+ Agregar regeneración"
        />
      </FormSection>

      <FormSection title="5.1.4 ANTECEDENTES HISTÓRICOS DEL RODAL">
        <h3 className="subsection-title">a) Bonificaciones anteriores</h3>
        <EditableTable
          columns={[
            { key: 'rodal', label: 'Rodal', placeholder: 'Ej: C2' },
            { key: 'actividad', label: 'Actividad Bonificada', placeholder: 'Actividad' },
            { key: 'año', label: 'Año', type: 'number', placeholder: '2020' },
          ]}
          rows={diagnostico.bonificacionesAnteriores}
          onChange={(rows) => set('bonificacionesAnteriores', rows)}
          newRow={{ rodal: '', actividad: '', año: '' }}
          addLabel="+ Agregar bonificación"
        />
        <FormRow>
          <FormGroup label="b) Historia del rodal y análisis del efecto de la intervención">
            <textarea
              value={diagnostico.historiaRodal}
              onChange={(e) => set('historiaRodal', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa la historia del rodal..."
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="c) Observaciones">
            <textarea
              value={diagnostico.observacionesHistoricas}
              onChange={(e) => set('observacionesHistoricas', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Observaciones históricas..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="AMENAZAS Y OPORTUNIDADES"
        description="Análisis complementario del rodal"
      >
        <FormRow>
          <FormGroup label="Amenazas Identificadas">
            <textarea
              value={diagnostico.amenazas}
              onChange={(e) => set('amenazas', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Describa las amenazas al bosque..."
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Oportunidades y Potencialidades">
            <textarea
              value={diagnostico.oportunidades}
              onChange={(e) => set('oportunidades', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Describa las oportunidades detectadas..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
