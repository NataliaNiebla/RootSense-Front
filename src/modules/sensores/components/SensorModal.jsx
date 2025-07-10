import React from 'react';
import '../../../styles/sensores/SensorModal.css';

const SensorModal = ({ 
    isActive, 
    onClose, 
    onSubmit, 
    formulario, 
    onInputChange, 
    bandejas 
}) => {
    if (!isActive) return null;

    return (
        <div className="modal-overlay active">
            <div className="modal">
                <div className="modal-header">
                    <h3 className="modal-title">Agregar Sensor</h3>
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
                        <label>Tipo de Sensor</label>
                        <select
                            className="form-control"
                            value={formulario.tipo}
                            onChange={(e) => onInputChange('tipo', e.target.value)}
                            required
                        >
                            <option value="">Seleccionar tipo</option>
                            <option value="temperatura">Temperatura</option>
                            <option value="humedad_relativa">Humedad Relativa</option>
                            <option value="humedad_suelo">Humedad del Suelo</option>
                            <option value="iluminacion">Iluminación</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Ubicación</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formulario.ubicacion}
                            onChange={(e) => onInputChange('ubicacion', e.target.value)}
                            placeholder="Ej: Piso 1 - Bandeja 1"
                            required
                        />
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
                            Crear Sensor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SensorModal;
