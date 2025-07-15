import React from 'react';
import InfoGroup from './InfoGroup';
import Modal from '../../components/Modal';
import '../../styles/reportes/ReportesStyles.css';

const ReportDetailPanel = ({ 
    isVisible = false, 
    report = null, 
    onClose = () => {} 
}) => {
    if (!report) {
        return null;
    }

    return (
        <Modal 
            isOpen={isVisible}
            onClose={onClose}
            title={`Detalle del Reporte ${report.id}`}
            size="large"
            overlayClose={true}
        >
            <div className="detail-content">
                <div className="detail-grid">
                    <div className="detail-image">
                        {report.image ? (
                            <img
                                src={report.image}
                                alt={`Reporte ${report.id}`}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div 
                            className="image-placeholder" 
                            style={{ 
                                display: report.image ? 'none' : 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                backgroundColor: 'var(--color-background)',
                                color: 'var(--color-text-light)',
                                fontSize: '14px',
                                flexDirection: 'column',
                                gap: '8px'
                            }}
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                            </svg>
                            <span>Sin imagen disponible</span>
                        </div>
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
        </Modal>
    );
};

export default ReportDetailPanel;
