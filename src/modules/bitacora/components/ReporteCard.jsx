import React from 'react';
import { Card } from 'antd';
import ReporteCardCover from './ReporteCardCover';
import ReporteCardTitle from './ReporteCardTitle';
import ReporteCardMetrics from './ReporteCardMetrics';
import ReporteCardActions from './ReporteCardActions';

const ReporteCard = ({ reporte, onVerAnalisis, formatearFecha }) => {
    return (
        <Card
            className="reporte-card"
            hoverable
            cover={
                <ReporteCardCover
                    tipoReporte={reporte.tipoReporte}
                    fecha={reporte.fecha}
                    formatearFecha={formatearFecha}
                />
            }
            actions={
                <ReporteCardActions
                    reporteId={reporte.id}
                    onVerAnalisis={onVerAnalisis}
                />
            }
        >
            <Card.Meta
                title={
                    <ReporteCardTitle
                        bandeja={reporte.bandeja}
                        calidad={reporte.calidad}
                    />
                }
                description={
                    <ReporteCardMetrics
                        temperaturaPromedio={reporte.temperaturaPromedio}
                        humedadPromedio={reporte.humedadPromedio}
                        phPromedio={reporte.phPromedio}
                        analisisIA={reporte.analisisIA}
                        observaciones={reporte.observaciones}
                    />
                }
            />
        </Card>
    );
};

export default ReporteCard;
