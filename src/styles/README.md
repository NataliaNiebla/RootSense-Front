# Organización de Estilos CSS por Carpetas

## Estructura Actualizada:

```
src/styles/
├── fonts.css                    # Fuentes globales
├── index.css                    # Estilos globales base
├── actuadores/
│   └── ActuadoresStyles.css
├── bandejas/
│   ├── BandejasStyles.css       # Estilos generales de la página
│   ├── BandejasGridStyles.css   # Estilos del grid
│   └── BandejaCardStyles.css    # Estilos de las tarjetas individuales
├── bitacora/
│   └── BitacoraStyles.css
├── components/
│   ├── ContentLayoutStyles.css
│   ├── HeaderStyles.css
│   ├── Modal.css
│   └── Sidebar.css
├── config/
│   └── ConfigStyles.css
├── dashboard/
│   ├── DashboardStyles.css      # Estilos generales del dashboard
│   ├── DashboardCardsStyles.css # Estilos de las cards
│   ├── DashboardChartStyles.css # Estilos del gráfico
│   └── DashboardTableStyles.css # Estilos de la tabla
├── login/
│   └── LoginFormStyles.css
├── reportes/
│   └── ReportesStyles.css
├── sensores/
│   └── SensoresStyles.css
└── usuarios/
    └── GestionUsuariosStyles.css
```

## Ventajas de esta organización:

1. **Modularidad**: Cada módulo tiene su propia carpeta de estilos
2. **Escalabilidad**: Fácil agregar nuevos estilos sin afectar otros módulos
3. **Mantenimiento**: Ubicación clara de cada estilo
4. **Reutilización**: Estilos de componentes separados para reutilización
5. **Separación de responsabilidades**: Cada archivo tiene un propósito específico

## Importaciones actualizadas:

- Los componentes ahora importan desde las rutas organizadas por carpetas
- Ejemplo: `import '../../styles/dashboard/DashboardStyles.css'`
- Los estilos de componentes están en `styles/components/`
- Los estilos de módulos están en sus respectivas carpetas
