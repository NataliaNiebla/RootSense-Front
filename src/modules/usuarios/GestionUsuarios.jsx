import React from 'react';
import '../../styles/usuarios/components/shared.css';
import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import { useUsuarios } from './hooks/useUsuarios';
import Message from './components/Message';
import UserListHeader from './components/UserListHeader';
import UserTable from './components/UserTable';
import UserCards from './components/UserCards';
import UserModal from './components/UserModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import EmptyState from './components/EmptyState';

const GestionUsuarios = () => {
    const {
        usuarios,
        modalActivo,
        usuarioSeleccionado,
        mensaje,
        formulario,
        abrirModal,
        cerrarModal,
        crearUsuario,
        editarUsuario,
        eliminarUsuario,
        toggleEstadoUsuario,
        handleInputChange,
        formatearFecha,
        obtenerClaseRol,
        obtenerClaseEstado
    } = useUsuarios();

    const handleCreateUser = () => {
        abrirModal('crear');
    };

    const handleEditUser = (usuario) => {
        abrirModal('editar', usuario);
    };

    const handleDeleteUser = (usuario) => {
        abrirModal('eliminar', usuario);
    };

    const handleSubmitModal = () => {
        modalActivo === 'crear' ? crearUsuario() : editarUsuario();
    };

    return (
        <div>
            <Header title="Gestión de Usuarios" />
            
            <ContentLayout>
                <Message mensaje={mensaje} />

                <UserListHeader onAdd={handleCreateUser} />

                <UserTable
                    usuarios={usuarios}
                    onEdit={handleEditUser}
                    onToggleStatus={toggleEstadoUsuario}
                    onDelete={handleDeleteUser}
                    formatearFecha={formatearFecha}
                    obtenerClaseRol={obtenerClaseRol}
                    obtenerClaseEstado={obtenerClaseEstado}
                />

                <UserCards
                    usuarios={usuarios}
                    onEdit={handleEditUser}
                    onToggleStatus={toggleEstadoUsuario}
                    onDelete={handleDeleteUser}
                    formatearFecha={formatearFecha}
                    obtenerClaseRol={obtenerClaseRol}
                    obtenerClaseEstado={obtenerClaseEstado}
                />

                <UserModal
                    modalActivo={modalActivo}
                    formulario={formulario}
                    onInputChange={handleInputChange}
                    onSubmit={handleSubmitModal}
                    onClose={cerrarModal}
                />

                <DeleteConfirmModal
                    isOpen={modalActivo === 'eliminar'}
                    usuario={usuarioSeleccionado}
                    onConfirm={eliminarUsuario}
                    onClose={cerrarModal}
                />

                <EmptyState usuarios={usuarios} />
            </ContentLayout>
        </div>
    );
};

export default GestionUsuarios;
