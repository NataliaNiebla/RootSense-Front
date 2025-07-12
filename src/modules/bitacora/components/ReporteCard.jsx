import React from 'react';
import { Card, Tag, Button } from 'antd';
import { CalendarOutlined, RobotOutlined, ExperimentOutlined } from '@ant-design/icons';

// Componente consolidado de la tarjeta de reporte
const ReporteCard = ({ reporte, onVerAnalisis, formatearFecha }) => {
    // Función para obtener el icono según el tipo de reporte
    const obtenerIconoTipo = (tipo) => {
        const iconos = {
            'Diario': '📅',
            'Semanal': '📊',
            'Mensual': '📈'
        };
        return iconos[tipo] || '📋';
    };

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

    // Componente Cover interno
    const ReporteCardCover = () => (
        <div className="card-cover">
            <div className="card-tipo-badge">
                <span className="tipo-icon">
                    {obtenerIconoTipo(reporte.tipoReporte)}
                </span>
                <span className="tipo-text">{reporte.tipoReporte}</span>
            </div>
            <div className="card-fecha">
                <CalendarOutlined />
                <span>{formatearFecha(reporte.fecha)}</span>
            </div>
        </div>
    );

    // Componente Title interno
    const ReporteCardTitle = () => (
        <div className="card-title-section">
            <h3 className="bandeja-title">{reporte.bandeja}</h3>
            <Tag 
                color={obtenerColorCalidad(reporte.calidad)}
                className="calidad-tag"
            >
                {reporte.calidad.charAt(0).toUpperCase() + reporte.calidad.slice(1)}
            </Tag>
        </div>
    );

    // Componente Metrics interno
    const ReporteCardMetrics = () => (
        <div className="card-metrics">
            <div className="metric-row">
                <div className="metric-item">
                    <span className="metric-icon">🌡️</span>
                    <div className="metric-info">
                        <span className="metric-label">Temperatura</span>
                        <span className="metric-value">{reporte.temperaturaPromedio}</span>
                    </div>
                </div>
                <div className="metric-item">
                    <span className="metric-icon">💧</span>
                    <div className="metric-info">
                        <span className="metric-label">Humedad</span>
                        <span className="metric-value">{reporte.humedadPromedio}</span>
                    </div>
                </div>
            </div>
            
            <div className="metric-row">
                <div className="metric-item">
                    <span className="metric-icon">🧪</span>
                    <div className="metric-info">
                        <span className="metric-label">pH</span>
                        <span className="metric-value">{reporte.phPromedio}</span>
                    </div>
                </div>
                <div className="metric-item">
                    <ExperimentOutlined className="metric-icon-antd" />
                    <div className="metric-info">
                        <span className="metric-label">Estado</span>
                        <span className="metric-value">
                            {(reporte.analisisIA?.alertas?.length || 0) > 0 ? 
                                `${reporte.analisisIA.alertas.length} alerta(s)` : 
                                'Normal'
                            }
                        </span>
                    </div>
                </div>
            </div>

            {reporte.observaciones && (
                <div className="observaciones-section">
                    <div className="observaciones-label">Observaciones:</div>
                    <div className="observaciones-text">
                        {reporte.observaciones.length > 80 
                            ? `${reporte.observaciones.substring(0, 80)}...`
                            : reporte.observaciones
                        }
                    </div>
                </div>
            )}
        </div>
    );

    // Componente Actions interno
    const ReporteCardActions = () => [
        <Button
            key="analysis"
            type="primary"
            icon={<RobotOutlined />}
            onClick={() => onVerAnalisis(reporte.id)}
            className="analysis-button"
        >
            Análisis IA
        </Button>
    ];

    return (
        <Card
            className="reporte-card"
            hoverable
            cover={<ReporteCardCover />}
            actions={<ReporteCardActions />}
        >
            <Card.Meta
                title={<ReporteCardTitle />}
                description={<ReporteCardMetrics />}
            />
        </Card>
    );
};

export default ReporteCard;
