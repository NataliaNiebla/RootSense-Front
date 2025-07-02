import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta
import Chart from 'chart.js/auto';
import { usePage } from '../../hooks/usePage';
import { useSidebar } from '../../hooks/useSidebar';
import '../../styles/DashboardStyles.css'; // Asegúrate de tener un archivo CSS para estilos

const Dashboard = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const { pageTitle, setPageTitle } = usePage('Dashboard');
    const { collapsed } = useSidebar();

    useEffect(() => {
        setPageTitle('Dashboard');
    }, [setPageTitle]);

    useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [
        {
            label: 'Humedad del Suelo (%)',
            data: [62, 65, 68, 64, 60, 65, 66],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            tension: 0.4,
            fill: true,
        },
        {
            label: 'Humedad Relativa (%)',
            data: [70, 72, 68, 65, 67, 69, 70],
            borderColor: '#2196F3',
            backgroundColor: 'rgba(33, 150, 243, 0.1)',
            tension: 0.4,
            fill: true,
        },
        {
            label: 'Iluminación (lux/100)',
            data: [75, 82, 80, 78, 85, 83, 80],
            borderColor: '#FFC107',
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            tension: 0.4,
            fill: true,
        },
        ],
        },
        options: {
            responsive: true,
            plugins: {
            legend: { position: 'top' },
            tooltip: { mode: 'index', intersect: false },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
        },
        scales: {
            x: {
                grid: { color: 'rgba(0,0,0,0.05)' },
            },
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(0,0,0,0.05)' },
            },
        },
    },
});

    return () => {
        chartInstance.current.destroy();
        };
}, []);

    return (
        <div className="dashboard">
            <Header title={pageTitle} />
            <main style={{
                marginLeft: collapsed ? '80px' : '260px',
                transition: 'margin-left 0.3s ease',
                padding: '24px'
            }}>
            
                {/* Cards */}
                <section className="cards-container">
                  {/* Reutiliza una Card */}
                    <Card title="Humedad del Suelo" value="65.5%" icon="💧" />
                    <Card title="Humedad Relativa" value="70%" icon="🌡️" />
                    <Card title="Iluminación" value="800 lux" icon="💡" />
                </section>

                {/* Chart */}
                <section className="chart-container">
                    <div className="chart-header">
                        <h2>Mediciones de los Últimos 7 Días</h2>
                        <div className="chart-filters">
                        <button className="chart-filter active">7 días</button>
                        <button className="chart-filter">14 días</button>
                        <button className="chart-filter">30 días</button>
                    </div>
                </div>
                    <canvas ref={chartRef} width={600} height={300} />
                </section>

                {/* Tabla */}
                <section className="table-container">
                    <h2>Reportes Semanales Recientes</h2>
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
                        <ReportRow id="REP-2023-001" fecha="15/10/2023" calidad="Buena" calificacion="95/100" />
                        <ReportRow id="REP-2023-002" fecha="08/10/2023" calidad="Buena" calificacion="92/100" />
                        <ReportRow id="REP-2023-003" fecha="01/10/2023" calidad="Regular" calificacion="78/100" />
                      {/* ... más rows */}
                    </tbody>
                    </table>
                </section>
            </main>
        </div>
  );
};

const Card = ({ title, value, icon }) => (
    <div className="card">
        <div className="card-title">{icon} {title}</div>
        <div className="card-value">{value}</div>
        <div className="card-footer">Última actualización: hace 5 minutos</div>
    </div>
);

const ReportRow = ({ id, fecha, calidad, calificacion }) => (
    <tr>
        <td>{id}</td>
        <td>{fecha}</td>
        <td><span className={`status ${getStatusClass(calidad)}`}>{calidad}</span></td>
        <td>{calificacion}</td>
        <td><button className="btn-detail">Ver Detalle</button></td>
    </tr>
);

const getStatusClass = (calidad) => {
    if (calidad === 'Buena') return 'status-good';
    if (calidad === 'Regular') return 'status-average';
    return 'status-poor';
};

export default Dashboard;
