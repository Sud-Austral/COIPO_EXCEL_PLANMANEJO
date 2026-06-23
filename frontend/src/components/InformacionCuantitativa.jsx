import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';
import { EditableTable } from './EditableTable';

export const InformacionCuantitativa = () => {
  const { plan, updateInformacionCuantitativa } = usePlan();
  const { informacionCuantitativa: ic } = plan;

  const set = (field, value) => updateInformacionCuantitativa({ [field]: value });

  return (
    <div className="view">
      <FormSection
        title="12.1 INVENTARIO FORESTAL"
        description="Características generales del levantamiento"
      >
        <FormRow>
          <FormGroup label="Tipo de Datos">
            <select
              value={ic.tipoDatos}
              onChange={(e) => set('tipoDatos', e.target.value)}
              className="input"
            >
              <option value="">Seleccione</option>
              <option>Muestreo sistemático</option>
              <option>Censo completo</option>
              <option>Muestreo aleatorio</option>
              <option>Muestreo estratificado</option>
            </select>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Metodología de Levantamiento">
            <textarea
              value={ic.metodologia}
              onChange={(e) => set('metodologia', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Describa la metodología utilizada..."
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="12.1.1 Justificación del tipo de muestreo"
            hint="Forma, tamaño y número de parcelas"
          >
            <textarea
              value={ic.justificacionMuestreo}
              onChange={(e) => set('justificacionMuestreo', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Justifique el diseño de muestreo elegido..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="12.1.2 COORDENADAS UTM DE PARCELAS"
        description="Ubicación de las parcelas de muestreo (Datum WGS 84)"
      >
        <EditableTable
          columns={[
            { key: 'parcela', label: 'Parcela', type: 'number' },
            { key: 'este', label: 'Este (m)', type: 'number' },
            { key: 'norte', label: 'Norte (m)', type: 'number' },
            { key: 'zona', label: 'Zona', type: 'select', options: ['18S', '19S'] },
          ]}
          rows={ic.coordenadasParcelas}
          onChange={(rows) => set('coordenadasParcelas', rows)}
          newRow={{ parcela: '', este: '', norte: '', zona: '18S' }}
          addLabel="+ Agregar parcela"
        />
        <FormRow>
          <FormGroup label="Identificación de parcelas en terreno">
            <textarea
              value={ic.identificacionTerreno}
              onChange={(e) => set('identificacionTerreno', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Describa cómo se identificaron las parcelas en terreno..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="12.1.3 FUNCIONES DE VOLUMEN O BIOMASA"
        description="Funciones utilizadas por especie"
      >
        <EditableTable
          columns={[
            { key: 'especie', label: 'Especie', placeholder: 'Lenga' },
            { key: 'funcion', label: 'Función utilizada', placeholder: 'V = a + b·DAP² ...' },
          ]}
          rows={ic.funcionesVolumen}
          onChange={(rows) => set('funcionesVolumen', rows)}
          newRow={{ especie: '', funcion: '' }}
          addLabel="+ Agregar función"
        />
      </FormSection>

      <FormSection title="12.1.4 RESUMEN DEL INVENTARIO">
        <EditableTable
          columns={[
            { key: 'rodal', label: 'Rodal', placeholder: 'Ej: C2' },
            { key: 'parcelas', label: 'N° Parcelas', type: 'number' },
            { key: 'superficie', label: 'Superficie (ha)', type: 'number' },
          ]}
          rows={ic.resumenInventario}
          onChange={(rows) => set('resumenInventario', rows)}
          newRow={{ rodal: '', parcelas: '', superficie: '' }}
          addLabel="+ Agregar rodal"
        />
      </FormSection>

      <FormSection
        title="12.1.5 INTENSIDAD DE LA INTERVENCIÓN INMEDIATA"
        description="Densidad antes y después de la intervención"
      >
        <EditableTable
          columns={[
            { key: 'rodal', label: 'Rodal', placeholder: 'Ej: C2' },
            { key: 'densidadInicial', label: 'Densidad Inicial (árb/ha)', type: 'number' },
            { key: 'densidadFinal', label: 'Densidad Final (árb/ha)', type: 'number' },
          ]}
          rows={ic.intensidadIntervencion}
          onChange={(rows) => set('intensidadIntervencion', rows)}
          newRow={{ rodal: '', densidadInicial: '', densidadFinal: '' }}
          addLabel="+ Agregar rodal"
        />
      </FormSection>

      <FormSection title="RESULTADOS PRINCIPALES">
        <FormRow>
          <FormGroup label="Resultados">
            <textarea
              value={ic.resultados}
              onChange={(e) => set('resultados', e.target.value)}
              className="textarea"
              rows="4"
              placeholder="Describa los resultados principales del inventario..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
