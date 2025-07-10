import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthButton from './AuthButton';
import AuthHeader from './AuthHeader';

import '../../styles/login/LoginFormStyles.css'; 

const LoginForm = () => {
    const [loading, setLoading] = React.useState(false);
    const [generalError, setGeneralError] = React.useState('');
    const navigate = useNavigate();
    
    const onFinish = (values) => {
        console.log('Form values:', values);
        setLoading(true);
        setGeneralError('');

        // Simular Login
        setTimeout(() => {
            setLoading(false);
            const isValid = values.email === 'admin@example.com' && values.password === 'admin123';
            if (isValid) {
                localStorage.setItem('token', 'fake-jwt-token'); // Simular guardado de token
                navigate('/dashboard'); // Redirigir al dashboard o página principal
            }else {
                setGeneralError('Correo electrónico o contraseña incorrectos');
                
            }
        }, 2000); 
    };

    return (
        <div className="login-container">
            <AuthHeader title="Iniciar sesión" subtitle="Sistema de Monitoreo de Invernadero" />
            <Form 
                name="nest-messages"
                onFinish={onFinish}
                className="login-form"
                validateTrigger="onSubmit"
            >
                <label htmlFor="email" className="custom-label">Correo electrónico</label>
                <Form.Item 
                    name="email" 
                    rules={[{ required: true, message: 'Favor de ingresar el correo electrónico' }]}>

                    <Input  
                        id="email" 
                        placeholder="ejemplo@empresa.com" 
                        autoComplete="email"
                        className="custom-input" />
                </Form.Item>

                <label htmlFor="password" className="custom-label">Contraseña</label>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Favor de ingresar la contraseña' }]}
                    colon={false} 
                    validateTrigger="onSubmit"
                    className="password-input" >
                    
                    <Input.Password 
                        id="password" 
                        placeholder="Ingrese su contraseña" 
                        autoComplete="current-password"
                        className="ant-input-password" />
                </Form.Item>
                

                {generalError && (
                    <Form.Item>
                        <div className="error-message">{generalError}</div>
                    </Form.Item>

                )}

                <Form.Item className="login-button">
                    <AuthButton loading={loading} text="Iniciar sesión" />
                </Form.Item>

                <Form.Item className='link-Auth'>
                    <Link to="/forgot-password">Olvidé mi contraseña</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;