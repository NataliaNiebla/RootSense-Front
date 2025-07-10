import React from 'react';

const ModalAgregarActuador = ({ 
    isActive, 
    formulario, 
    bandejas, 
    onInputChange, 
    onSubmit, 
    onClose 
}) => {
    if (!isActive) {
        return null;
    }

    return (
        <div className="modal-overlay active">
            <div className="modal">
                <div className="modal-header">
                    <h3 className="modal-title">Agregar Actuador</h3>
                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className="form-group">
                        <label>ID Bandeja</label>
                        <select
                            className="form-control"
                            value={formulario.bandeja}
                            onChange={(e) => onInputChange('bandeja', e.target.value)}
                            required
                        >
                            <option value="">Seleccionar bandeja</option>
                            {bandejas.map(bandeja => (
                                <option key={bandeja.id} value={bandeja.id}>
                                    {bandeja.id} - {bandeja.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Tipo</label>
                        <select
                            className="form-control"
                            value={formulario.tipo}
                            onChange={(e) => onInputChange('tipo', e.target.value)}
                            required
                        >
                            <option value="">Seleccionar tipo</option>
                            <option value="rociador">Rociador</option>
                            <option value="ventilador">Ventilador</option>
                            <option value="lampara">Lámpara</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Estado</label>
                        <select
                            className="form-control"
                            value={formulario.estado}
                            onChange={(e) => onInputChange('estado', e.target.value)}
                            required
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Crear Actuador
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAgregarActuador;
