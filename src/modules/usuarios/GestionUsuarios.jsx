import React, { useState, useEffect } from 'react';
import '../../styles/GestionUsuariosStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta

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

const GestionUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [modalActivo, setModalActivo] = useState(null); // 'crear', 'editar', 'eliminar'
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
            setMensaje({ ...mensaje, visible: false });
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

    // Si tienes un sidebar colapsable, puedes controlar su estado aquí. Por defecto lo ponemos en false.
    const [collapsed] = useState(false);

    return (
        <div>
            <Header title="Gestión de Usuarios" sidebarCollapsed={collapsed} />
            <h2 className="section-title">Lista de Usuarios</h2>

            {/* Mensaje de éxito/error */}
            {mensaje.visible && (
                <div className={`message ${mensaje.tipo}`}>
                    <span className="icon">
                        {mensaje.tipo === 'success' ? '✓' : '⚠'}
                    </span>
                    {mensaje.texto}
                </div>
            )}

            {/* Acciones */}
            <div className="actions-container">
                <button 
                    className="btn btn-primary"
                    onClick={() => abrirModal('crear')}
                >
                    <span className="icon">➕</span>
                    Agregar Usuario
                </button>
            </div>

            {/* Tabla de usuarios - Desktop */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Fecha Creación</th>
                            <th>Último Acceso</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <span className={`role-badge ${obtenerClaseRol(usuario.rol)}`}>
                                        {usuario.rol}
                                    </span>
                                </td>
                                <td>{formatearFecha(usuario.fechaCreacion)}</td>
                                <td>{formatearFecha(usuario.ultimoAcceso)}</td>
                                <td>
                                    <span className={`status-badge ${obtenerClaseEstado(usuario.estado)}`}>
                                        {usuario.estado}
                                    </span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <button 
                                            className="btn btn-secondary"
                                            onClick={() => abrirModal('editar', usuario)}
                                        >
                                            <span className="icon">✏️</span>
                                            Editar
                                        </button>
                                        <button 
                                            className={`btn ${usuario.estado === 'activo' ? 'btn-warning' : 'btn-primary'}`}
                                            onClick={() => toggleEstadoUsuario(usuario)}
                                        >
                                            <span className="icon">
                                                {usuario.estado === 'activo' ? '⏸' : '▶'}
                                            </span>
                                            {usuario.estado === 'activo' ? 'Desactivar' : 'Activar'}
                                        </button>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => abrirModal('eliminar', usuario)}
                                        >
                                            <span className="icon">🗑️</span>
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tarjetas para móviles */}
            <div className="user-cards">
                {usuarios.map(usuario => (
                    <div key={usuario.id} className="user-card">
                        <div className="user-card-header">
                            <h3 className="user-card-title">{usuario.nombre}</h3>
                            <span className="user-card-id">ID: {usuario.id}</span>
                        </div>
                        
                        <div className="user-card-content">
                            <div className="user-card-item">
                                <span className="user-card-label">Email:</span>
                                <span className="user-card-value">{usuario.email}</span>
                            </div>
                            <div className="user-card-item">
                                <span className="user-card-label">Rol:</span>
                                <span className={`role-badge ${obtenerClaseRol(usuario.rol)}`}>
                                    {usuario.rol}
                                </span>
                            </div>
                            <div className="user-card-item">
                                <span className="user-card-label">Estado:</span>
                                <span className={`status-badge ${obtenerClaseEstado(usuario.estado)}`}>
                                    {usuario.estado}
                                </span>
                            </div>
                            <div className="user-card-item">
                                <span className="user-card-label">Fecha Creación:</span>
                                <span className="user-card-value">{formatearFecha(usuario.fechaCreacion)}</span>
                            </div>
                            <div className="user-card-item">
                                <span className="user-card-label">Último Acceso:</span>
                                <span className="user-card-value">{formatearFecha(usuario.ultimoAcceso)}</span>
                            </div>
                        </div>
                        
                        <div className="user-card-actions">
                            <button 
                                className="btn btn-secondary"
                                onClick={() => abrirModal('editar', usuario)}
                            >
                                <span className="icon">✏️</span>
                                Editar
                            </button>
                            <button 
                                className={`btn ${usuario.estado === 'activo' ? 'btn-warning' : 'btn-primary'}`}
                                onClick={() => toggleEstadoUsuario(usuario)}
                            >
                                <span className="icon">
                                    {usuario.estado === 'activo' ? '⏸' : '▶'}
                                </span>
                                {usuario.estado === 'activo' ? 'Desactivar' : 'Activar'}
                            </button>
                            <button 
                                className="btn btn-danger"
                                onClick={() => abrirModal('eliminar', usuario)}
                            >
                                <span className="icon">🗑️</span>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal para crear/editar usuario */}
            {(modalActivo === 'crear' || modalActivo === 'editar') && (
                <div className="modal-overlay active">
                    <div className="modal">
                        <div className="modal-header">
                            <h3 className="modal-title">
                                {modalActivo === 'crear' ? 'Agregar Usuario' : 'Editar Usuario'}
                            </h3>
                            <button className="modal-close" onClick={cerrarModal}>
                                ✕
                            </button>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            modalActivo === 'crear' ? crearUsuario() : editarUsuario();
                        }}>
                            <div className="form-group">
                                <label>Nombre completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formulario.nombre}
                                    onChange={(e) => handleInputChange('nombre', e.target.value)}
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
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    placeholder="Ingrese el correo electrónico"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Rol</label>
                                <select
                                    className="form-control"
                                    value={formulario.rol}
                                    onChange={(e) => handleInputChange('rol', e.target.value)}
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
                                    onChange={(e) => handleInputChange('password', e.target.value)}
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
                                        onChange={(e) => handleInputChange('confirmarPassword', e.target.value)}
                                        placeholder="Confirme la contraseña"
                                        required
                                    />
                                </div>
                            )}

                            <div className="form-actions">
                                <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    {modalActivo === 'crear' ? 'Crear Usuario' : 'Guardar Cambios'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal para confirmar eliminación */}
            {modalActivo === 'eliminar' && usuarioSeleccionado && (
                <div className="modal-overlay active">
                    <div className="modal">
                        <div className="modal-header">
                            <h3 className="modal-title">Confirmar Eliminación</h3>
                            <button className="modal-close" onClick={cerrarModal}>
                                ✕
                            </button>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <p>¿Está seguro que desea eliminar al usuario <strong>{usuarioSeleccionado.nombre}</strong>?</p>
                            <p style={{ color: 'var(--color-error)', fontSize: '14px' }}>
                                Esta acción no se puede deshacer.
                            </p>
                        </div>

                        <div className="form-actions">
                            <button className="btn btn-secondary" onClick={cerrarModal}>
                                Cancelar
                            </button>
                            <button className="btn btn-danger" onClick={eliminarUsuario}>
                                Eliminar Usuario
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {usuarios.length === 0 && (
                <div className="empty-state">
                    <p>No hay usuarios registrados en el sistema.</p>
                </div>
            )}
        </div>
    );
};

export default GestionUsuarios;
