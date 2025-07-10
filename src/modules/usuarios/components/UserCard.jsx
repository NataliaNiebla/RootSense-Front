import React from 'react';
import '../../../styles/usuarios/components/UserCard.css';
import '../../../styles/usuarios/components/shared.css';

const UserCard = ({ 
    usuario, 
    onEdit, 
    onToggleStatus, 
    onDelete, 
    formatearFecha, 
    obtenerClaseRol, 
    obtenerClaseEstado 
}) => {
    return (
        <div className="user-card">
            <div className="user-card-header">
                <h3 className="user-card-title">{usuario.nombre}</h3>
                <span className="user-card-id">ID: {usuario.id}</span>
            </div>
            
            <div className="user-card-content">
                <div className="user-card-item">
                    <span className="user-card-label">Email:</span>
                    <span className="user-card-value">{usuario.email}</span>
                </div>
                <div className="user-card-item">
                    <span className="user-card-label">Rol:</span>
                    <span className={`role-badge ${obtenerClaseRol(usuario.rol)}`}>
                        {usuario.rol}
                    </span>
                </div>
                <div className="user-card-item">
                    <span className="user-card-label">Estado:</span>
                    <span className={`status-badge ${obtenerClaseEstado(usuario.estado)}`}>
                        {usuario.estado}
                    </span>
                </div>
                <div className="user-card-item">
                    <span className="user-card-label">Fecha Creación:</span>
                    <span className="user-card-value">{formatearFecha(usuario.fechaCreacion)}</span>
                </div>
                <div className="user-card-item">
                    <span className="user-card-label">Último Acceso:</span>
                    <span className="user-card-value">{formatearFecha(usuario.ultimoAcceso)}</span>
                </div>
            </div>
            
            <div className="user-card-actions">
                <button 
                    className="btn btn-secondary"
                    onClick={() => onEdit(usuario)}
                >
                    <span className="icon">✏️</span>
                    Editar
                </button>
                <button 
                    className={`btn ${usuario.estado === 'activo' ? 'btn-warning' : 'btn-primary'}`}
                    onClick={() => onToggleStatus(usuario)}
                >
                    <span className="icon">
                        {usuario.estado === 'activo' ? '⏸' : '▶'}
                    </span>
                    {usuario.estado === 'activo' ? 'Desactivar' : 'Activar'}
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={() => onDelete(usuario)}
                >
                    <span className="icon">🗑️</span>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default UserCard;
