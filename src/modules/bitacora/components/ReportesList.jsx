import React from 'react';
import { Row, Col, Empty } from 'antd';
import ReporteCard from './ReporteCard';

// Componente para mostrar el estado vacío
const EmptyReportes = ({ message = "No se encontraron reportes con los filtros aplicados" }) => (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
                <span style={{ color: '#8c8c8c', fontSize: '16px' }}>
                    {message}
                </span>
            }
        />
    </div>
);

// Componente principal para la lista de reportes
const ReportesList = ({ 
    reportes, 
    onVerAnalisis, 
    formatearFecha
}) => {
    // Si no hay reportes, mostrar estado vacío
    if (!reportes || reportes.length === 0) {
        return <EmptyReportes />;
    }

    return (
        <Row gutter={[16, 16]} className="reportes-grid">
            {reportes.map((reporte) => (
                <Col key={reporte.id} xs={24} sm={12} md={8} lg={6}>
                    <ReporteCard
                        reporte={reporte}
                        onVerAnalisis={onVerAnalisis}
                        formatearFecha={formatearFecha}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ReportesList;