import React from 'react';
import '../../../styles/usuarios/components/UserModal.css';
import '../../../styles/usuarios/components/shared.css';

const UserModal = ({ 
    modalActivo, 
    formulario, 
    onInputChange, 
    onSubmit, 
    onClose 
}) => {
    if (modalActivo !== 'crear' && modalActivo !== 'editar') {
        return null;
    }

    return (
        <div className="modal-overlay active">
            <div className="modal">
                <div className="modal-header">
                    <h3 className="modal-title">
                        {modalActivo === 'crear' ? 'Agregar Usuario' : 'Editar Usuario'}
                    </h3>
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className="form-group">
                        <label>Nombre completo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formulario.nombre}
                            onChange={(e) => onInputChange('nombre', e.target.value)}
                            placeholder="Ingrese el nombre completo"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            value={formulario.email}
                            onChange={(e) => onInputChange('email', e.target.value)}
                            placeholder="Ingrese el correo electrónico"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Rol</label>
                        <select
                            className="form-control"
                            value={formulario.rol}
                            onChange={(e) => onInputChange('rol', e.target.value)}
                            required
                        >
                            <option value="operador">Operador</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="administrador">Administrador</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>
                            {modalActivo === 'crear' ? 'Contraseña' : 'Nueva Contraseña (opcional)'}
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            value={formulario.password}
                            onChange={(e) => onInputChange('password', e.target.value)}
                            placeholder="Ingrese la contraseña"
                            required={modalActivo === 'crear'}
                        />
                    </div>

                    {formulario.password && (
                        <div className="form-group">
                            <label>Confirmar contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                value={formulario.confirmarPassword}
                                onChange={(e) => onInputChange('confirmarPassword', e.target.value)}
                                placeholder="Confirme la contraseña"
                                required
                            />
                        </div>
                    )}

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            {modalActivo === 'crear' ? 'Crear Usuario' : 'Guardar Cambios'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
