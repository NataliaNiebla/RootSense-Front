// Hook personalizado para manejar la lógica de usuarios
import { useState, useEffect } from 'react';

// Datos de ejemplo - reemplazar con llamada a API
const usuariosEjemplo = [
    {
        id: 1,
        nombre: 'Juan Pérez',
        email: 'juan.perez@example.com',
        rol: 'administrador',
        fechaCreacion: '2024-01-15',
        ultimoAcceso: '2025-01-02',
        estado: 'activo'
    },
    {
        id: 2,
        nombre: 'María García',
        email: 'maria.garcia@example.com',
        rol: 'operador',
        fechaCreacion: '2024-02-20',
        ultimoAcceso: '2025-01-01',
        estado: 'activo'
    },
    {
        id: 3,
        nombre: 'Carlos López',
        email: 'carlos.lopez@example.com',
        rol: 'supervisor',
        fechaCreacion: '2024-03-10',
        ultimoAcceso: '2024-12-28',
        estado: 'inactivo'
    },
    {
        id: 4,
        nombre: 'Ana Martínez',
        email: 'ana.martinez@example.com',
        rol: 'operador',
        fechaCreacion: '2024-04-05',
        ultimoAcceso: '2024-12-30',
        estado: 'activo'
    }
];

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [modalActivo, setModalActivo] = useState(null);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [mensaje, setMensaje] = useState({ tipo: '', texto: '', visible: false });
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        rol: 'operador',
        password: '',
        confirmarPassword: ''
    });

    useEffect(() => {
        // Simular carga de datos
        setUsuarios(usuariosEjemplo);
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
            nombre: '',
            email: '',
            rol: 'operador',
            password: '',
            confirmarPassword: ''
        });
    };

    const abrirModal = (tipo, usuario = null) => {
        setModalActivo(tipo);
        setUsuarioSeleccionado(usuario);
        
        if (tipo === 'editar' && usuario) {
            setFormulario({
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
                password: '',
                confirmarPassword: ''
            });
        } else if (tipo === 'crear') {
            limpiarFormulario();
        }
    };

    const cerrarModal = () => {
        setModalActivo(null);
        setUsuarioSeleccionado(null);
        limpiarFormulario();
    };

    const validarFormulario = () => {
        if (!formulario.nombre.trim()) {
            mostrarMensaje('error', 'El nombre es requerido');
            return false;
        }
        if (!formulario.email.trim()) {
            mostrarMensaje('error', 'El email es requerido');
            return false;
        }
        if (!formulario.email.includes('@')) {
            mostrarMensaje('error', 'El email no es válido');
            return false;
        }
        if (modalActivo === 'crear' && !formulario.password) {
            mostrarMensaje('error', 'La contraseña es requerida');
            return false;
        }
        if (formulario.password && formulario.password !== formulario.confirmarPassword) {
            mostrarMensaje('error', 'Las contraseñas no coinciden');
            return false;
        }
        return true;
    };

    const crearUsuario = () => {
        if (!validarFormulario()) return;

        const nuevoUsuario = {
            id: usuarios.length + 1,
            nombre: formulario.nombre,
            email: formulario.email,
            rol: formulario.rol,
            fechaCreacion: new Date().toISOString().split('T')[0],
            ultimoAcceso: '-',
            estado: 'activo'
        };

        setUsuarios([...usuarios, nuevoUsuario]);
        mostrarMensaje('success', 'Usuario creado exitosamente');
        cerrarModal();
    };

    const editarUsuario = () => {
        if (!validarFormulario()) return;

        const usuariosActualizados = usuarios.map(user => 
            user.id === usuarioSeleccionado.id 
                ? { ...user, nombre: formulario.nombre, email: formulario.email, rol: formulario.rol }
                : user
        );

        setUsuarios(usuariosActualizados);
        mostrarMensaje('success', 'Usuario actualizado exitosamente');
        cerrarModal();
    };

    const eliminarUsuario = () => {
        const usuariosFiltrados = usuarios.filter(user => user.id !== usuarioSeleccionado.id);
        setUsuarios(usuariosFiltrados);
        mostrarMensaje('success', 'Usuario eliminado exitosamente');
        cerrarModal();
    };

    const toggleEstadoUsuario = (usuario) => {
        const usuariosActualizados = usuarios.map(user => 
            user.id === usuario.id 
                ? { ...user, estado: user.estado === 'activo' ? 'inactivo' : 'activo' }
                : user
        );
        setUsuarios(usuariosActualizados);
        const nuevoEstado = usuario.estado === 'activo' ? 'inactivo' : 'activo';
        mostrarMensaje('success', `Usuario ${nuevoEstado === 'activo' ? 'activado' : 'desactivado'} exitosamente`);
    };

    const formatearFecha = (fecha) => {
        if (fecha === '-') return '-';
        return new Date(fecha).toLocaleDateString('es-ES');
    };

    const obtenerClaseRol = (rol) => {
        const clases = {
            'administrador': 'role-admin',
            'supervisor': 'role-supervisor',
            'operador': 'role-operator'
        };
        return clases[rol] || 'role-operator';
    };

    const obtenerClaseEstado = (estado) => {
        return estado === 'activo' ? 'status-active' : 'status-inactive';
    };

    return {
        usuarios,
        modalActivo,
        usuarioSeleccionado,
        mensaje,
        formulario,
        abrirModal,
        cerrarModal,
        crearUsuario,
        editarUsuario,
        eliminarUsuario,
        toggleEstadoUsuario,
        handleInputChange,
        formatearFecha,
        obtenerClaseRol,
        obtenerClaseEstado
    };
};
