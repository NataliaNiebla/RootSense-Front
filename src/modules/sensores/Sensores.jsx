import React, { useState, useEffect } from 'react';
import '../../styles/SensoresStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta

// Datos de ejemplo - reemplazar con llamada a API
const sensoresEjemplo = [
    { id: 'S001', bandeja: 'B001', tipo: 'temperatura', estado: 'activo', ubicacion: 'Piso 1 - Bandeja 1' },
    { id: 'S002', bandeja: 'B001', tipo: 'humedad_relativa', estado: 'activo', ubicacion: 'Piso 1 - Bandeja 1' },
    { id: 'S003', bandeja: 'B001', tipo: 'iluminacion', estado: 'activo', ubicacion: 'Piso 1 - Bandeja 1' },
    { id: 'S004', bandeja: 'B002', tipo: 'humedad_suelo', estado: 'activo', ubicacion: 'Piso 1 - Bandeja 2' },
    { id: 'S005', bandeja: 'B002', tipo: 'iluminacion', estado: 'inactivo', ubicacion: 'Piso 1 - Bandeja 2' },
    { id: 'S006', bandeja: 'B003', tipo: 'temperatura', estado: 'activo', ubicacion: 'Piso 2 - Bandeja 1' },
    { id: 'S007', bandeja: 'B003', tipo: 'humedad_suelo', estado: 'inactivo', ubicacion: 'Piso 2 - Bandeja 1' },
    { id: 'S008', bandeja: 'B004', tipo: 'humedad_relativa', estado: 'activo', ubicacion: 'Piso 2 - Bandeja 2' },
    { id: 'S009', bandeja: 'B005', tipo: 'iluminacion', estado: 'activo', ubicacion: 'Piso 3 - Bandeja 1' },
    { id: 'S010', bandeja: 'B005', tipo: 'humedad_relativa', estado: 'inactivo', ubicacion: 'Piso 3 - Bandeja 2' }
];

const bandejasEjemplo = [
    { id: 'B001', nombre: 'Bandeja de Tomates', ubicacion: 'Sector A, Fila 2', semilla: 'Tomate Cherry' },
    { id: 'B002', nombre: 'Bandeja de Lechugas', ubicacion: 'Sector A, Fila 3', semilla: 'Lechuga Romana' },
    { id: 'B003', nombre: 'Bandeja de Pimientos', ubicacion: 'Sector B, Fila 1', semilla: 'Pimiento Verde' },
    { id: 'B004', nombre: 'Bandeja de Zanahorias', ubicacion: 'Sector B, Fila 2', semilla: 'Zanahoria Baby' },
    { id: 'B005', nombre: 'Bandeja de Fresas', ubicacion: 'Sector C, Fila 1', semilla: 'Fresa Silvestre' }
];

