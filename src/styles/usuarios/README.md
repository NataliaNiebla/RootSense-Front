# Estructura de Estilos - Usuarios

Los estilos del módulo de usuarios han sido organizados de manera modular, con cada componente teniendo su propio archivo CSS.

## Estructura de Archivos CSS

```
src/styles/usuarios/
├── GestionUsuariosStyles.css          # [LEGACY] Archivo original (se puede eliminar)
└── components/
    ├── shared.css                     # Estilos compartidos (botones, badges)
    ├── Message.css                    # Mensajes de notificación
    ├── UserListHeader.css             # Header de la lista
    ├── UserTable.css                  # Tabla de usuarios (desktop)
    ├── UserCards.css                  # Contenedor de tarjetas (móvil)
    ├── UserCard.css                   # Tarjeta individual
    ├── UserModal.css                  # Modal crear/editar
    ├── DeleteConfirmModal.css         # Modal de confirmación
    └── EmptyState.css                 # Estado vacío
```

## Importaciones por Componente

### GestionUsuarios.jsx (Principal)
```jsx
import '../../styles/usuarios/components/shared.css';
```

### Message.jsx
```jsx
import '../../../styles/usuarios/components/Message.css';
```

### UserListHeader.jsx
```jsx
import '../../../styles/usuarios/components/UserListHeader.css';
```

### UserTable.jsx
```jsx
import '../../../styles/usuarios/components/UserTable.css';
import '../../../styles/usuarios/components/shared.css';
```

### UserCards.jsx
```jsx
import '../../../styles/usuarios/components/UserCards.css';
```

### UserCard.jsx
```jsx
import '../../../styles/usuarios/components/UserCard.css';
import '../../../styles/usuarios/components/shared.css';
```

### UserModal.jsx
```jsx
import '../../../styles/usuarios/components/UserModal.css';
import '../../../styles/usuarios/components/shared.css';
```

### DeleteConfirmModal.jsx
```jsx
import '../../../styles/usuarios/components/DeleteConfirmModal.css';
import '../../../styles/usuarios/components/shared.css';
```

### EmptyState.jsx
```jsx
import '../../../styles/usuarios/components/EmptyState.css';
```

## Ventajas de esta Estructura

1. **Modularidad**: Cada componente tiene sus propios estilos
2. **Mantenibilidad**: Es más fácil encontrar y modificar estilos específicos
3. **Reutilización**: Los estilos compartidos están en `shared.css`
4. **Escalabilidad**: Fácil agregar nuevos componentes sin afectar otros
5. **Organización**: Estructura clara y ordenada
6. **Performance**: Solo se cargan los estilos necesarios

## Estilos Compartidos (shared.css)

Este archivo contiene:
- **Botones**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`, `.btn-warning`
- **Badges de roles**: `.role-badge`, `.role-admin`, `.role-supervisor`, `.role-operator`
- **Badges de estado**: `.status-badge`, `.status-active`, `.status-inactive`
- **Iconos**: `.icon`

## Responsive Design

Cada archivo CSS mantiene sus propias media queries:
- **768px**: Cambio de tabla a tarjetas
- **480px**: Ajustes para móviles pequeños

## Migración Completada ✅

- ✅ Estilos divididos por componente
- ✅ Importaciones actualizadas
- ✅ Estructura organizada
- ✅ Funcionalidad mantenida
- ✅ Responsive design preservado
