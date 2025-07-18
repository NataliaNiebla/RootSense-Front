# RootSense Front - Sistema de Monitoreo de Invernaderos

## 📋 Descripción del Proyecto

RootSense Front es una aplicación web desarrollada en React que proporciona una interfaz de usuario para el monitoreo y control de sistemas de invernaderos inteligentes. La aplicación permite gestionar sensores, actuadores, bandejas de cultivo, generar reportes y administrar usuarios.

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0** - Framework principal
- **Vite 6.3.5** - Build tool y servidor de desarrollo
- **React Router Dom 7.6.3** - Manejo de rutas
- **Ant Design 5.26.1** - Biblioteca de componentes UI
- **Chart.js 4.5.0** - Gráficos y visualizaciones
- **Tailwind CSS 4.1.11** - Framework CSS utility-first
- **Auth0 React 2.3.0** - Autenticación y autorización
- **Day.js 1.11.13** - Manejo de fechas
- **PostCSS & Autoprefixer** - Procesamiento CSS

## 🏗️ Estructura del Proyecto

```
RootSenseFront/
├── 📁 public/                    # Archivos estáticos
│   ├── vite.svg
│   └── fonts/                    # Fuentes personalizadas
│       ├── Roboto.ttf
│       ├── RobotoLight.ttf
│       └── RobotoMed3.ttf
├── 📁 src/                       # Código fuente principal
│   ├── 📄 main.jsx              # Punto de entrada de la aplicación
│   ├── 📄 App.jsx               # Componente raíz
│   ├── 📄 routes.jsx            # Configuración de rutas principales
│   ├── 📄 index.css             # Estilos globales y variables CSS
│   ├── 📄 App.css               # Estilos específicos del componente App
│   ├── 📁 assets/               # Recursos multimedia
│   ├── 📁 components/           # Componentes reutilizables
│   ├── 📁 context/              # Contextos de React
│   ├── 📁 core/                 # Componentes centrales del sistema
│   ├── 📁 hooks/                # Hooks personalizados
│   ├── 📁 modules/              # Módulos funcionales de la aplicación
│   └── 📁 styles/               # Estilos organizados por módulos
├── 📄 package.json              # Dependencias y scripts
├── 📄 vite.config.js           # Configuración de Vite
├── 📄 postcss.config.js        # Configuración PostCSS
├── 📄 eslint.config.js         # Configuración ESLint
└── 📄 README.md                # Este archivo
```

## 📂 Descripción Detallada de Carpetas

### 🎯 `/src/main.jsx`
Punto de entrada de la aplicación React. Configura el renderizado de la aplicación en modo estricto.

### 🎯 `/src/App.jsx`
Componente raíz que envuelve la aplicación con el BrowserRouter para el manejo de rutas.

### 🎯 `/src/routes.jsx`
Define las rutas principales de la aplicación:
- `/` - Redirecciona a login
- `/login` - Formulario de inicio de sesión
- `/forgot-password` - Recuperación de contraseña
- `/*` - Rutas del menú principal (protegidas)

### 📁 `/src/components/`
Componentes reutilizables en toda la aplicación:

- **ButtonAction.jsx** - Botones de acción (activar/desactivar)
- **ButtonAdd.jsx** - Botón para agregar elementos
- **ButtonDetail.jsx** - Botón para ver detalles
- **ButtonSeeAll.jsx** - Botón "ver todo"
- **ContentLayout.jsx** - Layout principal del contenido
- **DataTable.jsx** - Tabla de datos reutilizable
- **Fieldset.jsx** - Grupo de campos de formulario
- **Header.jsx** - Encabezado de la aplicación
- **HeaderButton.jsx** - Botones del encabezado
- **Input.jsx** - Componente de entrada personalizado
- **LoginAuth.jsx** - Componente de autenticación
- **MainLayout.jsx** - Layout principal de la aplicación
- **Modal.jsx** - Componente modal reutilizable
- **Sidebar.jsx** - Barra lateral de navegación
- **SidebarToggleButton.jsx** - Botón para colapsar/expandir sidebar
- **Text.jsx** - Componente de texto personalizado

### 📁 `/src/context/`
Contextos de React para manejo de estado global:

- **SidebarContext.jsx** - Contexto para el estado del sidebar
- **LoginPage.jsx** - Contexto para la autenticación

### 📁 `/src/core/`
Componentes centrales del sistema:

- **MenuRoutes.jsx** - Configuración de rutas del menú principal con sidebar

### 📁 `/src/hooks/`
Hooks personalizados para lógica reutilizable:

- **usePage.js** - Hook para manejo de páginas
- **useSidebar.js** - Hook para control del sidebar

### 📁 `/src/modules/`
Módulos funcionales organizados por características:

#### 🏠 **Dashboard**
- `Dashboard.jsx` - Página principal con resumen
- `DashboardCards.jsx` - Tarjetas de métricas
- `DashboardChart.jsx` - Gráficos del dashboard
- `DashboardTable.jsx` - Tabla de datos del dashboard

#### 🔧 **Actuadores**
- `Actuadores.jsx` - Gestión de actuadores
- `components/` - Componentes específicos
- `hooks/` - Hooks relacionados

#### 🌱 **Bandejas**
- `Bandejas.jsx` - Gestión de bandejas de cultivo
- `BandejaCard.jsx` - Tarjeta individual de bandeja
- `BandejasGrid.jsx` - Grilla de bandejas
- `ModalAddBandeja.jsx` - Modal para agregar bandejas

#### 📊 **Bitácora**
- `Bitacora.jsx` - Histórico de eventos
- `BitacoraFilters.jsx` - Filtros de búsqueda
- `AnalysisPanel.jsx` - Panel de análisis
- `components/` - Componentes específicos

