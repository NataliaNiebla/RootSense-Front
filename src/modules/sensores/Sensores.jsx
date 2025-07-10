import React, { useState, useEffect } from 'react';
import '../../styles/sensores/Sensores.css';
import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import ButtonAdd from '../../components/ButtonAdd';
import SensorSection from './components/SensorSection';
import SensorModal from './components/SensorModal';
import MessageAlert from './components/MessageAlert';
import { obtenerIconoSensor, obtenerNombreTipo } from './components/SensorIcons';

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
            <Header title="Sensores"/>
            
            <ContentLayout>
                <MessageAlert mensaje={mensaje} />

                <div className="actions-container">
                    <h2 className="section-title">Lista de Sensores</h2>
                    <ButtonAdd onClick={abrirModal} title="Agregar Sensor" />
                </div>

                {/* Secciones por tipo de sensor */}
                {Object.keys(sensoresPorTipo).map(tipo => (
                    <SensorSection
                        key={tipo}
                        tipo={tipo}
                        sensores={sensoresPorTipo[tipo]}
                        obtenerIconoSensor={obtenerIconoSensor}
                        obtenerNombreTipo={obtenerNombreTipo}
                        onToggleEstado={toggleEstadoSensor}
                    />
                ))}

                {/* Modal Agregar Sensor */}
                <SensorModal
                    isActive={modalActivo}
                    onClose={cerrarModal}
                    onSubmit={crearSensor}
                    formulario={formulario}
                    onInputChange={handleInputChange}
                    bandejas={bandejas}
                />

                {sensores.length === 0 && (
                    <div className="empty-state">
                        <p>No hay sensores registrados en el sistema.</p>
                    </div>
                )}
            </ContentLayout>
        </div>
    );
};

export default Sensores;
