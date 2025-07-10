import React from 'react';

const MessageNotification = ({ mensaje }) => {
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

export default MessageNotification;