#### ⚙️ **Configuración**
- `Configuracion.jsx` - Configuraciones del sistema

#### 🔐 **Login**
- `LoginForm.jsx` - Formulario de inicio de sesión
- `AuthButton.jsx` - Botón de autenticación
- `AuthHeader.jsx` - Encabezado de autenticación
- `ForgotPass.jsx` - Recuperación de contraseña

#### 📈 **Reportes**
- `Reportes.jsx` - Gestión de reportes
- `CreateReportForm.jsx` - Formulario de creación
- `ReportDetailPanel.jsx` - Panel de detalles
- `InfoGroup.jsx` - Grupo de información

#### 🔬 **Sensores**
- `Sensores.jsx` - Gestión de sensores
- `components/` - Componentes específicos

#### 👥 **Usuarios**
- `GestionUsuarios.jsx` - Gestión de usuarios
- `TableUsuarios.jsx` - Tabla de usuarios
- `components/` - Componentes específicos
- `hooks/` - Hooks relacionados

### 📁 `/src/styles/`
Estilos organizados por módulos y componentes:

- **fonts.css** - Configuración de fuentes
- **components/** - Estilos de componentes
- **actuadores/** - Estilos específicos de actuadores
- **bandejas/** - Estilos específicos de bandejas
- **bitacora/** - Estilos específicos de bitácora
- **dashboard/** - Estilos específicos del dashboard
- **login/** - Estilos específicos del login
- **reportes/** - Estilos específicos de reportes
- **sensores/** - Estilos específicos de sensores
- **usuarios/** - Estilos específicos de usuarios

### 📁 `/src/assets/`
Recursos multimedia:

- **imgs/** - Imágenes del proyecto
  - `iconpng.png` - Icono de la aplicación
  - `RS_logo.png` - Logo de RootSense
- **react.svg** - Logo de React

## 🎨 Sistema de Diseño

### Variables CSS
El proyecto utiliza un sistema de variables CSS definidas en `index.css`:

```css
:root {
  --color-primary: #b7e24c;          /* Verde principal */
  --color-primary-dark: #2f6b1a;     /* Verde oscuro */
  --color-primary-light: #81C784;    /* Verde claro */
  --color-sidebar: #8B6F47;          /* Color sidebar */
  --color-error: #f44336;            /* Color error */
  --border-radius: 8px;              /* Radio de borde */
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);  /* Sombra pequeña */
  /* ... más variables */
}
```

### Tipografía
- **Fuente Principal:** Roboto (Regular, Light, Medium)
- **Ubicación:** `/public/fonts/`

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción

# Linting
npm run lint         # Ejecuta ESLint

# Vista previa
npm run preview      # Previsualiza la build de producción
```

## 🔧 Configuración del Proyecto

### Vite Configuration
El archivo `vite.config.js` incluye:
- Alias para imports absolutos (`@`, `@components`, `@modules`, etc.)
- Configuración para archivos TTF
- Plugin de React

### ESLint Configuration
Configuración moderna con soporte para:
- React hooks
- React refresh
- Estándares ES6+

### PostCSS Configuration
Configurado para Tailwind CSS y Autoprefixer.

## 🔐 Autenticación

El proyecto está preparado para usar Auth0 para autenticación:
- Configuración en `package.json`
- Componentes de login preparados
- Contexto de autenticación disponible

## 📱 Características Principales

1. **Dashboard Interactivo** - Visualización de métricas en tiempo real
2. **Gestión de Dispositivos** - Control de sensores y actuadores
3. **Monitoreo de Cultivos** - Seguimiento de bandejas y plantas
4. **Reportes Automáticos** - Generación de informes semanales
5. **Bitácora Histórica** - Registro de eventos y cambios
6. **Administración de Usuarios** - Gestión de permisos y roles
7. **Configuración Flexible** - Personalización del sistema

## 🌐 Navegación

La aplicación utiliza un sistema de rutas anidadas:
- **Rutas Públicas:** Login, recuperación de contraseña
- **Rutas Privadas:** Dashboard, módulos principales (protegidas por autenticación)
- **Sidebar Responsivo:** Navegación colapsable entre módulos

## 📊 Visualización de Datos

- **Chart.js** para gráficos interactivos
- **Ant Design** para componentes UI avanzados
- **Tablas responsivas** con filtros y paginación
- **Modales** para formularios y detalles

## 🔄 Estado Global

Manejo de estado mediante:
- **React Context** para estado global
- **Hooks personalizados** para lógica específica
- **Local storage** para persistencia de configuraciones

## 🎯 Arquitectura Modular

El proyecto sigue una arquitectura modular donde cada funcionalidad está encapsulada en su propio módulo con:
- Componentes específicos
- Hooks personalizados
- Estilos dedicados
- Lógica de negocio aislada

## 🚧 Desarrollo

Para contribuir al proyecto:

1. **Estructura de Archivos:** Mantener la organización por módulos
2. **Naming Conventions:** PascalCase para componentes, camelCase para funciones
3. **Estilos:** Usar variables CSS y seguir la metodología BEM
4. **Componentes:** Crear componentes reutilizables en `/components/`
5. **Hooks:** Abstraer lógica reutilizable en hooks personalizados

## 📝 Notas Importantes

- El proyecto utiliza **ES Modules** (type: "module")
- Configurado para **desarrollo local** con Vite
- Preparado para **despliegue en producción**
- **Responsive design** con Tailwind CSS
- **Accesibilidad** considerada en componentes UI

---

*Este README proporciona una guía completa de la estructura y funcionamiento del proyecto RootSense Front. Para más detalles sobre módulos específicos, consulta los archivos README individuales en cada carpeta de módulo.*
