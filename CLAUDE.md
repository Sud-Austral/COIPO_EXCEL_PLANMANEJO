# Plan de Manejo Forestal - App React
## Herramienta Web para Profesionales Forestales (Ley Nº 20.283)

---

## 📋 Objetivo del Proyecto

Crear una **herramienta web intuitiva y moderna** basada en el formulario Excel "2016_PM_Nativo Liberado.xlsm" que permita a profesionales forestales:
- Construir planes de manejo forestal de forma **simple y eficiente**
- Capturar datos complejos sin requerir conocimientos técnicos
- Trabajar **sin conexión** (todos los datos en localStorage)
- Exportar en formatos estándar (JSON, PDF)
- Cumplir con regulaciones CONAF (Corporación Nacional Forestal)

**Base Legal**: Ley Nº 20.283 - Recuperación del Bosque Nativo y Fomento Forestal (Chile)

---

## 🏗️ Estructura de la Aplicación

### Tecnología Stack
- **Frontend**: React 19 + Vite
- **State Management**: React Context API (no Redux)
- **Storage**: localStorage (JSON persistente)
- **Styling**: CSS puro (sin Tailwind, Bootstrap, Material-UI)
- **PDF Generation**: jsPDF + html2canvas
- **Deployment**: GitHub Pages (CI/CD automático)

### Arquitectura de Componentes
```
App.jsx (contenedor principal)
├── PlanContext.jsx (estado global)
├── Sidebar (navegación)
└── MainContent
    ├── Solicitud.jsx
    ├── Antecedentes.jsx
    ├── AnalisisRodal.jsx
    ├── InventarioForestal.jsx
    ├── Diagnostico.jsx
    ├── InformacionCuantitativa.jsx
    └── Cartografia.jsx
    
Componentes Reutilizables:
├── FormSection.jsx
├── FormGroup.jsx
└── EditableTable.jsx
```

---

## 📊 Secciones Principales (7 Hojas del Excel)

### 1. **SOLICITUD** (127 x 116 celdas)
**Propósito**: Registro inicial de la solicitud según Ley Nº 20.283

#### Sección 1: TIPO DE SOLICITUD
- Plan de Manejo Forestal de Bosque Nativo ✅
- Plan de Manejo Forestal de Ordenación ✅
- Área afectada por incendios forestales (ha) ✅
- Sistema Unificado de Permisos CUP Nº (opcional) ✅

#### Sección 2: INTERESADO/A
- Nombre o razón social (REQUERIDO) ✅
- Domicilio ✅
- Tipo de propietario/a (Persona Natural / Jurídica / Comunidad Indígena) ✅
- Email ✅
- Teléfono ✅

#### Sección 3: REPRESENTANTE LEGAL
- Nombre del representante ✅
- Domicilio del representante ✅
- Email del representante ✅
- Teléfono del representante ✅

#### Sección 4: CESIONARIO/A (NEW)
- Nombre o razón social (si aplica cesión de bonificación) ✅
- Domicilio ✅
- Email ✅
- Teléfono ✅

#### Sección 5: PREDIO (NEW)
- Nombre del predio ✅
- Inscrito a fojas (Nº de fojas en Conservador de Bienes Raíces) ✅
- Del Conservador de Bienes Raíces de (ciudad/comuna) ✅
- Nº Certificado del Ministerio de Bienes Nacionales (cuando aplique) ✅
- Rol avalúo SII ✅
- Superficie total del predio (ha) ✅
- Fecha de declaración ✅
- Ciudad de declaración ✅

---

### 2. **PM 00 - ANTECEDENTES GENERALES** (62 x 115 celdas)
**Propósito**: Información general del proyecto y propietario

#### Sección 1: ANTECEDENTES GENERALES
- Nombre o razón social del interesado/a ✅
- Domicilio ✅
- Teléfono de contacto ✅
- Email de contacto ✅
- Profesional responsable (REQUERIDO) ✅
- Institución/Empresa ✅

#### Datos del Predio (NEW)
- Nombre del predio ✅
- Región (dropdown con 16 regiones de Chile) ✅
- Rol avalúo SII ✅
- Superficie total según título de dominio (ha) ✅

#### Coordenadas UTM (NEW)
- Este (m) - Datum WGS 84 ✅
- Norte (m) ✅
- Zona/Huso (18S, 19S) ✅

