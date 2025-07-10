import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header'; 
import ContentLayout from '../../components/ContentLayout';
import DashboardCards from './DashboardCards';
import DashboardChart from './DashboardChart';
import DashboardTable from './DashboardTable';
import Chart from 'chart.js/auto';
import { usePage } from '../../hooks/usePage';
import '../../styles/dashboard/DashboardStyles.css';

const Dashboard = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const { setPageTitle } = usePage('Dashboard');

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
        <div>
            <Header title="Dashboard"/>

            <ContentLayout>
                <h2 className="section-title">Mediciones en tiempo real</h2>
                
                <DashboardCards />

                <DashboardChart chartRef={chartRef} />
                
                <DashboardTable />
                
            </ContentLayout>
        </div>
  );
};

export default Dashboard;
