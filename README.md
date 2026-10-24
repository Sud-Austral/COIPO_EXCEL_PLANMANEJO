# 🌲 Plan de Manejo Forestal - App Web

Una herramienta web moderna para simplificar la construcción de planes de manejo forestal según la **Ley N° 20.283** de Chile.

## 📱 Demo

**🚀 [Ver la app en vivo](https://sud-austral.github.io/COIPO_EXCEL_PLANMANEJO/)**

## ✨ Características

- ✅ **7 secciones**: Solicitud, Antecedentes, Análisis del Rodal, Inventario, Diagnóstico, Información Cuantitativa, Cartografía
- ✅ **Tabla de inventario editable**: Agregar/eliminar filas, edición en tiempo real
- ✅ **Auto-guardado**: Datos guardados automáticamente en localStorage
- ✅ **Exportación JSON y PDF**: botones en la barra superior (`exportarJSON`, `exportarPDF` en `PlanContext.jsx`, PDF con `jsPDF`)
- ✅ **Interfaz intuitiva**: Diseño limpio y responsivo (desktop/mobile)
- ✅ **Pocas dependencias**: React 19 + Vite, más `jspdf` y `html2canvas` (esta última está declarada pero no la encontré importada en `frontend/src`)
- ✅ **Sin base de datos**: Todo funciona en el navegador

## 🚀 Instalación y Uso

### Requisitos
- Node.js (el workflow de despliegue usa Node 20) 
- npm o yarn

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/Sud-Austral/COIPO_EXCEL_PLANMANEJO.git
cd COIPO_EXCEL_PLANMANEJO

# Instalar dependencias
cd frontend
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

La app estará disponible en `http://localhost:5173/COIPO_EXCEL_PLANMANEJO/` (el `base` de Vite incluye el nombre del repositorio; no lo ejecuté)

## 📊 Secciones Principales

1. **Solicitud** - Datos del solicitante y representante legal
2. **Antecedentes** - Información general del proyecto
3. **Análisis del Rodal** - Características del bosque
4. **Inventario Forestal** - Tabla editable de árboles
5. **Diagnóstico** - Análisis cualitativo
6. **Información Cuantitativa** - Datos numéricos
7. **Cartografía** - Información cartográfica

## 🔄 Características Destacadas

### Tabla de Inventario
- Editar datos en tiempo real
- Agregar nuevas filas con botón `+ Agregar Fila`
- Eliminar filas con botón 🗑️
- Especificar: Rodal, Parcela, Especie, DAP/DAT, Intervención

### Persistencia
- Auto-guardado en localStorage
- Exportar datos como JSON
- Limpiar todos los datos si es necesario

### Diseño
- Interfaz verde profesional (tema forestal)
- Responsive para mobile y desktop
- Navegación clara con sidebar

## 🌐 Deployment

El proyecto está listo para GitHub Pages. El workflow automático (`.github/workflows/deploy.yml`) compila y publica cada push a `main`.

**URL de publicación**: `https://sud-austral.github.io/COIPO_EXCEL_PLANMANEJO/`

## 🧪 Pruebas y lint

No hay pruebas automáticas en el repositorio. Existe `npm run lint` (ESLint), ejecutado desde `frontend/`. No ejecuté build ni lint en esta revisión.

## 🛠️ Tecnologías

- React 19 + Vite
- Context API para state management
- `jspdf` para la exportación a PDF
- CSS puro (sin frameworks)
- localStorage para persistencia
- GitHub Pages para hosting

## 📚 Más documentación

[`CLAUDE.md`](CLAUDE.md) (guía técnica y de dominio) · [`insumos/00-PROBLEMA.md`](insumos/00-PROBLEMA.md) · [`insumos/01-SOLUCION.md`](insumos/01-SOLUCION.md) ·
[`CAMPOS_FALTANTES.md`](CAMPOS_FALTANTES.md) (análisis de campos del Excel; parte de lo que marca como faltante ya figura implementado en `CLAUDE.md`).

## 📚 Basado en

- Normativa: **Ley N° 20.283** - Recuperación del Bosque Nativo
- Institución: **CONAF** (Corporación Nacional Forestal)
- Documento de referencia: `2016_PM_Nativo Liberado.xlsm`

## 🤝 Contribuir

Las mejoras son bienvenidas. Abre un Issue o Pull Request.

## 📄 Licencia

No hay archivo `LICENSE` en el repositorio, así que la licencia está **pendiente de confirmar por el equipo** (versiones anteriores de este README declaraban MIT, y `CLAUDE.md` declara «uso libre para CONAF»).

---

**Desarrollado por** Sud Austral | **2025**