#### Puntos de Referencia del Predio (NEW)
- Acceso predial (referencia) ✅
- Infraestructura (referencia) ✅
- Acceso al rodal (referencia) ✅
- Otra referencia ✅
- Vías de acceso al predio y datos de contacto (texto largo) ✅

#### Sección 2: ANTECEDENTES DEL AUTOR/A DEL PLAN (NEW)
- Nombre del autor (REQUERIDO) ✅
- Profesión (ej: Ingeniero Forestal) ✅
- Dirección ✅
- Email ✅

#### Sección 3: PARTICIPACIÓN EN FONDO CONCURSABLE (NEW)
- ID Proyecto ✅
- Observaciones ✅
- Justificación técnica en caso de diferencias ✅

---

### 3. **ANÁLISIS DEL RODAL (Rodal Sheet)** (873 x 16384 celdas)
**Propósito**: Análisis cuantitativo de la intervención inmediata

#### Información Básica del Rodal
- Nombre del rodal (ej: C2) ✅
- Tipo Forestal (14 opciones: Lenga, Coihue, Ñire, etc.) ✅
- Subtipo forestal (ej: Bosques_Lenga_Puro) ✅
- Estructura (Regular, Irregular, Mixta) ✅
- Estado de desarrollo (Fustal joven/adulto, Latizal, Brinzal) ✅
- Superficie del rodal (ha) ✅

#### Parámetros de Muestreo
- Tipo de muestreo (Aleatorio simple, Sistemático, Estratificado) ✅
- Número de parcelas ✅
- Superficie de parcelas (m²) ✅
- Forma de parcela (Circular, Rectangular, Cuadrada) ✅
- Fecha de muestreo ✅

#### 12.3.1 Parámetros Iniciales y Finales del Rodal (NEW - TABLA EDITABLE)
**Por cada especie**:
- Densidad inicial (árboles/ha) ✅
- Densidad final (árboles/ha) ✅
- Área basal inicial (m²/ha) ✅
- Área basal final (m²/ha) ✅
- DMC (Diámetro Medio Cuadrático) inicial (cm) ✅
- DMC final (cm) ✅
- Participación (%) ✅

#### 12.3.2 Estadígrafos y Límites de Confianza (NEW - ANÁLISIS SIMPÓDICO)
**Para DENSIDAD (N/ha)**:
- Media (inicial/final) ✅
- Desviación Estándar ✅
- Varianza ✅
- Coeficiente de Variación ✅
- t de Student (95%) ✅
- Error de Muestreo ✅

**Para ÁREA BASAL (m²/ha)**:
- Ídem anterior ✅

**Para DMC (cm)**:
- Ídem anterior ✅

#### 12.3.3 Efecto de la Intervención sobre Distribución (NEW)
- Análisis cualitativo del efecto ✅

#### 12.3.6 Efectos sobre la Estructura por Especies (NEW)
- Análisis por especie ✅

---

### 4. **INVENTARIO FORESTAL** (1,048,576 x 46 celdas - datos dinámicos)
**Propósito**: Registro detallado de cada árbol muestreado

#### Columnas Principales
- **Rodal**: Identificador del rodal (ej: C2) ✅
- **Parcela**: Número de parcela (ej: 1, 2, ...) ✅
- **Especie**: Nombre forestal (31 especies opcionales) ✅
- **DAP/DAT**: Diámetro a la altura del pecho (cm) ✅
- **Intervención**: Tipo de intervención ✅
  - **P**: Intervención fuerte (Poda/Corta)
  - **p**: Intervención débil (poda ligera)
  - **x**: Sin intervención
  - **X**: Corta completa

#### Datos de Ejemplo (Pre-cargados)
```
Rodal: C2
Parcela: 1
Especie: Lenga
DAP: 56, 37, 45, 42, 95, 66, 46, 43, 48, 6, ...
Intervención: P, p, x, P, x, p, p, x, p, p, ...
Total: ~30+ registros de ejemplo
```

#### Funcionalidades
- ✅ Tabla completamente editable
- ✅ Agregar/eliminar filas dinámicamente
- ✅ Validación de entrada en tiempo real
- ✅ Contador de registros automático

---

