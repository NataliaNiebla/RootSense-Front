import React from 'react';

const DetailButton = ({ onClick, children = "Ver Detalle", className = "btn-detail" }) => {
    return (
        <button 
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default DetailButton;
