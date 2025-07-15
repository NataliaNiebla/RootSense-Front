import React from 'react';
import {RobotOutlined } from '@ant-design/icons';
import ButtonAction from '../../../components/ButtonAction';


const ActuadorCard = ({ 
    actuador, 
    isSelected, 
    onCardClick, 
    onToggleEstado 
}) => {
    // Iconos SVG integrados
    const getActuadorIcon = (tipo) => {
        // Importa los iconos de Ant Design en la parte superior del archivo:
        // import { BulbOutlined, CloudOutlined, FanOutlined } from '@ant-design/icons';

        const iconos = {
            rociador: <RobotOutlined className="type-icon"  />,
            ventilador: <RobotOutlined className="type-icon" />,
            lampara: <RobotOutlined className="type-icon"/>
        };
        return iconos[tipo] || null;
    };
    return (
        <div 
            className={`actuator-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onCardClick(actuador.bandeja)}
        >
            <div className="actuator-header">
                <h3 className="actuator-title">
                    {getActuadorIcon(actuador.tipo)}
                    {actuador.tipo.charAt(0).toUpperCase() + actuador.tipo.slice(1)}
                </h3>
                <span className="actuator-id">ID: {actuador.id}</span>
            </div>
            
            <div className="actuator-content">
                <div className="actuator-item">
                    <span className="actuator-label">Bandeja:</span>
                    <span className="actuator-value">{actuador.bandeja}</span>
                </div>
                <div className="actuator-item">
                    <span className="actuator-label">Estado:</span>
                    <span className="actuator-value">
                        {actuador.estado.charAt(0).toUpperCase() + actuador.estado.slice(1)}
                    </span>
                </div>
            </div>

            <ButtonAction onClick={() => onToggleEstado(actuador.id)} estado={actuador.estado} />
        </div>
    );
};

export default ActuadorCard;