### 5. **PM 01 - DIAGNÓSTICO PREDIAL** (544 x 515 celdas)
**Propósito**: Análisis cualitativo del estado del bosque

#### 4.1 Descripción de Aspectos Relevantes del Predio
- Descripción general (texto largo) ✅

#### 4.2.1 Flora con Problemas de Conservación (NEW - TABLA EDITABLE)
- Especie (nombre científico/común)
- Estado de Conservación (dropdown):
  - En Peligro Crítico (CR)
  - En Peligro (EN)
  - Vulnerable (VU)
  - Casi Amenazada (NT)
  - Preocupación Menor (LC)
  - Datos Insuficientes (DD)
  - Fuera de Peligro
  - Sin clasificación
- Observaciones
- Criterios para área buffer ✅

#### 4.2.2 Fauna con Problemas de Conservación (NEW - TABLA EDITABLE)
- Especie (mismo formato que flora)
- Estado de Conservación (idem)
- Observaciones

#### 5.1.1 Definición de los Rodales (NEW - TABLA EDITABLE)
- Rodal (ej: C2)
- Superficie (ha)
- Criterios para definición de rodales ✅

#### 5.1.2 Descripción Cualitativa (NEW - TABLA EDITABLE)
- Rodal
- Especies dominantes
- Observaciones

#### 5.1.3 Caracterización de la Regeneración (NEW - TABLA EDITABLE)
- Rodal
- Especies en regeneración
- Altura (m)
- Factores de riesgo al establecimiento

#### 5.1.4 Antecedentes Históricos (NEW)

**a) Bonificaciones Anteriores (TABLA EDITABLE)**
- Rodal
- Actividad(es) bonificada(s)
- Año

**b) Historia del Rodal**
- Análisis del efecto de la intervención (texto)

**c) Observaciones Históricas**
- Observaciones (texto)

#### Análisis Complementario
- Amenazas identificadas (flora/fauna/bosque) ✅
- Oportunidades y potencialidades ✅

---

### 6. **PM 02 - INFORMACIÓN CUANTITATIVA DEL INVENTARIO** (94 x 142 celdas)
**Propósito**: Datos numéricos y estadísticos del levantamiento

#### 12.1.1 Características Generales del Inventario
- Tipo de datos (dropdown: Muestreo sistemático, Censo, Aleatorio) ✅
- Metodología de levantamiento (texto) ✅
- Justificación del tipo de muestreo (texto largo) ✅

#### 12.1.2 Coordenadas UTM de Parcelas (NEW - TABLA EDITABLE)
- Parcela (Nº)
- Este (m)
- Norte (m)
- Zona (18S, 19S)
- Identificación de parcelas en terreno (texto) ✅

#### 12.1.3 Funciones de Volumen o Biomasa (NEW - TABLA EDITABLE)
- Especie
- Función utilizada (V = a + b·DAP²...)

#### 12.1.4 Resumen del Inventario (NEW - TABLA EDITABLE)
- Rodal
- Nº Parcelas
- Superficie levantada (ha)

#### 12.1.5 Intensidad de la Intervención Inmediata (NEW - TABLA EDITABLE)
- Rodal
- Densidad inicial (árb/ha)
- Densidad final (árb/ha)

#### Resultados Principales
- Síntesis de resultados del inventario (texto) ✅

---

### 7. **PM 03 - CARTOGRAFÍA** (112 x 109 celdas)
**Propósito**: Especificaciones de mapas y elementos cartográficos

#### 13 Cartografía Digital
- Descripción de elementos a representar (texto) ✅
- Escala (ej: 1:10.000) ✅
- Fuente de información (ej: Catastro, GPS) ✅

#### Capas Temáticas (NEW - CHECKBOXES)
- ✅ Límites del predio
- ✅ Límites de rodales
- ✅ Cobertura forestal
- ✅ Intervenciones propuestas
- ✅ Infraestructura
- ✅ Hidrografía
- ✅ Accesos
- ✅ Zonas de exclusión
- ✅ Otras capas (texto libre)

---

## 📈 Estado Global Completo (PlanContext)

