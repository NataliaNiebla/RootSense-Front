import React from 'react';
import { Empty } from 'antd';

const EmptyReportes = ({ message = "No se encontraron reportes con los filtros aplicados" }) => {
    return (
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
};

export default EmptyReportes;
