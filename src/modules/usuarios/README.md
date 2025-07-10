# Gestión de Usuarios - Componentes

Esta carpeta contiene todos los componentes relacionados con la gestión de usuarios, divididos en una estructura modular y reutilizable.

## Estructura de Archivos

```
usuarios/
├── GestionUsuarios.jsx          # Componente principal
├── hooks/
│   └── useUsuarios.js          # Hook personalizado con toda la lógica
└── components/
    ├── UserTable.jsx           # Tabla de usuarios (vista desktop)
    ├── UserCard.jsx            # Tarjeta individual de usuario
    ├── UserCards.jsx           # Contenedor de tarjetas (vista móvil)
    ├── UserModal.jsx           # Modal para crear/editar usuarios
    ├── DeleteConfirmModal.jsx  # Modal de confirmación de eliminación
    ├── Message.jsx             # Componente de mensajes de notificación
    ├── UserListHeader.jsx      # Header con título y botón agregar
    ├── EmptyState.jsx          # Estado vacío cuando no hay usuarios
    └── *.module.css           # Archivos CSS modulares (preparados para el futuro)
```

## Estilos CSS

### Estado Actual
Actualmente **todos los estilos están concentrados** en:
```
src/styles/usuarios/GestionUsuariosStyles.css
```

Este archivo contiene todos los estilos para:
- ✅ Botones y badges
- ✅ Tabla de usuarios
- ✅ Tarjetas de usuario
- ✅ Modales
- ✅ Formularios
- ✅ Mensajes
- ✅ Estados vacíos
- ✅ Responsive design

### Migración Futura a CSS Modules
Se han creado archivos `.module.css` preparados para una futura migración:
- `UserTable.module.css` - Estilos específicos de la tabla
- `UserCard.module.css` - Estilos de tarjetas individuales  
- `UserModal.module.css` - Estilos del modal
- `Message.module.css` - Estilos de mensajes
- `shared.module.css` - Estilos compartidos (botones, badges)

### ¿Por Qué No CSS Modules Ahora?
1. **Compatibilidad**: El CSS actual funciona perfectamente
2. **Tiempo**: La migración requiere actualizar cada componente
3. **Prioridad**: Es mejor enfocarse en la funcionalidad primero
4. **Escalabilidad**: Se puede migrar gradualmente cuando sea necesario

## Componentes

### GestionUsuarios.jsx (Componente Principal)
- Componente contenedor que orquesta todos los demás componentes
- Utiliza el hook `useUsuarios` para manejar el estado y la lógica
- Mantiene una estructura limpia y legible

### Hook: useUsuarios.js
- Contiene toda la lógica de estado y funciones
- Maneja usuarios, formularios, modales y mensajes
- Incluye validaciones y operaciones CRUD
- Facilita la reutilización de la lógica en otros componentes

### Componentes de UI

#### UserTable.jsx
- Tabla responsiva para vista desktop
- Muestra todos los datos de usuarios en formato tabular
- Incluye acciones para editar, activar/desactivar y eliminar

#### UserCard.jsx & UserCards.jsx
- Vista de tarjetas para dispositivos móviles
- `UserCard`: Tarjeta individual de usuario
- `UserCards`: Contenedor que renderiza múltiples tarjetas

#### UserModal.jsx
- Modal reutilizable para crear y editar usuarios
- Formulario con validaciones
- Maneja tanto creación como edición según el modo

#### DeleteConfirmModal.jsx
- Modal de confirmación para eliminación de usuarios
- Previene eliminaciones accidentales
- Muestra información del usuario a eliminar

#### Message.jsx
- Componente para mostrar notificaciones
- Soporta diferentes tipos (success, error, warning)
- Auto-ocultación después de 3 segundos

#### UserListHeader.jsx
- Header de la sección con título y botón agregar
- Encapsula la funcionalidad del botón de agregar usuario

#### EmptyState.jsx
- Estado vacío cuando no hay usuarios
- Mejora la experiencia de usuario

## Beneficios de esta Estructura

1. **Separación de Responsabilidades**: Cada componente tiene una función específica
2. **Reutilización**: Los componentes pueden ser reutilizados en otras partes de la aplicación
3. **Mantenibilidad**: Es más fácil mantener y debuggear código modular
4. **Testabilidad**: Cada componente puede ser probado independientemente
5. **Legibilidad**: El código es más limpio y fácil de entender
6. **Escalabilidad**: Facilita agregar nuevas funcionalidades sin afectar otros componentes

## Uso

Para usar estos componentes, simplemente importa el componente principal:

```jsx
import GestionUsuarios from './modules/usuarios/GestionUsuarios';
```

El hook `useUsuarios` también puede ser importado y usado en otros componentes que necesiten la misma lógica:

```jsx
import { useUsuarios } from './modules/usuarios/hooks/useUsuarios';
```
