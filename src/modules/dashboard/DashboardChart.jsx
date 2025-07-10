import React, { useState } from 'react';
import '../../styles/dashboard/DashboardChartStyles.css';

const DashboardChart = ({ chartRef }) => {
    const [activeFilter, setActiveFilter] = useState('7 días');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        // Aquí puedes agregar la lógica para actualizar los datos del gráfico
        console.log(`Filtro seleccionado: ${filter}`);
    };

    return (
        <section className="chart-container">
            <div className="chart-header">
                <h2>Mediciones de los Últimos 7 Días</h2>
                
                <div className="chart-filters">
                    <button 
                        className={`chart-filter ${activeFilter === '7 días' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('7 días')}
                    >
                        7 días
                    </button>
                    <button 
                        className={`chart-filter ${activeFilter === '14 días' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('14 días')}
                    >
                        14 días
                    </button>
                    <button 
                        className={`chart-filter ${activeFilter === '30 días' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('30 días')}
                    >
                        30 días
                    </button>
                </div>
            </div>
            <canvas ref={chartRef} width={600} height={300} />  
        </section>
    );
};

export default DashboardChart;
