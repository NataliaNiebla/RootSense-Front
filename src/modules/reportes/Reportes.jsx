import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import { usePage } from '../../hooks/usePage';
import '../../styles/reportes/ReportesStyles.css';
import '../../styles/reportes/ReportesTableStyles.css';
import '../../styles/reportes/ReportesDetailPanelStyles.css';
import ButtonAdd from '../../components/ButtonAdd';
import DataTable from '../../components/DataTable';
import ReportDetailPanel from './ReportDetailPanel';
import Modal from '../../components/Modal';
import CreateReportForm from './CreateReportForm';


const Reportes = () => {
    const { setPageTitle } = usePage('Reportes');
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

    useEffect(() => {
        setPageTitle('Reportes Semanales');
    }, [setPageTitle]);

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

    const handleDetailClick = (report) => {
        setSelectedReport(reportData[report.dataKey]);
        setShowDetail(true);
    };

    // Define table columns
    const tableColumns = [
        { key: 'id', header: 'ID Reporte' },
        { key: 'bandejaId', header: 'ID Bandeja' },
        { key: 'userId', header: 'ID Usuario' },
        { key: 'date', header: 'Fecha Reporte' },
        { 
            key: 'quality', 
            header: 'Calidad Germinación',
            render: (row) => (
                <span className={`quality-badge ${row.qualityClass}`}>
                    {row.quality}
                </span>
            )
        },
        { key: 'score', header: 'Calificación' }
    ];

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

    return (
        <div>
            <Header title="Reportes Semanales" />
            
            <ContentLayout>
                <div className="action-bar">
                    <h2 className="section-title">Gestión de Reportes Semanales</h2>
                    <ButtonAdd title="Crear Reporte" onClick={handleCreateReport} />
                </div>

                <DataTable
                    columns={tableColumns}
                    data={reports}
                    onRowAction={handleDetailClick}
                    actionButtonText="Ver Detalle"
                    actionKey="id"
                    className="table-container"
                />

            <ReportDetailPanel
                isVisible={showDetail}
                report={selectedReport}
                onClose={handleCloseDetail}
            />            <Modal
                isOpen={showModal}
                onClose={handleCloseModal}
                title="Crear Nuevo Reporte"
                size="medium"
                footer={
                    <>
                        <button className="btn-cancel" onClick={handleCloseModal}>
                            Cancelar
                        </button>
                        <button className="btn-save" onClick={handleSaveReport}>
                            Guardar
                        </button>
                    </>
                }
            >
                <CreateReportForm
                    formData={formData}
                    onInputChange={handleInputChange}
                    onFileChange={handleFileChange}
                    selectedFile={selectedFile}
                />
            </Modal>
            </ContentLayout>
        </div>
    );
};

export default Reportes;