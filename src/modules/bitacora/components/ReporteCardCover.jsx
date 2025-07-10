import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';

const ReporteCardCover = ({ tipoReporte, fecha, formatearFecha }) => {
    // Función para obtener el icono según el tipo de reporte
    const obtenerIconoTipo = (tipo) => {
        const iconos = {
            'Diario': '📅',
            'Semanal': '📊',
            'Mensual': '📈'
        };
        return iconos[tipo] || '📋';
    };

    return (
        <div className="card-cover">
            <div className="card-tipo-badge">
                <span className="tipo-icon">
                    {obtenerIconoTipo(tipoReporte)}
                </span>
                <span className="tipo-text">{tipoReporte}</span>
            </div>
            <div className="card-fecha">
                <CalendarOutlined />
                <span>{formatearFecha(fecha)}</span>
            </div>
        </div>
    );
};

export default ReporteCardCover;
