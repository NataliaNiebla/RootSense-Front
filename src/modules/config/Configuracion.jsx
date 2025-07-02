import React, { useState } from 'react';
import '../../styles/ConfigStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta

const Configuracion = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState({ type: '', text: '', show: false });

    const handlePasswordChange = () => {
        // Validar campos vacíos
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage({
                type: 'error',
                text: 'Por favor complete todos los campos.',
                show: true
            });
            return;
        }

        // Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            setMessage({
                type: 'error',
                text: 'Las contraseñas nuevas no coinciden.',
                show: true
            });
            return;
        }

        // Validar longitud mínima
        if (newPassword.length < 6) {
            setMessage({
                type: 'error',
                text: 'La nueva contraseña debe tener al menos 6 caracteres.',
                show: true
            });
            return;
        }

        // Simulación de éxito
        setMessage({
            type: 'success',
            text: 'Contraseña actualizada correctamente.',
            show: true
        });

        // Limpiar formulario
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');

        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            setMessage({ type: '', text: '', show: false });
        }, 3000);
    };

    const handleLogout = () => {
        // Simulación de cierre de sesión
        alert('Cerrando sesión...');
        // En una aplicación real, aquí se haría la redirección al login
        // window.location.href = '/login';
    };

    return (
        <div className="config-container">
            <Header title="Configuración" />
            <h2 className="section-title">Configuración de Usuario</h2>

            {/* Mensaje de éxito/error */}
            {message.show && (
                <div className={`message ${message.type}`}>
                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {message.type === 'success' ? (
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4CAF50"/>
                        ) : (
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#F44336"/>
                        )}
                    </svg>
                    <span>{message.text}</span>
                </div>
            )}

            {/* Formulario de cambio de contraseña */}
            <section className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="currentPassword">Contraseña Actual</label>
                        <input
                            type="password"
                            className="form-control"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="newPassword">Nueva Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength="6"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Nueva Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            minLength="6"
                        />
                    </div>
                    
                    <div className="form-actions">
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </button>
                        <button
                            type="button"
                            className="btn-primary"
                            onClick={handlePasswordChange}
                        >
                            Cambiar Contraseña
                        </button>
                    </div>
                </form>
            </section>

            {/* Enlace para volver al dashboard */}
            <div className="back-link">
                <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>
                </svg>
                Volver al Dashboard
            </div>
        </div>
    );
};

export default Configuracion;