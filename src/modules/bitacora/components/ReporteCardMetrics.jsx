import React from 'react';
import { ExperimentOutlined } from '@ant-design/icons';

const ReporteCardMetrics = ({ 
    temperaturaPromedio, 
    humedadPromedio, 
    phPromedio, 
    analisisIA,
    observaciones 
}) => {
    return (
        <div className="card-metrics">
            <div className="metric-row">
                <div className="metric-item">
                    <span className="metric-icon">🌡️</span>
                    <div className="metric-info">
                        <span className="metric-label">Temperatura</span>
                        <span className="metric-value">{temperaturaPromedio}</span>
                    </div>
                </div>
                <div className="metric-item">
                    <span className="metric-icon">💧</span>
                    <div className="metric-info">
                        <span className="metric-label">Humedad</span>
                        <span className="metric-value">{humedadPromedio}</span>
                    </div>
                </div>
            </div>
            
            <div className="metric-row">
                <div className="metric-item">
                    <span className="metric-icon">🧪</span>
                    <div className="metric-info">
                        <span className="metric-label">pH</span>
                        <span className="metric-value">{phPromedio}</span>
                    </div>
                </div>
                <div className="metric-item">
                    <ExperimentOutlined className="metric-icon-antd" />
                    <div className="metric-info">
                        <span className="metric-label">Estado</span>
                        <span className="metric-value">
                            {analisisIA.alertas.length > 0 ? 
                                `${analisisIA.alertas.length} alerta(s)` : 
                                'Normal'
                            }
                        </span>
                    </div>
                </div>
            </div>

            {observaciones && (
                <div className="observaciones-section">
                    <div className="observaciones-label">Observaciones:</div>
                    <div className="observaciones-text">
                        {observaciones.length > 80 
                            ? `${observaciones.substring(0, 80)}...`
                            : observaciones
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReporteCardMetrics;
