import React, { useState, useEffect } from 'react';
import '../../styles/ActuadoresStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta

// Datos de ejemplo - reemplazar con llamada a API
const actuadoresEjemplo = [
    { id: 'A001', bandeja: 'B001', tipo: 'rociador', estado: 'activo' },
    { id: 'A002', bandeja: 'B002', tipo: 'ventilador', estado: 'inactivo' },
    { id: 'A003', bandeja: 'B001', tipo: 'lampara', estado: 'activo' },
    { id: 'A004', bandeja: 'B003', tipo: 'rociador', estado: 'inactivo' },
    { id: 'A005', bandeja: 'B004', tipo: 'ventilador', estado: 'activo' },
    { id: 'A006', bandeja: 'B005', tipo: 'lampara', estado: 'inactivo' }
];

const bandejasEjemplo = [
    { id: 'B001', nombre: 'Bandeja de Tomates', ubicacion: 'Sector A, Fila 2', semilla: 'Tomate Cherry' },
    { id: 'B002', nombre: 'Bandeja de Lechugas', ubicacion: 'Sector A, Fila 3', semilla: 'Lechuga Romana' },
    { id: 'B003', nombre: 'Bandeja de Pimientos', ubicacion: 'Sector B, Fila 1', semilla: 'Pimiento Verde' },
    { id: 'B004', nombre: 'Bandeja de Zanahorias', ubicacion: 'Sector B, Fila 2', semilla: 'Zanahoria Baby' },
    { id: 'B005', nombre: 'Bandeja de Fresas', ubicacion: 'Sector C, Fila 1', semilla: 'Fresa Silvestre' }
];

