import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailButton from '../../components/ButtonDetail';
import ReportDetailPanel from '../reportes/ReportDetailPanel';
import '../../styles/dashboard/DashboardTableStyles.css'; 
import '../../styles/reportes/ReportesStyles.css'; 
import { Button } from 'antd';
import ButtonSeeAll from '../../components/ButtonSeeAll';

const ReportRow = ({ id, fecha, calidad, calificacion, onDetailClick }) => {
    const handleDetailClick = () => {
        onDetailClick({ id, fecha, calidad, calificacion });
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{fecha}</td>
            <td><span className={`status ${getStatusClass(calidad)}`}>{calidad}</span></td>
            <td>{calificacion}</td>
            <td><DetailButton onClick={handleDetailClick} /></td>
        </tr>
    );
};

const getStatusClass = (calidad) => {
    if (calidad === 'Buena') return 'status-good';
    if (calidad === 'Regular') return 'status-average';
    return 'status-poor';
};

const DashboardTable = () => {
    const navigate = useNavigate();
    const [panelVisible, setPanelVisible] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);

    const handleSeeAllClick = () => {
        navigate('/reportes');
    };

    const handleDetailClick = (reportData) => {
        // Transformar los datos del dashboard al formato esperado por ReportDetailPanel
        const transformedReport = {
            id: reportData.id,
            date: reportData.fecha,
            bandejaId: "BND-001", // Datos de ejemplo
            seedType: "Tomate Cherry",
            userId: "USR-001",
            userName: "Juan Pérez",
            quality: reportData.calidad,
            qualityClass: getStatusClass(reportData.calidad),
            score: reportData.calificacion,
            description: "Condiciones óptimas durante la semana. Se registró un ligero aumento en la humedad debido a las lluvias del martes y miércoles. Los cultivos muestran un crecimiento saludable y no se detectaron plagas o enfermedades.",
            image: "/api/placeholder/300/200" // Imagen de ejemplo
        };
        setSelectedReport(transformedReport);
        setPanelVisible(true);
    };

    const closePanel = () => {
        setPanelVisible(false);
        setSelectedReport(null);
    };

    return (
        <>
            <section className="table-container">
                <div className="table-header">
                    <h2>Reportes Semanales Recientes</h2>
                    <ButtonSeeAll onClick={handleSeeAllClick} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID Reporte</th>
                            <th>Fecha</th>
                            <th>Calidad</th>
                            <th>Calificación</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ReportRow 
                            id="REP-2023-001" 
                            fecha="15/10/2023" 
                            calidad="Buena" 
                            calificacion="95/100" 
                            onDetailClick={handleDetailClick}
                        />
                        <ReportRow 
                            id="REP-2023-002" 
                            fecha="08/10/2023" 
                            calidad="Buena" 
                            calificacion="92/100" 
                            onDetailClick={handleDetailClick}
                        />
                        <ReportRow 
                            id="REP-2023-003" 
                            fecha="01/10/2023" 
                            calidad="Regular" 
                            calificacion="78/100" 
                            onDetailClick={handleDetailClick}
                        />
                        {/* ... más rows */}
                    </tbody>
                </table>
            </section>

            <ReportDetailPanel
                isVisible={panelVisible}
                onClose={closePanel}
                report={selectedReport}
            />
        </>
    );
};

export default DashboardTable;