const Sensores = () => {
    const [sensores, setSensores] = useState([]);
    const [bandejas] = useState(bandejasEjemplo);
    const [modalActivo, setModalActivo] = useState(false);
    const [mensaje, setMensaje] = useState({ tipo: '', texto: '', visible: false });
    const [formulario, setFormulario] = useState({
        bandeja: '',
        tipo: '',
        ubicacion: '',
        estado: 'activo'
    });

    useEffect(() => {
        // Simular carga de datos
        setSensores(sensoresEjemplo);
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
            ubicacion: '',
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
        if (!formulario.ubicacion.trim()) {
            mostrarMensaje('error', 'La ubicación es requerida');
            return false;
        }
        return true;
    };

    const crearSensor = () => {
        if (!validarFormulario()) return;

        const nuevoId = 'S' + (sensores.length + 1).toString().padStart(3, '0');
        const nuevoSensor = {
            id: nuevoId,
            bandeja: formulario.bandeja,
            tipo: formulario.tipo,
            ubicacion: formulario.ubicacion,
            estado: formulario.estado
        };

        setSensores([...sensores, nuevoSensor]);
        mostrarMensaje('success', 'Sensor creado correctamente');
        cerrarModal();
    };

    const toggleEstadoSensor = (sensorId) => {
        const sensoresActualizados = sensores.map(sensor => 
            sensor.id === sensorId 
                ? { ...sensor, estado: sensor.estado === 'activo' ? 'inactivo' : 'activo' }
                : sensor
        );
        
        setSensores(sensoresActualizados);
        const sensor = sensores.find(s => s.id === sensorId);
        const nuevoEstado = sensor.estado === 'activo' ? 'inactivo' : 'activo';
        mostrarMensaje('success', `Sensor ${sensorId} ${nuevoEstado === 'activo' ? 'activado' : 'desactivado'} correctamente`);
    };

    const obtenerIconoSensor = (tipo) => {
        const iconos = {
            temperatura: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#4CAF50"/>
                </svg>
            ),
            humedad_relativa: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#4CAF50"/>
                </svg>
            ),
            humedad_suelo: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM7 13H17V11H7" fill="#4CAF50"/>
                </svg>
            ),
            iluminacion: (
                <svg className="type-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7C8.14 7 5 10.14 5 14C5 17.86 8.14 21 12 21C15.86 21 19 17.86 19 14C19 10.14 15.86 7 12 7ZM12 19C9.24 19 7 16.76 7 14C7 11.24 9.24 9 12 9C14.76 9 17 11.24 17 14C17 16.76 14.76 19 12 19ZM12 2C12.55 2 13 2.45 13 3V5C13 5.55 12.55 6 12 6C11.45 6 11 5.55 11 5V3C11 2.45 11.45 2 12 2ZM21 11H19C18.45 11 18 11.45 18 12C18 12.55 18.45 13 19 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11ZM5 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H5C5.55 13 6 12.55 6 12C6 11.45 5.55 11 5 11ZM17.24 5.34L18.65 3.93C19.04 3.54 19.04 2.91 18.65 2.52C18.26 2.13 17.63 2.13 17.24 2.52L15.83 3.93C15.44 4.32 15.44 4.95 15.83 5.34C16.22 5.73 16.85 5.73 17.24 5.34ZM6.76 5.34C7.15 5.73 7.78 5.73 8.17 5.34C8.56 4.95 8.56 4.32 8.17 3.93L6.76 2.52C6.37 2.13 5.74 2.13 5.35 2.52C4.96 2.91 4.96 3.54 5.35 3.93L6.76 5.34Z" fill="#4CAF50"/>
                </svg>
            )
        };
        return iconos[tipo] || null;
    };

    const obtenerNombreTipo = (tipo) => {
        const nombres = {
            temperatura: 'Temperatura',
            humedad_relativa: 'Humedad Relativa',
            humedad_suelo: 'Humedad del Suelo',
            iluminacion: 'Iluminación'
        };
        return nombres[tipo] || tipo;
    };

    const obtenerSensoresPorTipo = () => {
        const tipos = {};
        sensores.forEach(sensor => {
            if (!tipos[sensor.tipo]) {
                tipos[sensor.tipo] = [];
            }
            tipos[sensor.tipo].push(sensor);
        });
        return tipos;
    };

    const sensoresPorTipo = obtenerSensoresPorTipo();

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
                <Header title="Sensores"/>
                <h2 className="section-title">Lista de Sensores</h2>
                <button className="btn btn-primary" onClick={abrirModal}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
                    </svg>
                    Agregar Sensor
                </button>
            </div>

            {/* Secciones por tipo de sensor */}
            {Object.keys(sensoresPorTipo).map(tipo => (
                <section key={tipo} className="sensor-section">
                    <h3 className="sensor-type-title">
                        {obtenerIconoSensor(tipo)}
                        {obtenerNombreTipo(tipo)}
                        <span className="sensor-count">({sensoresPorTipo[tipo].length})</span>
                    </h3>

                    <div className="sensor-grid">
                        {sensoresPorTipo[tipo].map(sensor => (
                            <div key={sensor.id} className="sensor-card">
                                <div className="sensor-header">
                                    <h4 className="sensor-title">
                                        {obtenerIconoSensor(sensor.tipo)}
                                        {obtenerNombreTipo(sensor.tipo)}
                                    </h4>
                                    <span className="sensor-id">ID: {sensor.id}</span>
                                </div>
                                
                                <div className="sensor-content">
                                    <div className="sensor-item">
                                        <span className="sensor-label">Bandeja:</span>
                                        <span className="sensor-value">{sensor.ubicacion}</span>
                                    </div>
                                    <div className="sensor-item">
                                        <span className="sensor-label">Estado:</span>
                                        <span className="sensor-value">
                                            {sensor.estado.charAt(0).toUpperCase() + sensor.estado.slice(1)}
                                        </span>
                                    </div>
                                </div>
                                
                                <button 
                                    className={`btn btn-toggle ${sensor.estado === 'activo' ? 'active' : 'inactive'}`}
                                    onClick={() => toggleEstadoSensor(sensor.id)}
                                >
                                    {sensor.estado === 'activo' ? 'Desactivar' : 'Activar'}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Modal Agregar Sensor */}
            {modalActivo && (
                <div className="modal-overlay active">
                    <div className="modal">
                        <div className="modal-header">
                            <h3 className="modal-title">Agregar Sensor</h3>
                            <button className="modal-close" onClick={cerrarModal}>
                                ×
                            </button>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            crearSensor();
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
                                <label>Tipo de Sensor</label>
                                <select
                                    className="form-control"
                                    value={formulario.tipo}
                                    onChange={(e) => handleInputChange('tipo', e.target.value)}
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
                                    onChange={(e) => handleInputChange('ubicacion', e.target.value)}
                                    placeholder="Ej: Piso 1 - Bandeja 1"
                                    required
                                />
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
                                    Crear Sensor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {sensores.length === 0 && (
                <div className="empty-state">
                    <p>No hay sensores registrados en el sistema.</p>
                </div>
            )}
        </div>
    );
};

export default Sensores;
