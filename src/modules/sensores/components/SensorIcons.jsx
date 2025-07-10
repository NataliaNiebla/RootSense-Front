import React from 'react';

export const SensorIcons = {
    temperatura: (
        <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#4CAF50"/>
        </svg>
    ),
    humedad_relativa: (
        <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#4CAF50"/>
        </svg>
    ),
    humedad_suelo: (
        <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM7 13H17V11H7" fill="#4CAF50"/>
        </svg>
    ),
    iluminacion: (
        <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7C8.14 7 5 10.14 5 14C5 17.86 8.14 21 12 21C15.86 21 19 17.86 19 14C19 10.14 15.86 7 12 7ZM12 19C9.24 19 7 16.76 7 14C7 11.24 9.24 9 12 9C14.76 9 17 11.24 17 14C17 16.76 14.76 19 12 19ZM12 2C12.55 2 13 2.45 13 3V5C13 5.55 12.55 6 12 6C11.45 6 11 5.55 11 5V3C11 2.45 11.45 2 12 2ZM21 11H19C18.45 11 18 11.45 18 12C18 12.55 18.45 13 19 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11ZM5 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H5C5.55 13 6 12.55 6 12C6 11.45 5.55 11 5 11ZM17.24 5.34L18.65 3.93C19.04 3.54 19.04 2.91 18.65 2.52C18.26 2.13 17.63 2.13 17.24 2.52L15.83 3.93C15.44 4.32 15.44 4.95 15.83 5.34C16.22 5.73 16.85 5.73 17.24 5.34ZM6.76 5.34C7.15 5.73 7.78 5.73 8.17 5.34C8.56 4.95 8.56 4.32 8.17 3.93L6.76 2.52C6.37 2.13 5.74 2.13 5.35 2.52C4.96 2.91 4.96 3.54 5.35 3.93L6.76 5.34Z" fill="#4CAF50"/>
        </svg>
    )
};

export const SensorTypeNames = {
    temperatura: 'Temperatura',
    humedad_relativa: 'Humedad Relativa',
    humedad_suelo: 'Humedad del Suelo',
    iluminacion: 'Iluminación'
};

export const obtenerIconoSensor = (tipo) => {
    return SensorIcons[tipo] || null;
};

export const obtenerNombreTipo = (tipo) => {
    return SensorTypeNames[tipo] || tipo;
};
