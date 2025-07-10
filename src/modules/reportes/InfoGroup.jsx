import React from 'react';

const InfoGroup = ({ label, value, children }) => {
    return (
        <div className="info-group">
            <div className="info-label">{label}</div>
            <div className="info-value">
                {children || value}
            </div>
        </div>
    );
};

export default InfoGroup;