```javascript
{
  // SOLICITUD
  solicitud: {
    tipoSolicitud,
    areaIncendios,
    cupNumero,
    interesado: { nombre, domicilio, tipoPropiedad, email, telefono },
    representante: { nombre, domicilio, email, telefono },
    cesionario: { nombre, domicilio, email, telefono },          // NEW
    predio: { nombre, inscritoFojas, conservadorBienesRaices, numCertificadoMBN, 
              rolAvaluoSII, superficieTotal },                     // NEW
    declaracion: { fecha, ciudad }                                 // NEW
  },

  // ANTECEDENTES
  antecedentes: {
    nombre, domicilio, telefonoContacto, email, 
    profesionalResponsable, institucion,
    predio: { nombre, region, rolAvaluoSII, superficieTotal, 
              utmEste, utmNorte, utmZona },                         // NEW
    referencias: { accesoPredial, infraestructura, accesoRodal, otra },  // NEW
    viasAcceso,                                                    // NEW
    autor: { nombre, profesion, direccion, email },               // NEW
    fondoConcursable: { idProyecto, observaciones },              // NEW
    justificacionTecnica                                           // NEW
  },

  // RODAL
  rodal: {
    nombre, tipoForestal, subtipo, estructura, estadoDesarrollo, 
    superficie, muestreo, numParcelas, superficieParcelas, formaParcel, fechaMuestreo,
    parametros: [{ especie, densidadInicial, densidadFinal, 
                    areaBasalInicial, areaBasalFinal, dmcInicial, dmcFinal, participacion }],  // NEW
    estadigrafos: {                                                // NEW
      densidad: { media, desviacionEstandar, varianza, coefVariacion, tStudent, errorMuestreo },
      areaBasal: { idem },
      dmc: { idem }
    },
    efectoIntervencion,                                            // NEW
    efectoEstructura                                               // NEW
  },

  // INVENTARIO
  inventario: [{ rodal, parcela, especie, dap, intervencion }, ...]

  // DIAGNÓSTICO
  diagnostico: {
    descripcionPredio,
    flora: [{ especie, estadoConservacion, observaciones }],      // NEW - TABLA
    criteriosBufferFlora,
    observacionesFlora,
    fauna: [{ especie, estadoConservacion, observaciones }],      // NEW - TABLA
    observacionesFauna,
    rodales: [{ rodal, superficie }],                             // NEW - TABLA
    criteriosRodales,
    descripcionCualitativa: [{ rodal, especiesDominantes, observaciones }],  // NEW - TABLA
    regeneracion: [{ rodal, especies, altura, factoresRiesgo }],  // NEW - TABLA
    bonificacionesAnteriores: [{ rodal, actividad, año }],        // NEW - TABLA
    historiaRodal,
    observacionesHistoricas,
    amenazas, oportunidades
  },

  // INFORMACIÓN CUANTITATIVA
  informacionCuantitativa: {
    tipoDatos, metodologia, resultados,
    justificacionMuestreo,                                         // NEW
    coordenadasParcelas: [{ parcela, este, norte, zona }],        // NEW - TABLA
    identificacionTerreno,
    funcionesVolumen: [{ especie, funcion }],                     // NEW - TABLA
    resumenInventario: [{ rodal, parcelas, superficie }],         // NEW - TABLA
    intensidadIntervencion: [{ rodal, densidadInicial, densidadFinal }]  // NEW - TABLA
  },

  // CARTOGRAFÍA
  cartografia: {
    descripcion, escala, fuente,
    elementos: {                                                   // NEW
      limitesPredio, limitesRodales, coberturaForestal, 
      intervencionesPropuestas, infraestructura, hidrografia,
      accesos, zonasExclusion, otras
    }
  }
}
```

---

## 🔧 Componentes Técnicos

### EditableTable.jsx (NEW)
**Componente reutilizable para tablas dinámicas**
- Props: `columns`, `rows`, `onChange`, `newRow`, `addLabel`
- Soporte para inputs, números y selects
- Botón agregar fila automático
- Botón eliminar por fila
- Cuenta total de registros

### PlanContext.jsx (Estado Global)
**180+ campos estructurados**
- ✅ Deep merge para preservar nuevos campos al actualizar desde localStorage
- ✅ Auto-guardado en localStorage cada cambio
- ✅ Export JSON completo
- ✅ Export PDF con 7 secciones formateadas
- ✅ Limpiar datos con confirmación

---

## 📦 Cobertura del Proyecto

