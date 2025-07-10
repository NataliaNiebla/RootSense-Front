// ModalAddBandeja.jsx
import React from 'react';
import '../../styles/components/ModalStyles.css'; // Assuming you have a CSS file for modal styles

const ModalAddBandeja = ({ isOpen, onClose, onSave, formValues, onChange }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="modal modal-medium" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Agregar Nueva Bandeja</h3>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    <form id="formAddBandeja">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                className="form-control"
                                value={formValues.nombre} 
                                onChange={onChange} 
                                required 
                                placeholder="Ej: Bandeja A1"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ubicacion">Ubicación</label>
                            <input 
                                type="text" 
                                id="ubicacion" 
                                name="ubicacion" 
                                className="form-control"
                                value={formValues.ubicacion} 
                                onChange={onChange} 
                                required 
                                placeholder="Ej: Sección Norte"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipoSemilla">Tipo de Semilla</label>
                            <input 
                                type="text" 
                                id="tipoSemilla" 
                                name="tipoSemilla" 
                                className="form-control"
                                value={formValues.tipoSemilla} 
                                onChange={onChange} 
                                required 
                                placeholder="Ej: Tomate Cherry"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechaInicio">Fecha de Inicio</label>
                            <input 
                                type="date" 
                                id="fechaInicio" 
                                name="fechaInicio" 
                                className="form-control"
                                value={formValues.fechaInicio} 
                                onChange={onChange} 
                                required 
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={onClose}>Cancelar</button>
                    <button className="btn-save" onClick={onSave}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddBandeja;