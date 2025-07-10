# Módulo de Actuadores

Este módulo ha sido refactorizado en componentes más pequeños y reutilizables para mejorar la mantenibilidad y la organización del código.

## Estructura de Componentes

### Componente Principal
- **`Actuadores.jsx`**: Componente principal que orquesta todos los subcomponentes

### Componentes Reutilizables

#### Visualización
- **`ActuadorIcon.jsx`**: Iconos SVG para diferentes tipos de actuadores (rociador, ventilador, lámpara)
- **`ActuadorCard.jsx`**: Tarjeta individual que muestra la información de un actuador
- **`ActuadoresGrid.jsx`**: Grid que contiene todas las tarjetas de actuadores
- **`MessageNotification.jsx`**: Componente para mostrar mensajes de éxito o error

#### Interacción
- **`ActionsSection.jsx`**: Sección superior con título y botón para agregar actuadores
- **`ModalAgregarActuador.jsx`**: Modal para crear nuevos actuadores
- **`BandejaDetailsPanel.jsx`**: Panel lateral con detalles de la bandeja seleccionada

### Custom Hook
- **`useActuadores.js`**: Hook personalizado que maneja toda la lógica de estado y funciones

## Ventajas de la Refactorización

1. **Separación de Responsabilidades**: Cada componente tiene una única responsabilidad
2. **Reutilización**: Los componentes pueden ser reutilizados en otras partes de la aplicación
3. **Mantenibilidad**: Es más fácil mantener y actualizar componentes pequeños
4. **Testabilidad**: Componentes pequeños son más fáciles de probar
5. **Legibilidad**: El código es más fácil de leer y entender
6. **Escalabilidad**: Nuevas funcionalidades se pueden agregar más fácilmente

## Uso

```jsx
import Actuadores from './modules/actuadores/Actuadores';

// El componente maneja internamente toda la lógica
<Actuadores />
```

## Estructura de Archivos

```
actuadores/
├── Actuadores.jsx                 # Componente principal
├── components/
│   ├── index.js                   # Barrel export
│   ├── ActuadorIcon.jsx          # Iconos de actuadores
│   ├── ActuadorCard.jsx          # Tarjeta de actuador
│   ├── ActuadoresGrid.jsx        # Grid de actuadores
│   ├── ActionsSection.jsx        # Sección de acciones
│   ├── BandejaDetailsPanel.jsx   # Panel de detalles
│   ├── MessageNotification.jsx   # Notificaciones
│   └── ModalAgregarActuador.jsx  # Modal de creación
└── hooks/
    └── useActuadores.js           # Lógica de estado
```