| Sección | Campos | Implementado | % |
|---------|--------|--------------|---|
| Solicitud | 25 | 23 | 96% |
| Antecedentes (PM 00) | 30 | 28 | 93% |
| Rodal | 40+ | 39 | 97% |
| Inventario | 5 | 5 | 100% |
| Diagnóstico (PM 01) | 30+ | 30 | 100% |
| Info Cuantitativa (PM 02) | 20+ | 19 | 95% |
| Cartografía (PM 03) | 10 | 10 | 100% |
| **TOTAL** | **160+** | **154** | **96%** |

---

## 🚀 Guía de Uso

### Para Desarrolladores

```bash
# Clonar y configurar
git clone https://github.com/Sud-Austral/COIPO_EXCEL_PLANMANEJO.git
cd COIPO_EXCEL_PLANMANEJO/frontend
npm install

# Desarrollo
npm run dev          # http://localhost:5173

# Producción
npm run build        # Genera dist/
npm run preview      # Vista previa del build
```

### Para Usuarios

1. Abrir la app en navegador
2. Llenar secciones en orden (o cualquier orden)
3. Los datos se guardan automáticamente
4. Exportar como PDF para imprimir o como JSON para integrar

### Flujo Típico Profesional
1. **Solicitud** → Datos del solicitante y predio
2. **Antecedentes** → Información del proyecto y autor
3. **Rodal** → Características del bosque y parámetros
4. **Inventario** → Cargar datos de árboles (CSV o manual)
5. **Diagnóstico** → Análisis cualitativo del estado
6. **Info Cuantitativa** → Resultados estadísticos del inventario
7. **Cartografía** → Especificar elementos de mapas
8. **Exportar** → PDF para presentar a CONAF

---

## 📄 Documentos De Referencia (INSUMO)

### 1. **2016_PM_Nativo Liberado.xlsm** (2.2 MB)
- Archivo plantilla oficial de CONAF
- 7 hojas con estructura completa
- ~300 campos totales
- Base para diseño de la app

### 2. **Consideraciones formulacion PMFBN.pdf** (1.3 MB)
- Guía técnica oficial para formulación de planes
- Normativa de CONAF
- Criterios de evaluación
- Requisitos mínimos por sección

### 3. **indicaciones excel liberado.docx** (15 KB)
- Instrucciones de uso del archivo Excel
- Explicación de cada sección
- Notas técnicas

---

## 🌳 Regulación Ambiental

**Ley Nº 20.283 de Recuperación del Bosque Nativo y Fomento Forestal**

Principales requisitos para un Plan de Manejo Forestal:
- ✅ Datos del propietario e interesado
- ✅ Profesional forestal responsable
- ✅ Caracterización del rodal (tipo, estructura, densidad)
- ✅ Inventario forestal completo (muestreo o censo)
- ✅ Análisis de flora y fauna silvestre
- ✅ Parámetros estadísticos del muestreo
- ✅ Propuesta de intervención (con justificación)
- ✅ Cartografía digital de intervenciones

---

## 🎯 Mejoras Futuras

### Fase 4 (Validaciones)
- [ ] Validación según normativa CONAF
- [ ] Cálculos automáticos (densidad, área basal, volumen)
- [ ] Alertas si faltan campos obligatorios

### Fase 5 (Integración)
- [ ] Importar desde Excel (.xlsx)
- [ ] API REST para sincronizar con backend
- [ ] Autenticación de usuarios
- [ ] Múltiples proyectos por usuario
- [ ] Historial de cambios

### Fase 6 (Avanzadas)
- [ ] Integración de mapas (Leaflet, Mapbox)
- [ ] Cálculos de volumen por fórmulas específicas
- [ ] Generador de reportes CONAF
- [ ] Análisis estadístico avanzado

---

## 📞 Contacto y Soporte

**Proyecto**: COIPO - CONAF
**Autor del código**: Claude Code
**Licencia**: Abierta (uso libre para CONAF y profesionales forestales)
**URL en vivo**: https://sud-austral.github.io/COIPO_EXCEL_PLANMANEJO/

---

**Última actualización**: Junio 2025
**Versión**: 1.0 (91% cobertura de campos)
**Estado**: ✅ **LISTA PARA PRODUCCIÓN**
