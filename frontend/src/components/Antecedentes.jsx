import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

const REGIONES = [
  'Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo',
  'Valparaíso', "Metropolitana", "O'Higgins", 'Maule', 'Ñuble', 'Biobío',
  'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes',
];

export const Antecedentes = () => {
  const { plan, updateAntecedentes } = usePlan();
  const { antecedentes } = plan;

  const set = (field, value) => updateAntecedentes({ [field]: value });
  const setNested = (group, field, value) =>
    updateAntecedentes({ [group]: { ...antecedentes[group], [field]: value } });

  return (
    <div className="view">
      <FormSection
        title="1. ANTECEDENTES GENERALES"
        description="Información del propietario y del predio"
      >
        <FormRow>
          <FormGroup label="Nombre o razón social del interesado/a" required>
            <input
              type="text"
              value={antecedentes.nombre}
              onChange={(e) => set('nombre', e.target.value)}
              className="input"
              placeholder="Nombre del propietario"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Domicilio">
            <input
              type="text"
              value={antecedentes.domicilio}
              onChange={(e) => set('domicilio', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Teléfono de Contacto">
            <input
              type="tel"
              value={antecedentes.telefonoContacto}
              onChange={(e) => set('telefonoContacto', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
          <FormGroup label="Email de Contacto">
            <input
              type="email"
              value={antecedentes.email}
              onChange={(e) => set('email', e.target.value)}
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
              onChange={(e) => set('profesionalResponsable', e.target.value)}
              className="input"
              placeholder="Nombre del profesional"
            />
          </FormGroup>
          <FormGroup label="Institución/Empresa">
            <input
              type="text"
              value={antecedentes.institucion}
              onChange={(e) => set('institucion', e.target.value)}
              className="input"
              placeholder="Nombre de la institución"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="DATOS DEL PREDIO">
        <FormRow>
          <FormGroup label="Nombre del predio">
            <input
              type="text"
              value={antecedentes.predio.nombre}
              onChange={(e) => setNested('predio', 'nombre', e.target.value)}
              className="input"
              placeholder="Nombre del predio"
            />
          </FormGroup>
          <FormGroup label="Región">
            <select
              value={antecedentes.predio.region}
              onChange={(e) => setNested('predio', 'region', e.target.value)}
              className="input"
            >
              <option value="">Seleccione región</option>
              {REGIONES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Rol avalúo SII">
            <input
              type="text"
              value={antecedentes.predio.rolAvaluoSII}
              onChange={(e) => setNested('predio', 'rolAvaluoSII', e.target.value)}
              className="input"
              placeholder="Ej: 123-45"
            />
          </FormGroup>
          <FormGroup label="Superficie total del predio (ha)" hint="Según título de dominio">
            <input
              type="number"
              step="0.01"
              value={antecedentes.predio.superficieTotal}
              onChange={(e) => setNested('predio', 'superficieTotal', e.target.value)}
              className="input"
              placeholder="0.00"
            />
          </FormGroup>
        </FormRow>

        <h3 className="subsection-title">Coordenadas UTM (Datum WGS 84)</h3>
        <FormRow>
          <FormGroup label="Este (m)">
            <input
              type="number"
              value={antecedentes.predio.utmEste}
              onChange={(e) => setNested('predio', 'utmEste', e.target.value)}
              className="input"
              placeholder="Ej: 720500"
            />
          </FormGroup>
          <FormGroup label="Norte (m)">
            <input
              type="number"
              value={antecedentes.predio.utmNorte}
              onChange={(e) => setNested('predio', 'utmNorte', e.target.value)}
              className="input"
              placeholder="Ej: 5450000"
            />
          </FormGroup>
          <FormGroup label="Zona/Huso">
            <select
              value={antecedentes.predio.utmZona}
              onChange={(e) => setNested('predio', 'utmZona', e.target.value)}
              className="input"
            >
              <option>18S</option>
              <option>19S</option>
            </select>
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="PUNTOS DE REFERENCIA DEL PREDIO"
        description="Señalar punto(s) de referencia para acceder al predio"
      >
        <FormRow>
          <FormGroup label="Acceso predial">
            <input
              type="text"
              value={antecedentes.referencias.accesoPredial}
              onChange={(e) => setNested('referencias', 'accesoPredial', e.target.value)}
              className="input"
              placeholder="Referencia de acceso al predio"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Infraestructura">
            <input
              type="text"
              value={antecedentes.referencias.infraestructura}
              onChange={(e) => setNested('referencias', 'infraestructura', e.target.value)}
              className="input"
              placeholder="Infraestructura de referencia"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Acceso al rodal">
            <input
              type="text"
              value={antecedentes.referencias.accesoRodal}
              onChange={(e) => setNested('referencias', 'accesoRodal', e.target.value)}
              className="input"
              placeholder="Referencia de acceso al rodal"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Otra referencia">
            <input
              type="text"
              value={antecedentes.referencias.otra}
              onChange={(e) => setNested('referencias', 'otra', e.target.value)}
              className="input"
              placeholder="Otra referencia"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Vías de acceso al predio y datos de contacto">
            <textarea
              value={antecedentes.viasAcceso}
              onChange={(e) => set('viasAcceso', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Describa las vías de acceso..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="2. ANTECEDENTES DEL AUTOR/A DEL PLAN DE MANEJO">
        <FormRow>
          <FormGroup label="Nombre" required>
            <input
              type="text"
              value={antecedentes.autor.nombre}
              onChange={(e) => setNested('autor', 'nombre', e.target.value)}
              className="input"
              placeholder="Nombre del autor"
            />
          </FormGroup>
          <FormGroup label="Profesión">
            <input
              type="text"
              value={antecedentes.autor.profesion}
              onChange={(e) => setNested('autor', 'profesion', e.target.value)}
              className="input"
              placeholder="Ej: Ingeniero Forestal"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Dirección">
            <input
              type="text"
              value={antecedentes.autor.direccion}
              onChange={(e) => setNested('autor', 'direccion', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
          <FormGroup label="Email">
            <input
              type="email"
              value={antecedentes.autor.email}
              onChange={(e) => setNested('autor', 'email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="3. PARTICIPACIÓN EN EL FONDO CONCURSABLE">
        <FormRow>
          <FormGroup label="ID Proyecto">
            <input
              type="text"
              value={antecedentes.fondoConcursable.idProyecto}
              onChange={(e) => setNested('fondoConcursable', 'idProyecto', e.target.value)}
              className="input"
              placeholder="ID del proyecto"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Observaciones">
            <textarea
              value={antecedentes.fondoConcursable.observaciones}
              onChange={(e) => setNested('fondoConcursable', 'observaciones', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Observaciones sobre el fondo concursable..."
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Justificación técnica"
            hint="En caso de diferencias entre lo declarado y lo verificado"
          >
            <textarea
              value={antecedentes.justificacionTecnica}
              onChange={(e) => set('justificacionTecnica', e.target.value)}
              className="textarea"
              rows="3"
              placeholder="Justificación técnica..."
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
