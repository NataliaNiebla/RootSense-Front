import React, { useState, useEffect } from 'react';
import '../../styles/bitacora/BitacoraStyles.css';
import '../../styles/bitacora/BitacoraFiltersStyles.css';
import '../../styles/bitacora/ReportesGridStyles.css';
import '../../styles/bitacora/AnalysisPanelStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta
import ContentLayout from '../../components/ContentLayout';
import BitacoraFilters from './BitacoraFilters';
import ReportesGrid from './ReportesGrid';
import AnalysisPanel from './AnalysisPanel';

// Datos de ejemplo - reemplazar con llamada a API
const reportesEjemplo = [
        {
            id: 1,
            fecha: '2025-01-15',
            bandeja: 'Bandeja A1',
            tipoReporte: 'Semanal',
            calidad: 'excelente',
            temperaturaPromedio: '24.5°C',
            humedadPromedio: '68%',
            phPromedio: '6.8',
            observaciones: 'Crecimiento óptimo de lechugas',
            analisisIA: {
                resumen: 'Las condiciones han sido óptimas durante esta semana con un crecimiento excelente de las plantas.',
                recomendaciones: [
                    'Mantener los niveles actuales de humedad',
                    'Continuar con el programa de riego establecido',
                    'Monitorear posibles plagas en las próximas 48 horas'
                ],
                alertas: []
            }
        },
        {
            id: 2,
            fecha: '2025-01-08',
            bandeja: 'Bandeja B2',
            tipoReporte: 'Semanal',
            calidad: 'buena',
            temperaturaPromedio: '26.2°C',
            humedadPromedio: '72%',
            phPromedio: '7.1',
            observaciones: 'Ligero incremento en temperatura',
            analisisIA: {
                resumen: 'Condiciones generalmente buenas, pero se detectó un ligero aumento en la temperatura.',
                recomendaciones: [
                    'Ajustar ventilación para reducir temperatura',
                    'Revisar sistema de enfriamiento',
                    'Aumentar frecuencia de monitoreo'
                ],
                alertas: ['Temperatura ligeramente elevada']
            }
        },
        {
            id: 3,
            fecha: '2025-01-01',
            bandeja: 'Bandeja C3',
            tipoReporte: 'Semanal',
            calidad: 'regular',
            temperaturaPromedio: '22.8°C',
            humedadPromedio: '55%',
            phPromedio: '6.2',
            observaciones: 'Humedad por debajo del rango óptimo',
            analisisIA: {
                resumen: 'Se requiere atención inmediata para corregir los niveles de humedad.',
                recomendaciones: [
                    'Incrementar frecuencia de riego',
                    'Revisar sistema de humidificación',
                    'Ajustar configuración de sensores'
                ],
                alertas: ['Humedad por debajo del rango óptimo', 'pH ligeramente ácido']
            }
        }
    ];

const Bitacora = () => {
    const [reportes, setReportes] = useState([]);
    const [filtros, setFiltros] = useState({
        fechaInicio: '',
        fechaFin: '',
        bandeja: '',
        tipoReporte: '',
        calidad: ''
    });
    const [analisisActivo, setAnalisisActivo] = useState(null);

    useEffect(() => {
        // Simular carga de datos
        setReportes(reportesEjemplo);
    }, []);

    const handleFiltroChange = (campo, valor) => {
        setFiltros(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const aplicarFiltros = () => {
        let reportesFiltrados = reportesEjemplo;

        if (filtros.fechaInicio) {
            reportesFiltrados = reportesFiltrados.filter(r => r.fecha >= filtros.fechaInicio);
        }
        if (filtros.fechaFin) {
            reportesFiltrados = reportesFiltrados.filter(r => r.fecha <= filtros.fechaFin);
        }
        if (filtros.bandeja) {
            reportesFiltrados = reportesFiltrados.filter(r => 
                r.bandeja.toLowerCase().includes(filtros.bandeja.toLowerCase())
            );
        }
        if (filtros.tipoReporte) {
            reportesFiltrados = reportesFiltrados.filter(r => r.tipoReporte === filtros.tipoReporte);
        }
        if (filtros.calidad) {
            reportesFiltrados = reportesFiltrados.filter(r => r.calidad === filtros.calidad);
        }

        setReportes(reportesFiltrados);
    };

    const limpiarFiltros = () => {
        setFiltros({
            fechaInicio: '',
            fechaFin: '',
            bandeja: '',
            tipoReporte: '',
            calidad: ''
        });
        setReportes(reportesEjemplo);
    };

    const formatearFecha = (fecha) => {
        return new Date(fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bitacora-page">
            <Header title="Bitacora" />
            
            <ContentLayout>
                <h2 className="section-title">Historial de Reportes</h2>

                {/* Componente de Filtros */}
                <BitacoraFilters
                    filtros={filtros}
                    onFiltroChange={handleFiltroChange}
                    onAplicarFiltros={aplicarFiltros}
                    onLimpiarFiltros={limpiarFiltros}
                />

                {/* Grid de Reportes */}
                <ReportesGrid
                    reportes={reportes}
                    onVerAnalisis={setAnalisisActivo}
                    formatearFecha={formatearFecha}
                />

                {/* Panel de Análisis IA */}
                <AnalysisPanel
                    visible={!!analisisActivo}
                    onClose={() => setAnalisisActivo(null)}
                    reporte={reportes.find(r => r.id === analisisActivo)}
                />
            </ContentLayout>
        </div>
    );
};

export default Bitacora;