import React from 'react';
import { Tag } from 'antd';

const ReporteCardTitle = ({ bandeja, calidad }) => {
    // Función para obtener el color del tag según la calidad
    const obtenerColorCalidad = (calidad) => {
        const colores = {
            'excelente': 'success',
            'buena': 'processing',
            'regular': 'warning',
            'deficiente': 'error'
        };
        return colores[calidad] || 'default';
    };

    return (
        <div className="card-title-section">
            <h3 className="bandeja-title">{bandeja}</h3>
            <Tag 
                color={obtenerColorCalidad(calidad)}
                className="calidad-tag"
            >
                {calidad.charAt(0).toUpperCase() + calidad.slice(1)}
            </Tag>
        </div>
    );
};

export default ReporteCardTitle;
