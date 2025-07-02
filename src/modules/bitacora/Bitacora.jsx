import React, { useState, useEffect } from 'react';
import '../../styles/BitacoraStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta

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

    const obtenerClaseCalidad = (calidad) => {
        const clases = {
            'excelente': 'quality-excelente',
            'buena': 'quality-buena',
            'regular': 'quality-regular',
            'deficiente': 'quality-deficiente'
        };
        return clases[calidad] || 'quality-regular';
    };

    const formatearFecha = (fecha) => {
        return new Date(fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div>
            <Header title="Bitacora" />
            <h2 className="section-title">Historial de Reportes</h2>

            {/* Formulario de Filtros */}
            <div className="filter-container">
                <div className="filter-title">
                    <span className="icon">🔍</span>
                    Filtrar Reportes
                </div>
                
                <div className="filter-form">
                    <div className="form-group">
                        <label>Fecha Inicio</label>
                        <input
                            type="date"
                            className="form-control"
                            value={filtros.fechaInicio}
                            onChange={(e) => handleFiltroChange('fechaInicio', e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Fecha Fin</label>
                        <input
                            type="date"
                            className="form-control"
                            value={filtros.fechaFin}
                            onChange={(e) => handleFiltroChange('fechaFin', e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Bandeja</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por bandeja..."
                            value={filtros.bandeja}
                            onChange={(e) => handleFiltroChange('bandeja', e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Tipo de Reporte</label>
                        <select
                            className="form-control"
                            value={filtros.tipoReporte}
                            onChange={(e) => handleFiltroChange('tipoReporte', e.target.value)}
                        >
                            <option value="">Todos los tipos</option>
                            <option value="Diario">Diario</option>
                            <option value="Semanal">Semanal</option>
                            <option value="Mensual">Mensual</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Calidad</label>
                        <select
                            className="form-control"
                            value={filtros.calidad}
                            onChange={(e) => handleFiltroChange('calidad', e.target.value)}
                        >
                            <option value="">Todas las calidades</option>
                            <option value="excelente">Excelente</option>
                            <option value="buena">Buena</option>
                            <option value="regular">Regular</option>
                            <option value="deficiente">Deficiente</option>
                        </select>
                    </div>
                </div>
                
                <div className="filter-actions">
                    <button className="btn-reset" onClick={limpiarFiltros}>
                        Limpiar Filtros
                    </button>
                    <button className="btn-filter" onClick={aplicarFiltros}>
                        <span className="icon">🔍</span>
                        Aplicar Filtros
                    </button>
                </div>
            </div>

            {/* Grid de Reportes */}
            <div className="card-grid">
                {reportes.map(reporte => (
                    <div key={reporte.id} className="report-card">
                        <div className="card-header">
                            <h3 className="card-title">{reporte.bandeja}</h3>
                            <span className="card-date">{formatearFecha(reporte.fecha)}</span>
                        </div>
                        
                        <div className="card-body">
                            <div className="card-info">
                                <div className="info-item">
                                    <span className="info-label">Temperatura Promedio</span>
                                    <span className="info-value">{reporte.temperaturaPromedio}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Humedad Promedio</span>
                                    <span className="info-value">{reporte.humedadPromedio}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">pH Promedio</span>
                                    <span className="info-value">{reporte.phPromedio}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Calidad</span>
                                    <span className={`quality-badge ${obtenerClaseCalidad(reporte.calidad)}`}>
                                        {reporte.calidad.charAt(0).toUpperCase() + reporte.calidad.slice(1)}
                                    </span>
                                </div>
                            </div>
                            
                            {reporte.observaciones && (
                                <div className="info-item">
                                    <span className="info-label">Observaciones</span>
                                    <p>{reporte.observaciones}</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="card-footer">
                            <button 
                                className="btn-analysis"
                                onClick={() => setAnalisisActivo(reporte.id)}
                            >
                                <span className="icon">🤖</span>
                                Ver Análisis IA
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Panel de Análisis IA */}
            {analisisActivo && (
                <div className={`analysis-panel ${analisisActivo ? 'active' : ''}`}>
                    <div className="analysis-header">
                        <h3 className="analysis-title">Análisis con IA</h3>
                        <button 
                            className="analysis-close"
                            onClick={() => setAnalisisActivo(null)}
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div className="analysis-content">
                        {(() => {
                            const reporte = reportes.find(r => r.id === analisisActivo);
                            if (!reporte) return null;
                            
                            return (
                                <>
                                    <div className="analysis-section">
                                        <div className="section-label">
                                            <span className="icon">📊</span>
                                            Resumen del Análisis
                                        </div>
                                        <div className="section-content">
                                            <p>{reporte.analisisIA.resumen}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="analysis-section">
                                        <div className="section-label">
                                            <span className="icon">💡</span>
                                            Recomendaciones
                                        </div>
                                        <div className="section-content">
                                            <ul>
                                                {reporte.analisisIA.recomendaciones.map((rec, index) => (
                                                    <li key={index}>{rec}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {reporte.analisisIA.alertas.length > 0 && (
                                        <div className="analysis-section">
                                            <div className="section-label">
                                                <span className="icon">⚠️</span>
                                                Alertas
                                            </div>
                                            <div className="section-content">
                                                <ul>
                                                    {reporte.analisisIA.alertas.map((alerta, index) => (
                                                        <li key={index}>{alerta}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </>
                            );
                        })()}
                    </div>
                </div>
            )}

            {reportes.length === 0 && (
                <div className="empty-state">
                    <p>No se encontraron reportes con los filtros aplicados.</p>
                </div>
            )}
        </div>
    );
};

export default Bitacora;