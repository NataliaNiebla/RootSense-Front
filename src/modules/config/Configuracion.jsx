import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import '../../styles/config/ConfigStyles.css';
import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import AuthButton from '../login/AuthButton';

const Configuracion = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '', show: false });

    const onFinish = (values) => {
        setLoading(true);
        console.log('Form values:', values);

        // Simular validación y actualización
        setTimeout(() => {
            setLoading(false);
            setMessage({
                type: 'success',
                text: 'Contraseña actualizada correctamente.',
                show: true
            });

            // Limpiar formulario
            form.resetFields();

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                setMessage({ type: '', text: '', show: false });
            }, 3000);
        }, 2000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setMessage({
            type: 'error',
            text: 'Por favor complete todos los campos correctamente.',
            show: true
        });
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
            
            <ContentLayout>
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
            <div className="config-form-container">
                <Form
                    form={form}
                    name="password-change"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="config-form"
                    validateTrigger="onSubmit"
                    layout="vertical"
                >
                    <label htmlFor="currentPassword" className="custom-label">Contraseña Actual</label>
                    <Form.Item
                        name="currentPassword"
                        rules={[
                            { required: true, message: 'Favor de ingresar la contraseña actual' }
                        ]}
                    >
                        <Input.Password
                            id="currentPassword"
                            placeholder="Ingrese su contraseña actual"
                            autoComplete="current-password"
                            className="custom-input"
                        />
                    </Form.Item>

                    <label htmlFor="newPassword" className="custom-label">Nueva Contraseña</label>
                    <Form.Item
                        name="newPassword"
                        rules={[
                            { required: true, message: 'Favor de ingresar la nueva contraseña' },
                            { min: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                        ]}
                    >
                        <Input.Password
                            id="newPassword"
                            placeholder="Ingrese su nueva contraseña"
                            autoComplete="new-password"
                            className="custom-input"
                        />
                    </Form.Item>

                    <label htmlFor="confirmPassword" className="custom-label">Confirmar Nueva Contraseña</label>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        rules={[
                            { required: true, message: 'Favor de confirmar la nueva contraseña' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Las contraseñas no coinciden'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            id="confirmPassword"
                            placeholder="Confirme su nueva contraseña"
                            autoComplete="new-password"
                            className="custom-input"
                        />
                    </Form.Item>

                    <div className="form-actions">
                        <Button
                            type="default"
                            className="btn-secondary"
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </Button>
                        
                        <Form.Item className="config-button">
                            <AuthButton loading={loading} text="Cambiar Contraseña" />
                        </Form.Item>
                    </div>
                </Form>
            </div>
            </ContentLayout>
        </div>
    );
};

export default Configuracion;