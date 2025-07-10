import React from 'react';
import '../../../styles/usuarios/components/DeleteConfirmModal.css';
import '../../../styles/usuarios/components/shared.css';

const DeleteConfirmModal = ({ 
    isOpen, 
    usuario, 
    onConfirm, 
    onClose 
}) => {
    if (!isOpen || !usuario) {
        return null;
    }

    return (
        <div className="modal-overlay active">
            <div className="modal">
                <div className="modal-header">
                    <h3 className="modal-title">Confirmar Eliminación</h3>
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <p>¿Está seguro que desea eliminar al usuario <strong>{usuario.nombre}</strong>?</p>
                    <p style={{ color: 'var(--color-error)', fontSize: '14px' }}>
                        Esta acción no se puede deshacer.
                    </p>
                </div>

                <div className="form-actions">
                    <button className="btn btn-secondary" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="btn btn-danger" onClick={onConfirm}>
                        Eliminar Usuario
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
