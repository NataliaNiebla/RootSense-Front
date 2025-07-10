import React from 'react';
import ButtonAdd from '../../../components/ButtonAdd';
import '../../../styles/usuarios/components/UserListHeader.css';

const UserListHeader = ({ onAdd }) => {
    return (
        <div className="page-header">
            <h2 className="section-title">Lista de Usuarios</h2>
            <ButtonAdd title="Agregar Usuario" onClick={onAdd} />
        </div>
    );
};

export default UserListHeader;
