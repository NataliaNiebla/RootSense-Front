// BandejasGrid.jsx
import React from 'react';
import BandejaCard from './BandejaCard';
import '../../styles/bandejas/BandejasGridStyles.css';

const BandejasGrid = ({ bandejas = [] }) => {
    return (
        <div className="bandejas-grid">
            {bandejas.length > 0 ? (
                bandejas.map((bandeja) => (
                    <BandejaCard key={bandeja.id} bandeja={bandeja} />
                ))
            ) : (
                <div className="no-bandejas">
                    <p>No hay bandejas registradas</p>
                    <p>Haga clic en "Agregar Bandeja" para comenzar</p>
                </div>
            )}
        </div>
    );
};

export default BandejasGrid;


