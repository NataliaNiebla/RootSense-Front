import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import '../../styles/ReportesStyles.css';

const Reportes = () => {
    const [selectedReport, setSelectedReport] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        idBandeja: '',
        fechaReporte: '',
        descripcion: '',
        calidadGerminacion: '',
        calificacion: ''
    });

    // Sample report data (in a real app, this would come from a database/API)
    const reportData = {
        '1': {
            id: 'REP-2023-001',
            bandejaId: 'BAN-A01',
            seedType: 'Tomate Cherry',
            userId: 'USR-001',
            userName: 'Juan Pérez',
            date: '15/10/2023',
            quality: 'Excelente',
            qualityClass: 'quality-excelente',
            score: '95/100',
            description: 'La bandeja muestra un excelente desarrollo de germinación. Las plántulas presentan un crecimiento uniforme y vigoroso. El color de las hojas es verde intenso, indicando una buena absorción de nutrientes. No se observan signos de enfermedades ni plagas. La humedad del sustrato es óptima y la temperatura se ha mantenido estable durante toda la semana. Se recomienda continuar con el mismo régimen de riego y mantener el monitoreo de temperatura.',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23E8F5E9\' width=\'400\' height=\'300\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'70\' fill=\'%234CAF50\'/%3E%3Cpath d=\'M200 80 L200 220 M130 150 L270 150\' stroke=\'%23FFFFFF\' stroke-width=\'10\'/%3E%3C/svg%3E'
        },
        '2': {
            id: 'REP-2023-002',
            bandejaId: 'BAN-B05',
            seedType: 'Lechuga Romana',
            userId: 'USR-002',
            userName: 'María López',
            date: '08/10/2023',
            quality: 'Buena',
            qualityClass: 'quality-buena',
            score: '85/100',
            description: 'La bandeja presenta un buen desarrollo general. La mayoría de las plántulas muestran un crecimiento adecuado, aunque algunas presentan ligeras variaciones en altura. El color de las hojas es verde claro, indicando una nutrición adecuada. No se observan signos de enfermedades, aunque se recomienda vigilar algunas zonas donde la humedad parece ligeramente elevada.',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23E3F2FD\' width=\'400\' height=\'300\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'70\' fill=\'%232196F3\'/%3E%3Cpath d=\'M200 80 L200 220 M130 150 L270 150\' stroke=\'%23FFFFFF\' stroke-width=\'10\'/%3E%3C/svg%3E'
        },
        '3': {
            id: 'REP-2023-003',
            bandejaId: 'BAN-C12',
            seedType: 'Pimiento',
            userId: 'USR-001',
            userName: 'Juan Pérez',
            date: '01/10/2023',
            quality: 'Regular',
            qualityClass: 'quality-regular',
            score: '75/100',
            description: 'La bandeja muestra un desarrollo irregular. Aproximadamente un 30% de las plántulas presentan un crecimiento más lento que el resto. Se observan algunas hojas con ligera decoloración, posiblemente debido a variaciones en la temperatura o deficiencias nutricionales menores. Se recomienda ajustar el régimen de riego y verificar la composición del sustrato.',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23FFF8E1\' width=\'400\' height=\'300\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'70\' fill=\'%23FFC107\'/%3E%3Cpath d=\'M200 80 L200 220 M130 150 L270 150\' stroke=\'%23FFFFFF\' stroke-width=\'10\'/%3E%3C/svg%3E'
        },
        '4': {
            id: 'REP-2023-004',
            bandejaId: 'BAN-D08',
            seedType: 'Albahaca',
            userId: 'USR-003',
            userName: 'Carlos Rodríguez',
            date: '24/09/2023',
            quality: 'Deficiente',
            qualityClass: 'quality-deficiente',
            score: '60/100',
            description: 'La bandeja presenta problemas significativos en el desarrollo. Más del 50% de las plántulas muestran un crecimiento deficiente, con hojas amarillentas y signos de estrés hídrico. Se observan posibles indicios de hongos en algunas zonas. Se recomienda revisar urgentemente el sistema de riego, la ventilación del invernadero y considerar un tratamiento preventivo contra hongos.',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23FFEBEE\' width=\'400\' height=\'300\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'70\' fill=\'%23F44336\'/%3E%3Cpath d=\'M200 80 L200 220 M130 150 L270 150\' stroke=\'%23FFFFFF\' stroke-width=\'10\'/%3E%3C/svg%3E'
        },
        '5': {
            id: 'REP-2023-005',
            bandejaId: 'BAN-A01',
            seedType: 'Tomate Cherry',
            userId: 'USR-002',
            userName: 'María López',
            date: '17/09/2023',
            quality: 'Buena',
            qualityClass: 'quality-buena',
            score: '88/100',
            description: 'La bandeja muestra un buen desarrollo general. Las plántulas presentan un crecimiento uniforme y saludable. El color de las hojas es verde adecuado, aunque algunas muestran ligeras variaciones. No se observan signos de enfermedades ni plagas. La humedad del sustrato es adecuada. Se recomienda mantener el régimen actual de cuidados.',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23E3F2FD\' width=\'400\' height=\'300\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'70\' fill=\'%232196F3\'/%3E%3Cpath d=\'M200 80 L200 220 M130 150 L270 150\' stroke=\'%23FFFFFF\' stroke-width=\'10\'/%3E%3C/svg%3E'
        }
    };

    const reports = [
        { id: 'REP-2023-001', bandejaId: 'BAN-A01', userId: 'USR-001', date: '15/10/2023', quality: 'Excelente', qualityClass: 'quality-excelente', score: '95/100', dataKey: '1' },
        { id: 'REP-2023-002', bandejaId: 'BAN-B05', userId: 'USR-002', date: '08/10/2023', quality: 'Buena', qualityClass: 'quality-buena', score: '85/100', dataKey: '2' },
        { id: 'REP-2023-003', bandejaId: 'BAN-C12', userId: 'USR-001', date: '01/10/2023', quality: 'Regular', qualityClass: 'quality-regular', score: '75/100', dataKey: '3' },
        { id: 'REP-2023-004', bandejaId: 'BAN-D08', userId: 'USR-003', date: '24/09/2023', quality: 'Deficiente', qualityClass: 'quality-deficiente', score: '60/100', dataKey: '4' },
        { id: 'REP-2023-005', bandejaId: 'BAN-A01', userId: 'USR-002', date: '17/09/2023', quality: 'Buena', qualityClass: 'quality-buena', score: '88/100', dataKey: '5' }
    ];

    useEffect(() => {
        // Set today's date as default
        const today = new Date();
        const formattedDate = today.toISOString().substr(0, 10);
        setFormData(prev => ({ ...prev, fechaReporte: formattedDate }));
    }, []);

    const handleDetailClick = (dataKey) => {
        setSelectedReport(reportData[dataKey]);
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
        setSelectedReport(null);
    };

    const handleCreateReport = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            idBandeja: '',
            fechaReporte: new Date().toISOString().substr(0, 10),
            descripcion: '',
            calidadGerminacion: '',
            calificacion: ''
        });
        setSelectedFile(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveReport = () => {
        // Here you would normally validate and save the form data
        // For this demo, we'll just close the modal
        alert('Reporte guardado correctamente (simulación)');
        handleCloseModal();
    };

    const handleModalOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    return (
        <div>
            <Header title="Reportes" />
            <div className="action-bar">
                <h1 className="section-title">Gestión de Reportes Semanales</h1>
                <button onClick={handleCreateReport} className="btn-create">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
                    </svg>
                    Crear Reporte
                </button>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID Reporte</th>
                            <th>ID Bandeja</th>
                            <th>ID Usuario</th>
                            <th>Fecha Reporte</th>
                            <th>Calidad Germinación</th>
                            <th>Calificación</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.id}>
                                <td data-label="ID Reporte">{report.id}</td>
                                <td data-label="ID Bandeja">{report.bandejaId}</td>
                                <td data-label="ID Usuario">{report.userId}</td>
                                <td data-label="Fecha Reporte">{report.date}</td>
                                <td data-label="Calidad Germinación">
                                    <span className={`quality-badge ${report.qualityClass}`}>
                                        {report.quality}
                                    </span>
                                </td>
                                <td data-label="Calificación">{report.score}</td>
                                <td>
                                    <button
                                        className="btn-detail"
                                        onClick={() => handleDetailClick(report.dataKey)}
                                    >
                                        Ver Detalle
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Report Detail Panel */}
            {showDetail && selectedReport && (
                <div className="report-detail active">
                    <div className="detail-header">
                        <h3 className="detail-title">
                            Detalle del Reporte <span>{selectedReport.id}</span>
                        </h3>
                        <button className="detail-close" onClick={handleCloseDetail}>
                            ×
                        </button>
                    </div>
                    <div className="detail-content">
                        <div className="detail-grid">
                            <div className="detail-image">
                                <img
                                    src={selectedReport.image}
                                    alt="Imagen del reporte"
                                />
                            </div>
                            <div className="detail-info">
                                <div className="info-group">
                                    <div className="info-label">ID Reporte</div>
                                    <div className="info-value">{selectedReport.id}</div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">Fecha Reporte</div>
                                    <div className="info-value">{selectedReport.date}</div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">ID Bandeja</div>
                                    <div className="info-value">{selectedReport.bandejaId}</div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">Tipo de Semilla</div>
                                    <div className="info-value">{selectedReport.seedType}</div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">ID Usuario</div>
                                    <div className="info-value">{selectedReport.userId}</div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">Nombre Usuario</div>
                                    <div className="info-value">{selectedReport.userName}</div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">Calidad Germinación</div>
                                    <div className="info-value">
                                        <span className={`quality-badge ${selectedReport.qualityClass}`}>
                                            {selectedReport.quality}
                                        </span>
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-label">Calificación</div>
                                    <div className="info-value">{selectedReport.score}</div>
                                </div>
                                <div className="detail-description">
                                    <div className="description-label">Descripción</div>
                                    <div className="description-text">
                                        {selectedReport.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para crear reporte */}
            {showModal && (
                <div
                    className={`modal-overlay ${showModal ? 'active' : ''}`}
                    onClick={handleModalOverlayClick}
                >
                    <div className="modal">
                        <div className="modal-header">
                            <h3 className="modal-title">Crear Nuevo Reporte</h3>
                            <button className="modal-close" onClick={handleCloseModal}>
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="idBandeja">ID Bandeja</label>
                                    <select
                                        className="form-control"
                                        id="idBandeja"
                                        name="idBandeja"
                                        value={formData.idBandeja}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Seleccionar bandeja</option>
                                        <option value="BAN-A01">BAN-A01 - Tomate Cherry</option>
                                        <option value="BAN-B05">BAN-B05 - Lechuga Romana</option>
                                        <option value="BAN-C12">BAN-C12 - Pimiento</option>
                                        <option value="BAN-D08">BAN-D08 - Albahaca</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaReporte">Fecha Reporte</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaReporte"
                                        name="fechaReporte"
                                        value={formData.fechaReporte}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="foto">Foto</label>
                                    <div className="file-input-wrapper">
                                        <label className="file-input-label">
                                            Seleccionar archivo
                                            <input
                                                type="file"
                                                className="file-input"
                                                id="foto"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                            />
                                        </label>
                                        <span className="file-name">
                                            {selectedFile ? selectedFile.name : 'Ningún archivo seleccionado'}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcion">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        id="descripcion"
                                        name="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleInputChange}
                                        placeholder="Ingrese una descripción detallada del estado de la bandeja..."
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="calidadGerminacion">Calidad Germinación</label>
                                    <select
                                        className="form-control"
                                        id="calidadGerminacion"
                                        name="calidadGerminacion"
                                        value={formData.calidadGerminacion}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Seleccionar calidad</option>
                                        <option value="excelente">Excelente</option>
                                        <option value="buena">Buena</option>
                                        <option value="regular">Regular</option>
                                        <option value="deficiente">Deficiente</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="calificacion">Calificación (0-100)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="calificacion"
                                        name="calificacion"
                                        value={formData.calificacion}
                                        onChange={handleInputChange}
                                        min="0"
                                        max="100"
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-cancel" onClick={handleCloseModal}>
                                Cancelar
                            </button>
                            <button className="btn-save" onClick={handleSaveReport}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reportes;