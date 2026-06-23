import { usePlan } from '../context/PlanContext';
import { FormSection, FormGroup, FormRow } from './FormSection';

export const Solicitud = () => {
  const { plan, updateSolicitud } = usePlan();
  const { solicitud } = plan;

  const setNested = (group, field, value) => {
    updateSolicitud({ [group]: { ...solicitud[group], [field]: value } });
  };

  return (
    <div className="view">
      <FormSection
        title="1. SOLICITUD"
        description="Solicitud relativa a la Ley N° 20.283"
      >
        <FormRow>
          <FormGroup label="Tipo de Solicitud" required>
            <select
              value={solicitud.tipoSolicitud}
              onChange={(e) => updateSolicitud({ tipoSolicitud: e.target.value })}
              className="input"
            >
              <option>Plan de Manejo Forestal de Bosque Nativo</option>
              <option>Plan de Manejo Forestal de Ordenación</option>
              <option>Otro</option>
            </select>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup label="Área afectada por incendios forestales (ha)">
            <input
              type="number"
              value={solicitud.areaIncendios}
              onChange={(e) => updateSolicitud({ areaIncendios: e.target.value })}
              className="input"
              placeholder="0"
            />
          </FormGroup>
          <FormGroup label="Sistema Unificado de Permisos CUP N°">
            <input
              type="text"
              value={solicitud.cupNumero}
              onChange={(e) => updateSolicitud({ cupNumero: e.target.value })}
              className="input"
              placeholder="Número CUP"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="2. INTERESADO/A">
        <FormRow>
          <FormGroup label="Nombre o razón social" required>
            <input
              type="text"
              value={solicitud.interesado.nombre}
              onChange={(e) => setNested('interesado', 'nombre', e.target.value)}
              className="input"
              placeholder="Nombre del interesado"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Domicilio" required>
            <input
              type="text"
              value={solicitud.interesado.domicilio}
              onChange={(e) => setNested('interesado', 'domicilio', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Tipo de propietario/a">
            <select
              value={solicitud.interesado.tipoPropiedad}
              onChange={(e) => setNested('interesado', 'tipoPropiedad', e.target.value)}
              className="input"
            >
              <option value="">Seleccione</option>
              <option>Persona Natural</option>
              <option>Persona Jurídica</option>
              <option>Comunidad Indígena</option>
              <option>Comunidad Agrícola</option>
              <option>Sociedad</option>
            </select>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Email">
            <input
              type="email"
              value={solicitud.interesado.email}
              onChange={(e) => setNested('interesado', 'email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
          <FormGroup label="Teléfono">
            <input
              type="tel"
              value={solicitud.interesado.telefono}
              onChange={(e) => setNested('interesado', 'telefono', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="3. REPRESENTANTE LEGAL">
        <FormRow>
          <FormGroup label="Nombre">
            <input
              type="text"
              value={solicitud.representante.nombre}
              onChange={(e) => setNested('representante', 'nombre', e.target.value)}
              className="input"
              placeholder="Nombre del representante"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Domicilio">
            <input
              type="text"
              value={solicitud.representante.domicilio}
              onChange={(e) => setNested('representante', 'domicilio', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Email">
            <input
              type="email"
              value={solicitud.representante.email}
              onChange={(e) => setNested('representante', 'email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
          <FormGroup label="Teléfono">
            <input
              type="tel"
              value={solicitud.representante.telefono}
              onChange={(e) => setNested('representante', 'telefono', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="4. CESIONARIO/A"
        description="Completar sólo en caso de solicitudes de bonificación con cesión"
      >
        <FormRow>
          <FormGroup label="Nombre o razón social">
            <input
              type="text"
              value={solicitud.cesionario.nombre}
              onChange={(e) => setNested('cesionario', 'nombre', e.target.value)}
              className="input"
              placeholder="Nombre del cesionario"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Domicilio">
            <input
              type="text"
              value={solicitud.cesionario.domicilio}
              onChange={(e) => setNested('cesionario', 'domicilio', e.target.value)}
              className="input"
              placeholder="Dirección"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Email">
            <input
              type="email"
              value={solicitud.cesionario.email}
              onChange={(e) => setNested('cesionario', 'email', e.target.value)}
              className="input"
              placeholder="email@ejemplo.com"
            />
          </FormGroup>
          <FormGroup label="Teléfono">
            <input
              type="tel"
              value={solicitud.cesionario.telefono}
              onChange={(e) => setNested('cesionario', 'telefono', e.target.value)}
              className="input"
              placeholder="+56 9 1234 5678"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection title="5. PREDIO">
        <FormRow>
          <FormGroup label="Nombre del predio" required>
            <input
              type="text"
              value={solicitud.predio.nombre}
              onChange={(e) => setNested('predio', 'nombre', e.target.value)}
              className="input"
              placeholder="Nombre del predio"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Inscrito a fojas">
            <input
              type="text"
              value={solicitud.predio.inscritoFojas}
              onChange={(e) => setNested('predio', 'inscritoFojas', e.target.value)}
              className="input"
              placeholder="N° fojas"
            />
          </FormGroup>
          <FormGroup label="Del Conservador de Bienes Raíces de">
            <input
              type="text"
              value={solicitud.predio.conservadorBienesRaices}
              onChange={(e) => setNested('predio', 'conservadorBienesRaices', e.target.value)}
              className="input"
              placeholder="Ciudad/Comuna"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="N° Certificado del M. Bs. Nacionales"
            hint="Cuando corresponda"
          >
            <input
              type="text"
              value={solicitud.predio.numCertificadoMBN}
              onChange={(e) => setNested('predio', 'numCertificadoMBN', e.target.value)}
              className="input"
              placeholder="N° certificado"
            />
          </FormGroup>
          <FormGroup label="Rol avalúo SII">
            <input
              type="text"
              value={solicitud.predio.rolAvaluoSII}
              onChange={(e) => setNested('predio', 'rolAvaluoSII', e.target.value)}
              className="input"
              placeholder="Ej: 123-45"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Superficie total del predio (ha)">
            <input
              type="number"
              step="0.01"
              value={solicitud.predio.superficieTotal}
              onChange={(e) => setNested('predio', 'superficieTotal', e.target.value)}
              className="input"
              placeholder="0.00"
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection
        title="DECLARACIÓN"
        description="Declaro bajo juramento que los datos consignados son verídicos"
      >
        <FormRow>
          <FormGroup label="Fecha">
            <input
              type="date"
              value={solicitud.declaracion.fecha}
              onChange={(e) => setNested('declaracion', 'fecha', e.target.value)}
              className="input"
            />
          </FormGroup>
          <FormGroup label="Ciudad">
            <input
              type="text"
              value={solicitud.declaracion.ciudad}
              onChange={(e) => setNested('declaracion', 'ciudad', e.target.value)}
              className="input"
              placeholder="Ciudad"
            />
          </FormGroup>
        </FormRow>
      </FormSection>
    </div>
  );
};
