import React from 'react';

const CreateReportForm = ({ 
    formData, 
    onInputChange, 
    onFileChange, 
    selectedFile 
}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="idBandeja">ID Bandeja</label>
                <select
                    className="form-control"
                    id="idBandeja"
                    name="idBandeja"
                    value={formData.idBandeja}
                    onChange={onInputChange}
                    required
                >
                    <option value="">Seleccionar bandeja</option>
                    <option value="BAN-A01">BAN-A01 - Tomate Cherry</option>
                    <option value="BAN-B05">BAN-B05 - Lechuga Romana</option>
                    <option value="BAN-C12">BAN-C12 - Pimiento</option>
                    <option value="BAN-D08">BAN-D08 - Albahaca</option>
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="fechaReporte">Fecha Reporte</label>
                <input
                    type="date"
                    className="form-control"
                    id="fechaReporte"
                    name="fechaReporte"
                    value={formData.fechaReporte}
                    onChange={onInputChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="foto">Foto</label>
                <div className="file-input-wrapper">
                    <label className="file-input-label">
                        Seleccionar archivo
                        <input
                            type="file"
                            className="file-input"
                            id="foto"
                            onChange={onFileChange}
                            accept="image/*"
                        />
                    </label>
                    <span className="file-name">
                        {selectedFile ? selectedFile.name : 'Ningún archivo seleccionado'}
                    </span>
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={onInputChange}
                    placeholder="Ingrese una descripción detallada del estado de la bandeja..."
                    required
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="calidadGerminacion">Calidad Germinación</label>
                <select
                    className="form-control"
                    id="calidadGerminacion"
                    name="calidadGerminacion"
                    value={formData.calidadGerminacion}
                    onChange={onInputChange}
                    required
                >
                    <option value="">Seleccionar calidad</option>
                    <option value="excelente">Excelente</option>
                    <option value="buena">Buena</option>
                    <option value="regular">Regular</option>
                    <option value="deficiente">Deficiente</option>
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="calificacion">Calificación (0-100)</label>
                <input
                    type="number"
                    className="form-control"
                    id="calificacion"
                    name="calificacion"
                    value={formData.calificacion}
                    onChange={onInputChange}
                    min="0"
                    max="100"
                    required
                />
            </div>
        </form>
    );
};

export default CreateReportForm;
