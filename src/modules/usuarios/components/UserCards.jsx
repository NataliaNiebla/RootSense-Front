import React from 'react';
import UserCard from './UserCard';
import '../../../styles/usuarios/components/UserCards.css';

const UserCards = ({ 
    usuarios, 
    onEdit, 
    onToggleStatus, 
    onDelete, 
    formatearFecha, 
    obtenerClaseRol, 
    obtenerClaseEstado 
}) => {
    return (
        <div className="user-cards">
            {usuarios.map(usuario => (
                <UserCard
                    key={usuario.id}
                    usuario={usuario}
                    onEdit={onEdit}
                    onToggleStatus={onToggleStatus}
                    onDelete={onDelete}
                    formatearFecha={formatearFecha}
                    obtenerClaseRol={obtenerClaseRol}
                    obtenerClaseEstado={obtenerClaseEstado}
                />
            ))}
        </div>
    );
};

export default UserCards;