const Actuadores = () => {
    const [actuadores, setActuadores] = useState([]);
    const [bandejas] = useState(bandejasEjemplo);
    const [modalActivo, setModalActivo] = useState(false);
    const [actuadorSeleccionado, setActuadorSeleccionado] = useState(null);
    const [detallesPanelActivo, setDetallesPanelActivo] = useState(false);
    const [bandejaSeleccionada, setBandejaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState({ tipo: '', texto: '', visible: false });
    const [formulario, setFormulario] = useState({
        bandeja: '',
        tipo: '',
        estado: 'activo'
    });

    useEffect(() => {
        // Simular carga de datos
        setActuadores(actuadoresEjemplo);
    }, []);

    const mostrarMensaje = (tipo, texto) => {
        setMensaje({ tipo, texto, visible: true });
        setTimeout(() => {
            setMensaje(prev => ({ ...prev, visible: false }));
        }, 3000);
    };

    const handleInputChange = (campo, valor) => {
        setFormulario(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const limpiarFormulario = () => {
        setFormulario({
            bandeja: '',
            tipo: '',
            estado: 'activo'
        });
    };

    const abrirModal = () => {
        setModalActivo(true);
        limpiarFormulario();
    };

    const cerrarModal = () => {
        setModalActivo(false);
        limpiarFormulario();
    };

    const validarFormulario = () => {
        if (!formulario.bandeja.trim()) {
            mostrarMensaje('error', 'La bandeja es requerida');
            return false;
        }
        if (!formulario.tipo.trim()) {
            mostrarMensaje('error', 'El tipo es requerido');
            return false;
        }
        if (!formulario.estado.trim()) {
            mostrarMensaje('error', 'El estado es requerido');
            return false;
        }
        return true;
    };

    const crearActuador = () => {
        if (!validarFormulario()) return;

        const nuevoId = 'A' + (actuadores.length + 1).toString().padStart(3, '0');
        const nuevoActuador = {
            id: nuevoId,
            bandeja: formulario.bandeja,
            tipo: formulario.tipo,
            estado: formulario.estado
        };

        setActuadores([...actuadores, nuevoActuador]);
        mostrarMensaje('success', 'Actuador creado correctamente');
        cerrarModal();
    };

    const toggleEstadoActuador = (actuadorId) => {
        const actuadoresActualizados = actuadores.map(actuador => 
            actuador.id === actuadorId 
                ? { ...actuador, estado: actuador.estado === 'activo' ? 'inactivo' : 'activo' }
                : actuador
        );
        
        setActuadores(actuadoresActualizados);
        const actuador = actuadores.find(a => a.id === actuadorId);
        const nuevoEstado = actuador.estado === 'activo' ? 'inactivo' : 'activo';
        mostrarMensaje('success', `Actuador ${actuadorId} ${nuevoEstado === 'activo' ? 'activado' : 'desactivado'} correctamente`);
    };

    const mostrarDetallesBandeja = (bandejaId) => {
        const bandeja = bandejas.find(b => b.id === bandejaId);
        if (bandeja) {
            setBandejaSeleccionada(bandeja);
            setDetallesPanelActivo(true);
            setActuadorSeleccionado(bandejaId);
        }
    };

    const cerrarDetalles = () => {
        setDetallesPanelActivo(false);
        setBandejaSeleccionada(null);
        setActuadorSeleccionado(null);
    };

    const obtenerIconoActuador = (tipo) => {
        const iconos = {
            rociador: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12ZM12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z" fill="#4CAF50"/>
                </svg>
            ),
            ventilador: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10C18 6.7 15.3 4 12 4C8.7 4 6 6.7 6 10C6 12.2 7.2 14.1 9 15.2L10 13.5C8.8 12.8 8 11.5 8 10C8 7.8 9.8 6 12 6C14.2 6 16 7.8 16 10C16 11.5 15.2 12.8 14 13.5L15 15.2C16.8 14.1 18 12.2 18 10ZM12 22C14.2 22 16.2 20.8 17.2 19H6.8C7.8 20.8 9.8 22 12 22Z" fill="#4CAF50"/>
                </svg>
            ),
            lampara: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z" fill="#4CAF50"/>
                </svg>
            )
        };
        return iconos[tipo] || null;
    };

    return (
        <div>
            {/* Mensaje de éxito/error */}
            {mensaje.visible && (
                <div className={`message ${mensaje.tipo}`}>
                    <span className="icon">
                        {mensaje.tipo === 'success' ? '✓' : '⚠'}
                    </span>
                    {mensaje.texto}
                </div>
            )}

            {/* Acciones de contenedor */}
            <div className="actions-container">
                <Header title="Actuadores" />
                <h2 className="section-title">Lista de Actuadores</h2>
                <button className="btn btn-primary" onClick={abrirModal}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
                    </svg>
                    Agregar Actuador
                </button>
            </div>

            {/* Grid de tarjetas de actuadores */}
            <div className="actuator-grid">
                {actuadores.map(actuador => (
                    <div 
                        key={actuador.id} 
                        className={`actuator-card ${actuadorSeleccionado === actuador.bandeja ? 'selected' : ''}`}
                        onClick={() => mostrarDetallesBandeja(actuador.bandeja)}
                    >
                        <div className="actuator-header">
                            <h3 className="actuator-title">
                                {obtenerIconoActuador(actuador.tipo)}
                                {actuador.tipo.charAt(0).toUpperCase() + actuador.tipo.slice(1)}
                            </h3>
                            <span className="actuator-id">ID: {actuador.id}</span>
                        </div>
                        
                        <div className="actuator-content">
                            <div className="actuator-item">
                                <span className="actuator-label">Bandeja:</span>
                                <span className="actuator-value">{actuador.bandeja}</span>
                            </div>
                            <div className="actuator-item">
                                <span className="actuator-label">Estado:</span>
                                <span className="actuator-value">
                                    {actuador.estado.charAt(0).toUpperCase() + actuador.estado.slice(1)}
                                </span>
                            </div>
                        </div>
                        
                        <button 
                            className={`btn btn-toggle ${actuador.estado === 'activo' ? 'active' : 'inactive'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleEstadoActuador(actuador.id);
                            }}
                        >
                            {actuador.estado === 'activo' ? 'Desactivar' : 'Activar'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Panel de detalles de bandeja */}
            {detallesPanelActivo && bandejaSeleccionada && (
                <div className="details-panel active">
                    <div className="details-header">
                        <h3 className="details-title">Detalles de la Bandeja</h3>
                        <button className="details-close" onClick={cerrarDetalles}>
                            ×
                        </button>
                    </div>
                    <div className="details-content">
                        <div className="details-item">
                            <span className="details-label">ID Bandeja</span>
                            <span className="details-value">{bandejaSeleccionada.id}</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Nombre</span>
                            <span className="details-value">{bandejaSeleccionada.nombre}</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Ubicación</span>
                            <span className="details-value">{bandejaSeleccionada.ubicacion}</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Tipo de Semilla</span>
                            <span className="details-value">{bandejaSeleccionada.semilla}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Agregar Actuador */}
            {modalActivo && (
                <div className="modal-overlay active">
                    <div className="modal">
                        <div className="modal-header">
                            <h3 className="modal-title">Agregar Actuador</h3>
                            <button className="modal-close" onClick={cerrarModal}>
                                ×
                            </button>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            crearActuador();
                        }}>
                            <div className="form-group">
                                <label>ID Bandeja</label>
                                <select
                                    className="form-control"
                                    value={formulario.bandeja}
                                    onChange={(e) => handleInputChange('bandeja', e.target.value)}
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
                                    onChange={(e) => handleInputChange('tipo', e.target.value)}
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
                                    onChange={(e) => handleInputChange('estado', e.target.value)}
                                    required
                                >
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </select>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Crear Actuador
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {actuadores.length === 0 && (
                <div className="empty-state">
                    <p>No hay actuadores registrados en el sistema.</p>
                </div>
            )}
        </div>
    );
};

export default Actuadores;
