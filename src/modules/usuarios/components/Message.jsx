import React from 'react';
import '../../../styles/usuarios/components/Message.css';

const Message = ({ mensaje }) => {
    if (!mensaje.visible) {
        return null;
    }

    return (
        <div className={`message ${mensaje.tipo}`}>
            <span className="icon">
                {mensaje.tipo === 'success' ? '✓' : '⚠'}
            </span>
            {mensaje.texto}
        </div>
    );
};

export default Message;
