# 🌲 Plan de Manejo Forestal - App Web

Una herramienta web moderna para simplificar la construcción de planes de manejo forestal según la **Ley N° 20.283** de Chile.

## 📱 Demo

**🚀 [Ver la app en vivo](https://sud-austral.github.io/COIPO_EXCEL_PLANMANEJO/)**

## ✨ Características

- ✅ **8 secciones completas**: Solicitud, Antecedentes, Análisis del Rodal, Inventario, Diagnóstico, Información Cuantitativa, Cartografía
- ✅ **Tabla de inventario editable**: Agregar/eliminar filas, edición en tiempo real
- ✅ **Auto-guardado**: Datos guardados automáticamente en localStorage
- ✅ **Exportación JSON**: Descargar datos para integración con otros sistemas
- ✅ **Interfaz intuitiva**: Diseño limpio y responsivo (desktop/mobile)
- ✅ **Sin dependencias externas**: Solo React 19 + Vite
- ✅ **Sin base de datos**: Todo funciona en el navegador

## 🚀 Instalación y Uso

### Requisitos
- Node.js 16+ 
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

La app estará disponible en `http://localhost:5173`

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

## 🛠️ Tecnologías

- React 19 + Vite
- Context API para state management
- CSS puro (sin frameworks)
- localStorage para persistencia
- GitHub Pages para hosting

## 📚 Basado en

- Normativa: **Ley N° 20.283** - Recuperación del Bosque Nativo
- Institución: **CONAF** (Corporación Nacional Forestal)
- Documento de referencia: `2016_PM_Nativo Liberado.xlsm`

## 🤝 Contribuir

Las mejoras son bienvenidas. Abre un Issue o Pull Request.

## 📄 Licencia

MIT License - Ver LICENSE para detalles

---

**Desarrollado por** Sud Austral | **2025**
