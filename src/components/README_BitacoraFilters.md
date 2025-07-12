# BitacoraFilters Component

Este componente proporciona una interfaz de filtrado avanzada para la bitácora de reportes del sistema de invernadero.

## Características

- ✅ **Filtro por rango de fechas**: Selector de fecha inicio y fin
- ✅ **Búsqueda por bandeja**: Campo de búsqueda con autocomplete
- ✅ **Filtro por tipo de reporte**: Diario, Semanal, Mensual
- ✅ **Filtro por calidad**: Excelente, Buena, Regular, Deficiente
- ✅ **Botones de acción**: Aplicar filtros y limpiar filtros
- ✅ **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla
- ✅ **Validación automática**: Deshabilita botón limpiar cuando no hay filtros
- ✅ **Acceso por teclado**: Soporte para tecla Enter

## Props

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `filtros` | Object | ✅ | Objeto con los valores actuales de los filtros |
| `onFiltroChange` | Function | ✅ | Callback ejecutado cuando cambia un filtro |
| `onAplicarFiltros` | Function | ✅ | Callback ejecutado al aplicar filtros |
| `onLimpiarFiltros` | Function | ✅ | Callback ejecutado al limpiar filtros |
| `className` | String | ❌ | Clases CSS adicionales |
| `showTitle` | Boolean | ❌ | Mostrar/ocultar título del componente (default: true) |
| `size` | String | ❌ | Tamaño de los componentes: 'small', 'default', 'large' |

## Estructura del objeto `filtros`

```javascript
{
  fechaInicio: '', // Fecha en formato YYYY-MM-DD
  fechaFin: '',    // Fecha en formato YYYY-MM-DD
  bandeja: '',     // Texto para buscar en bandejas
  tipoReporte: '', // 'Diario', 'Semanal', 'Mensual'
  calidad: ''      // 'excelente', 'buena', 'regular', 'deficiente'
}
```

## Uso básico

```jsx
import BitacoraFilters from '../components/BitacoraFilters';

const MiComponente = () => {
  const [filtros, setFiltros] = useState({
    fechaInicio: '',
    fechaFin: '',
    bandeja: '',
    tipoReporte: '',
    calidad: ''
  });

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const aplicarFiltros = () => {
    // Lógica para aplicar filtros
    console.log('Aplicando filtros:', filtros);
  };

  const limpiarFiltros = () => {
    setFiltros({
      fechaInicio: '',
      fechaFin: '',
      bandeja: '',
      tipoReporte: '',
      calidad: ''
    });
  };

  return (
    <BitacoraFilters
      filtros={filtros}
      onFiltroChange={handleFiltroChange}
      onAplicarFiltros={aplicarFiltros}
      onLimpiarFiltros={limpiarFiltros}
    />
  );
};
```

## Uso con props opcionales

```jsx
<BitacoraFilters
  filtros={filtros}
  onFiltroChange={handleFiltroChange}
  onAplicarFiltros={aplicarFiltros}
  onLimpiarFiltros={limpiarFiltros}
  className="mi-clase-personalizada"
  showTitle={false}
  size="small"
/>
```

## Personalización de estilos

El componente utiliza variables CSS personalizadas que se pueden sobrescribir:

```css
:root {
  --color-primary: #b7e24c;
  --color-primary-dark: #2f6b1a;
  --color-primary-light: #81C784;
  --color-border: #E0E0E0;
  --color-white: #FFFFFF;
  --border-radius: 8px;
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
}
```

## Archivos relacionados

- **Componente**: `src/components/BitacoraFilters.jsx`
- **Estilos**: `src/styles/components/BitacoraFiltersStyles.css`
- **Uso**: `src/modules/bitacora/Bitacora.jsx`

## Funcionalidades adicionales

### Validación de formulario
- Los campos mantienen su estado interno con Ant Design Form
- Validación automática de fechas
- Prevención de fechas inválidas

### Accesibilidad
- Soporte completo para navegación por teclado
- Labels descriptivos para lectores de pantalla
- Estados de focus bien definidos

### Rendimiento
- Componente optimizado con React.memo (potencial mejora futura)
- Callbacks optimizados para evitar re-renders innecesarios
- Lazy loading de opciones en selects (potencial mejora futura)

## Mejoras futuras

1. **Filtros avanzados**: Agregar filtros por usuario, sensores específicos
2. **Persistencia**: Guardar filtros en localStorage
3. **Exportación**: Botón para exportar resultados filtrados
4. **Presets**: Filtros predefinidos comunes
5. **Historial**: Historial de filtros aplicados recientemente
