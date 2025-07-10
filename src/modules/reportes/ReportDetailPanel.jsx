import React from 'react';
import InfoGroup from './InfoGroup';

const ReportDetailPanel = ({ 
    isVisible = false, 
    report = null, 
    onClose = () => {} 
}) => {
    if (!isVisible || !report) {
        return null;
    }

    return (
        <div className="report-detail active">
            <div className="detail-header">
                <h3 className="detail-title">
                    Detalle del Reporte <span>{report.id}</span>
                </h3>
                <button className="detail-close" onClick={onClose}>
                    ×
                </button>
            </div>
            <div className="detail-content">
                <div className="detail-grid">
                    <div className="detail-image">
                        <img
                            src={report.image}
                            alt="Imagen del reporte"
                        />
                    </div>
                    <div className="detail-info">
                        <InfoGroup label="ID Reporte" value={report.id} />
                        <InfoGroup label="Fecha Reporte" value={report.date} />
                        <InfoGroup label="ID Bandeja" value={report.bandejaId} />
                        <InfoGroup label="Tipo de Semilla" value={report.seedType} />
                        <InfoGroup label="ID Usuario" value={report.userId} />
                        <InfoGroup label="Nombre Usuario" value={report.userName} />
                        <InfoGroup label="Calidad Germinación">
                            <span className={`quality-badge ${report.qualityClass}`}>
                                {report.quality}
                            </span>
                        </InfoGroup>
                        <InfoGroup label="Calificación" value={report.score} />
                        
                        <div className="detail-description">
                            <div className="description-label">Descripción</div>
                            <div className="description-text">
                                {report.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportDetailPanel;
