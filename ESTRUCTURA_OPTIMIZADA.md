# Estructura Optimizada de Componentes React

## Resumen de la Implementación

Esta estructura optimizada implementa un patrón de gestión de estado global para el sidebar y hooks personalizados para mejorar la reutilización de código y el rendimiento.

## Componentes Principales

### 1. SidebarContext (src/context/SidebarContext.jsx)
```jsx
// Maneja el estado global del sidebar
export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
```

### 2. Hook useSidebar (src/hooks/useSidebar.js)
```jsx
// Hook para acceder al estado del sidebar desde cualquier componente
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar debe ser usado dentro de SidebarProvider');
  }
  return context;
};
```

### 3. Hook usePage (src/hooks/usePage.js)
```jsx
// Hook para manejar estado común de páginas (loading, error, título)
export const usePage = (initialTitle = '') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageTitle, setPageTitle] = useState(initialTitle);

  const fetchData = async (fetchFunction) => {
    setLoading(true);
    try {
      return await fetchFunction();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, pageTitle, setPageTitle, fetchData };
};
```

## Uso en Componentes

### Componente de Página Básico
```jsx
import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { usePage } from '../../hooks/usePage';
import { useSidebar } from '../../hooks/useSidebar';

const MiPagina = () => {
  const { pageTitle, setPageTitle, loading, error } = usePage('Mi Página');
  const { collapsed } = useSidebar();

  useEffect(() => {
    setPageTitle('Mi Página');
  }, [setPageTitle]);

  return (
    <div>
      <Header title={pageTitle} />
      <div style={{ 
        marginLeft: collapsed ? '80px' : '260px',
        transition: 'margin-left 0.3s ease'
      }}>
        {/* Contenido de la página */}
      </div>
    </div>
  );
};
```

### Componente Header Actualizado
```jsx
const Header = ({ title = '' }) => {
  const { collapsed } = useSidebar();
  
  return (
    <header 
      className={collapsed ? 'sidebar-collapsed' : ''}
      style={{
        left: collapsed ? '80px' : '260px',
        transition: 'left 0.3s ease'
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};
```

### Componente Sidebar Actualizado
```jsx
const Sidebar = () => {
  const { collapsed, toggleSidebar } = useSidebar();
  
  return (
    <Sider collapsed={collapsed}>
      <SidebarToggleButton 
        collapsed={collapsed} 
        onToggle={toggleSidebar} 
      />
      {/* Menu items */}
    </Sider>
  );
};
```

## Ventajas de esta Estructura

### 1. **Estado Global Centralizado**
- El estado del sidebar se maneja en un solo lugar
- Todos los componentes pueden acceder y modificar el estado consistentemente
- Elimina la necesidad de prop drilling

### 2. **Hooks Personalizados Reutilizables**
- `usePage`: Maneja estado común de páginas (loading, error, título)
- `useSidebar`: Acceso simple al estado del sidebar
- Código DRY (Don't Repeat Yourself)

### 3. **Mejor Rendimiento**
- Re-renderizado optimizado solo de componentes que usan el estado
- Evita pasadas innecesarias de props
- Context API bien estructurado

### 4. **Mantenibilidad**
- Separación clara de responsabilidades
- Fácil de extender y modificar
- Patrón consistente en toda la aplicación

### 5. **Developer Experience**
- IntelliSense mejorado con TypeScript
- Errores claros si se usa fuera del contexto
- API consistente y predecible

## Estructura de Archivos Recomendada

```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── SidebarToggleButton.jsx
│   └── MainLayout.jsx
├── context/
│   └── SidebarContext.jsx
├── hooks/
│   ├── useSidebar.js
│   └── usePage.js
├── modules/
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   └── examples/
│       └── OptimizedPage.jsx
└── core/
    └── MenuRoutes.jsx
```

## Ejemplo de Uso Completo

Ver `src/modules/examples/OptimizedPage.jsx` para un ejemplo completo que incluye:
- Manejo de estado de loading
- Gestión de errores
- Interacción con el sidebar
- Operaciones CRUD básicas
- Responsive design con Ant Design

## Próximos Pasos

1. **Agregar TypeScript**: Para mejor type safety
2. **Context adicionales**: Usuario, tema, configuración
3. **Optimizaciones**: React.memo, useMemo, useCallback donde sea necesario
4. **Testing**: Unit tests para hooks y componentes
5. **Persistencia**: LocalStorage para configuraciones de usuario
