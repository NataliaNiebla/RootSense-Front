import React from 'react';
import { Drawer, Typography, List, Alert, Space, Tag, Button } from 'antd';
import { 
    CloseOutlined, 
    BarChartOutlined, 
    BulbOutlined, 
    ExclamationCircleOutlined,
    RobotOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AnalysisPanel = ({ 
    visible, 
    onClose, 
    reporte 
}) => {
    if (!reporte) return null;

    const { analisisIA } = reporte;
    
    if (!analisisIA) return null;

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
        <Drawer
            title={
                <div className="analysis-drawer-title">
                    <Space>
                        <RobotOutlined className="analysis-icon" />
                        <span>Análisis con IA</span>
                        <Tag color={obtenerColorCalidad(reporte.calidad)}>
                            {reporte.calidad.charAt(0).toUpperCase() + reporte.calidad.slice(1)}
                        </Tag>
                    </Space>
                </div>
            }
            placement="right"
            width={480}
            open={visible}
            onClose={onClose}
            closeIcon={<CloseOutlined />}
            className="analysis-drawer"
        >
            <div className="analysis-content">
                {/* Header del reporte */}
                <div className="report-header">
                    <Title level={4} className="bandeja-title">
                        {reporte.bandeja}
                    </Title>
                    <Paragraph className="report-date">
                        {new Date(reporte.fecha).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </Paragraph>
                </div>

                {/* Métricas rápidas */}
                <div className="metrics-summary">
                    <div className="metric-item">
                        <span className="metric-label">Temperatura</span>
                        <span className="metric-value">{reporte.temperaturaPromedio}</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-label">Humedad</span>
                        <span className="metric-value">{reporte.humedadPromedio}</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-label">pH</span>
                        <span className="metric-value">{reporte.phPromedio}</span>
                    </div>
                </div>

                {/* Resumen del Análisis */}
                <div className="analysis-section">
                    <div className="section-header">
                        <BarChartOutlined className="section-icon" />
                        <Title level={5}>Resumen del Análisis</Title>
                    </div>
                    <div className="section-content">
                        <Paragraph className="analysis-summary">
                            {analisisIA.resumen}
                        </Paragraph>
                    </div>
                </div>

                {/* Recomendaciones */}
                <div className="analysis-section">
                    <div className="section-header">
                        <BulbOutlined className="section-icon recommendations-icon" />
                        <Title level={5}>Recomendaciones</Title>
                    </div>
                    <div className="section-content">
                        <List
                            size="small"
                            dataSource={analisisIA.recomendaciones}
                            renderItem={(item, index) => (
                                <List.Item className="recommendation-item">
                                    <Space>
                                        <span className="recommendation-number">{index + 1}</span>
                                        <span className="recommendation-text">{item}</span>
                                    </Space>
                                </List.Item>
                            )}
                        />
                    </div>
                </div>

                {/* Alertas */}
                {analisisIA.alertas && analisisIA.alertas.length > 0 && (
                    <div className="analysis-section">
                        <div className="section-header">
                            <ExclamationCircleOutlined className="section-icon alerts-icon" />
                            <Title level={5}>Alertas</Title>
                        </div>
                        <div className="section-content">
                            <Space direction="vertical" style={{ width: '100%' }}>
                                {analisisIA.alertas.map((alerta, index) => (
                                    <Alert
                                        key={index}
                                        message={alerta}
                                        type="warning"
                                        showIcon
                                        className="alert-item"
                                    />
                                ))}
                            </Space>
                        </div>
                    </div>
                )}

                {/* Observaciones */}
                {reporte.observaciones && (
                    <div className="analysis-section">
                        <div className="section-header">
                            <span className="section-icon">📝</span>
                            <Title level={5}>Observaciones</Title>
                        </div>
                        <div className="section-content">
                            <Paragraph className="observations-text">
                                {reporte.observaciones}
                            </Paragraph>
                        </div>
                    </div>
                )}
            </div>
        </Drawer>
    );
};

export default AnalysisPanel;
