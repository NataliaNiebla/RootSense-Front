import React from 'react';
import '../../styles/dashboard/DashboardCardsStyles.css';

import { CloudOutlined, DashboardOutlined, SunOutlined } from '@ant-design/icons';

const DashboardCards = () => {
    return (
        <section className="cards-container-dashboard">
            <Card title="Humedad del Suelo" value="65.5%" icon={<CloudOutlined />} />
            <Card title="Humedad Relativa" value="70%" icon={<DashboardOutlined />} />
            <Card title="Iluminación" value="800 lux" icon={<SunOutlined />} />
        </section>
    );
};

const Card = ({ title, value, icon }) => (
    <div className="card">
        <div className="card-title">{icon} {title}</div>
        <div className="card-value">{value}</div>
        <div className="card-footer">Última actualización: hace 5 minutos</div>
    </div>
);

export default DashboardCards;
