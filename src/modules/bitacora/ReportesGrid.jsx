import React from 'react';
import { Row, Col } from 'antd';
import ReporteCard from './components/ReporteCard';
import EmptyReportes from './components/EmptyReportes';

const ReportesGrid = ({ 
    reportes, 
    onVerAnalisis, 
    formatearFecha
}) => {
    if (reportes.length === 0) {
        return <EmptyReportes />;
    }

    return (
        <div className="reportes-grid-container">
            <Row gutter={[24, 24]}>
                {reportes.map(reporte => (
                    <Col 
                        key={reporte.id} 
                        xs={24} 
                        sm={12} 
                        lg={8} 
                        xl={6}
                    >
                        <ReporteCard
                            reporte={reporte}
                            onVerAnalisis={onVerAnalisis}
                            formatearFecha={formatearFecha}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ReportesGrid;
