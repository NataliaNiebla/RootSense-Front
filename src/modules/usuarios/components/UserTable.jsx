import React from 'react';
import '../../../styles/usuarios/components/UserTable.css';
import '../../../styles/usuarios/components/shared.css';

const UserTable = ({ 
    usuarios, 
    onEdit, 
    onToggleStatus, 
    onDelete, 
    formatearFecha, 
    obtenerClaseRol, 
    obtenerClaseEstado 
}) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Fecha Creación</th>
                        <th>Último Acceso</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <span className={`role-badge ${obtenerClaseRol(usuario.rol)}`}>
                                    {usuario.rol}
                                </span>
                            </td>
                            <td>{formatearFecha(usuario.fechaCreacion)}</td>
                            <td>{formatearFecha(usuario.ultimoAcceso)}</td>
                            <td>
                                <span className={`status-badge ${obtenerClaseEstado(usuario.estado)}`}>
                                    {usuario.estado}
                                </span>
                            </td>
                            <td>
                                <div className="table-actions">
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
