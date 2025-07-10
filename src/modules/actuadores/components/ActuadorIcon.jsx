import React from 'react';

const ActuadorIcon = ({ tipo }) => {
    const iconos = {
        rociador: (
            <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12ZM12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z" fill="#4CAF50"/>
            </svg>
        ),
        ventilador: (
            <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10C18 6.7 15.3 4 12 4C8.7 4 6 6.7 6 10C6 12.2 7.2 14.1 9 15.2L10 13.5C8.8 12.8 8 11.5 8 10C8 7.8 9.8 6 12 6C14.2 6 16 7.8 16 10C16 11.5 15.2 12.8 14 13.5L15 15.2C16.8 14.1 18 12.2 18 10ZM12 22C14.2 22 16.2 20.8 17.2 19H6.8C7.8 20.8 9.8 22 12 22Z" fill="#4CAF50"/>
            </svg>
        ),
        lampara: (
            <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z" fill="#4CAF50"/>
            </svg>
        )
    };

    return iconos[tipo] || null;
};

export default ActuadorIcon;
