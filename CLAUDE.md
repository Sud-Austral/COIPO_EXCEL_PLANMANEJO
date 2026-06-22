# Plan de Manejo Forestal - App React

## Objetivo
Crear una herramienta web simplificada basada en el archivo Excel **"2016_PM_Nativo Liberado.xlsm"** que permita a profesionales forestales construir planes de manejo de forma intuitiva y eficiente, sin dependencias de bases de datos (todo en memoria con localStorage).

## Estructura de la Aplicación

### Tecnología
- **Frontend**: React 19 + Vite
- **State Management**: React Context API
- **Storage**: localStorage (JSON)
- **Styling**: CSS puro (sin frameworks)

### Secciones Principales (7 hojas del Excel)

1. **Solicitud** - Datos del solicitante y representante legal
   - Tipo de solicitud (Plan de Manejo Forestal de Bosque Nativo / Ordenación)
   - Datos del interesado (nombre, domicilio, email, teléfono, tipo de propiedad)
   - Datos del representante legal
   - Área afectada por incendios (opcional)
   - Número CUP (opcional)

2. **Antecedentes Generales** - Información general del proyecto
   - Nombre/Razón social propietario
   - Domicilio del predio
   - Teléfono y email de contacto
   - Profesional responsable (REQUIRED)
   - Institución/Empresa

3. **Análisis del Rodal** - Características del bosque a intervenir
   - Nombre del rodal
   - Tipo forestal (Lenga, Coihue, Ñire, Araucaria, Pino, etc.)
   - Subtipo forestal
   - Estructura (Regular, Irregular, Mixta)
   - Estado de desarrollo (Fustal joven, adulto, Latizal, Brinzal)
   - Superficie del rodal (ha)
   - Parámetros de muestreo:
     - Tipo de muestreo (Aleatorio simple, Sistemático, Estratificado)
     - Número de parcelas
     - Superficie de parcelas (m²)
     - Forma de parcela (Circular, Rectangular, Cuadrada)
     - Fecha de muestreo

4. **Inventario Forestal** - Tabla editable de datos de árboles
   - Rodal, Parcela, Especie, DAP/DAT (cm), Intervención (P, p, x, X)
   - Editable: agregar/eliminar filas
   - Pre-cargado con datos de ejemplo de Lenga

5. **Diagnóstico Preliminar** - Análisis cualitativo
   - Descripción general del rodal
   - Flora silvestre
   - Fauna asociada
   - Amenazas identificadas
   - Oportunidades y potencialidades

6. **Información Cuantitativa** - Datos numéricos del inventario
   - Tipo de datos (Muestreo sistemático, Censo completo, Aleatorio)
   - Metodología de levantamiento
   - Resultados principales

7. **Cartografía** - Información cartográfica
   - Descripción de elementos cartográficos
   - Escala
   - Fuente de información

## Características Técnicas

### Estado Global (PlanContext)
```javascript
{
  solicitud: { tipoSolicitud, areaIncendios, cupNumero, interesado, representante }
  antecedentes: { nombre, domicilio, telefonoContacto, email, profesionalResponsable, institucion }
  rodal: { nombre, tipoForestal, subtipo, estructura, estadoDesarrollo, superficie, muestreo, ... }
  inventario: [ { rodal, parcela, especie, dap, intervencion }, ... ]
  diagnostico: { descripcion, flora, fauna, amenazas, oportunidades }
  informacionCuantitativa: { tipoDatos, metodologia, resultados }
  cartografia: { descripcion, escala, fuente }
}
```

### Componentes Principales
- **App.jsx** - Contenedor principal con navegación lateral
- **PlanContext.jsx** - Gestión global de estado
- **FormSection.jsx** - Componentes reutilizables de formularios
- **Solicitud.jsx** - Formulario de datos básicos
- **Antecedentes.jsx** - Información general
- **AnalisisRodal.jsx** - Características del rodal
- **InventarioForestal.jsx** - Tabla editable de inventario
- **Diagnostico.jsx** - Análisis cualitativo
- **InformacionCuantitativa.jsx** - Datos numéricos
- **Cartografia.jsx** - Información cartográfica

### Funcionalidades Clave
1. ✅ Navegación lateral con 8 secciones
2. ✅ Formularios completamente editables
3. ✅ Tabla de inventario con agregar/eliminar filas
4. ✅ Auto-guardado en localStorage
5. ✅ Exportar datos como JSON
6. ✅ Limpiar todos los datos
7. ✅ Responsive (mobile-friendly)

## Datos de Ejemplo (Pre-cargados)
- Rodal: C2
- Tipo Forestal: Lenga
- Parcela: 1
- Ejemplos de árboles con DAP y intervención registrados

## Guía de Uso

### Para Ejecutar
```bash
cd frontend
npm install
npm run dev
```

### Para Construir
```bash
npm run build
```

### Flujo Típico de Usuario
1. Ir a **Solicitud** y llenar datos del solicitante
2. Ir a **Antecedentes** y completar información general
3. Ir a **Análisis Rodal** y definir características del bosque
4. Ir a **Inventario** y agregar/editar datos de árboles
5. Llenar **Diagnóstico** con análisis cualitativo
6. Completar **Información Cuantitativa** y **Cartografía**
7. Exportar como JSON cuando esté listo

## Notas Importantes

### Basado en archivo Excel
El archivo **"2016_PM_Nativo Liberado.xlsm"** tiene 7 hojas:
- Solicitud (127 x 116 celdas)
- PM 00 (Antecedentes - 62 x 115)
- Inventario (1,048,576 x 46 - tabla dinámica)
- Rodal (873 x 16,384 - análisis detallado)
- PM 01 (Diagnóstico - 544 x 515)
- PM 02 (Info Cuantitativa - 94 x 142)
- PM 03 (Cartografía - 112 x 109)

La app replica **SOLO** las funcionalidades esenciales de forma simplificada.

### Mejoras Realizadas vs Excel
- Interfaz limpia y moderna (sin celdas confusas)
- Tabla de inventario mucho más intuitiva
- Validación en tiempo real
- Auto-guardado automático
- Colores e iconos para mejor navegación

### Almacenamiento
- Los datos se guardan automáticamente en `localStorage` bajo la clave `planManejo`
- JSON exportable para integración con otros sistemas
- No requiere servidor backend

## Estructura de Carpetas
```
frontend/
├── src/
│   ├── context/
│   │   └── PlanContext.jsx
│   ├── components/
│   │   ├── FormSection.jsx
│   │   ├── Solicitud.jsx
│   │   ├── Antecedentes.jsx
│   │   ├── AnalisisRodal.jsx
│   │   ├── InventarioForestal.jsx
│   │   ├── Diagnostico.jsx
│   │   ├── InformacionCuantitativa.jsx
│   │   └── Cartografia.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```

## Próximas Mejoras Posibles
- [ ] Importar datos desde Excel (.xlsx)
- [ ] Exportar a PDF
- [ ] Validaciones más estrictas
- [ ] Cálculos automáticos (densidad, área basal, volumen)
- [ ] Integración con backend para persistencia
- [ ] Autenticación de usuarios
- [ ] Historial de cambios
- [ ] Múltiples proyectos simultáneos
