# Módulo de Sensores

Este módulo contiene todos los componentes y estilos relacionados con la gestión de sensores en el sistema.

## Estructura

```
modules/sensores/
├── Sensores.jsx                 # Componente principal
├── components/
│   ├── index.js                # Barrel export file
│   ├── SensorCard.jsx          # Tarjeta individual de sensor
│   ├── SensorSection.jsx       # Sección agrupada por tipo de sensor
│   ├── SensorModal.jsx         # Modal para agregar sensores
│   ├── MessageAlert.jsx        # Componente de alertas/mensajes
│   └── SensorIcons.jsx         # Iconos y utilidades para tipos de sensor
```

## Estilos

```
styles/sensores/
├── index.css                   # Archivo principal que importa todos los estilos
├── SensoresMain.css           # Estilos del componente principal
├── SensorCard.css             # Estilos de las tarjetas de sensor
├── SensorSection.css          # Estilos de las secciones agrupadas
├── SensorModal.css            # Estilos del modal
├── MessageAlert.css           # Estilos de las alertas
└── SensoresStyles.css         # Archivo legacy (mantener por compatibilidad)
```

## Componentes

### Sensores.jsx
Componente principal que orquesta toda la funcionalidad de sensores:
- Gestión de estado de sensores y formularios
- Manejo de mensajes de éxito/error
- Operaciones CRUD de sensores

### SensorCard.jsx
Tarjeta individual que muestra información de un sensor:
- Información del sensor (ID, tipo, ubicación, estado)
- Botón de toggle para activar/desactivar
- Iconos dinámicos según el tipo de sensor

### SensorSection.jsx
Agrupa sensores del mismo tipo:
- Header con icono y contador
- Grid responsivo de tarjetas
- Organización visual por categorías

### SensorModal.jsx
Modal para agregar nuevos sensores:
- Formulario con validación
- Selección de bandeja y tipo de sensor
- Campos de ubicación y estado

### MessageAlert.jsx
Componente reutilizable para mostrar mensajes:
- Soporte para mensajes de éxito y error
- Animaciones de entrada
- Auto-dismiss después de 3 segundos

### SensorIcons.jsx
Utilidades para iconos y nombres de tipos de sensor:
- Iconos SVG para cada tipo de sensor
- Funciones helper para obtener iconos y nombres
- Mapeo centralizado de tipos

## Tipos de Sensor Soportados

- **Temperatura**: Medición de temperatura ambiente
- **Humedad Relativa**: Medición de humedad del aire
- **Humedad del Suelo**: Medición de humedad en el sustrato
- **Iluminación**: Medición de niveles de luz

## Características

### Responsive Design
- Grid adaptativo que se ajusta según el tamaño de pantalla
- Diseño mobile-first
- Componentes optimizados para diferentes dispositivos

### Interactividad
- Toggle de estado de sensores en tiempo real
- Modales con animaciones suaves
- Feedback visual inmediato

### Accesibilidad
- Contraste de colores adecuado
- Iconos descriptivos
- Formularios con validación clara

## Uso

```jsx
import Sensores from './modules/sensores/Sensores';

// En tu router o componente padre
<Sensores />
```

Para usar componentes individuales:

```jsx
import { SensorCard, SensorModal } from './modules/sensores/components';

// O usando el barrel export
import { SensorCard } from './modules/sensores/components';
```
