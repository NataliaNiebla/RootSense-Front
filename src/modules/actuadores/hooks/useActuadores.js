import { useState, useEffect } from 'react';

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

export const useActuadores = () => {
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

    return {
        // Estados
        actuadores,
        bandejas,
        modalActivo,
        actuadorSeleccionado,
        detallesPanelActivo,
        bandejaSeleccionada,
        mensaje,
        formulario,
        
        // Funciones
        handleInputChange,
        abrirModal,
        cerrarModal,
        crearActuador,
        toggleEstadoActuador,
        mostrarDetallesBandeja,
        cerrarDetalles
    };
};
