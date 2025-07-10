import React from 'react';
import '../../../styles/sensores/MessageAlert.css';

const MessageAlert = ({ mensaje }) => {
    if (!mensaje.visible) return null;

    return (
        <div className={`message ${mensaje.tipo}`}>
            <span className="icon">
                {mensaje.tipo === 'success' ? '✓' : '⚠'}
            </span>
            {mensaje.texto}
        </div>
    );
};

export default MessageAlert;
