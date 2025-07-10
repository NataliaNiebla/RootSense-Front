import React from 'react';
import { Button } from 'antd';
import { RobotOutlined } from '@ant-design/icons';

const ReporteCardActions = ({ reporteId, onVerAnalisis }) => {
    return [
        <Button
            key="analysis"
            type="primary"
            icon={<RobotOutlined />}
            onClick={() => onVerAnalisis(reporteId)}
            className="analysis-button"
        >
            Análisis IA
        </Button>
    ];
};

export default ReporteCardActions;
