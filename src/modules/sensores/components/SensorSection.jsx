import React from 'react';
import SensorCard from './SensorCard';
import '../../../styles/sensores/SensorSection.css';

const SensorSection = ({ 
    tipo, 
    sensores, 
    obtenerIconoSensor, 
    obtenerNombreTipo, 
    onToggleEstado 
}) => {
    return (
        <section className="sensor-section">
            <h3 className="sensor-type-title">
                {obtenerIconoSensor(tipo)}
                {obtenerNombreTipo(tipo)}
                <span className="sensor-count">({sensores.length})</span>
            </h3>

            <div className="sensor-grid">
                {sensores.map(sensor => (
                    <SensorCard
                        key={sensor.id}
                        sensor={sensor}
                        onToggleEstado={onToggleEstado}
                        obtenerIconoSensor={obtenerIconoSensor}
                        obtenerNombreTipo={obtenerNombreTipo}
                    />
                ))}
            </div>
        </section>
    );
};

export default SensorSection;
