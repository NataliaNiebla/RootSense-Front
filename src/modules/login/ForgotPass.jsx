import React from 'react';
import { Form, Input } from 'antd';
import AuthButton from './AuthButton';
import AuthHeader from './AuthHeader';
import { Link } from 'react-router-dom';

import '../../styles/login/LoginFormStyles.css'; 

const ForgotPass = () => {
    const onFinish = (values) => {
        const email = values.email;
        console.log('Email para recuperar:', email);
        alert('Link para restablecer contraseña enviado si el email existe.');
    };

    return (
        <div className="login-container">
            <AuthHeader title="Recupera tu contraseña" subtitle="Te enviaremos un correo electrónico con un enlace para restablecer la contraseña" />
                <Form 
                    name="nest-messages"
                    onFinish={onFinish}
                    className="login-form"
                    validateTrigger="onSubmit"
                >
                    <label htmlFor="email" className="custom-label">Correo electrónico</label>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Favor de ingresar el correo electrónico' }]}
            >
                <Input  
                    id="email" 
                    placeholder="ejemplo@empresa.com" 
                    autoComplete="email"
                    className="custom-input" 
                />
            </Form.Item>
            <Form.Item className="login-button">
                <AuthButton text="Enviar link" />
            </Form.Item> 

            <Form.Item className='link-Auth'>
                <Link to="/login">Volver a inicio de sesión</Link>
            </Form.Item>
            </Form>
        </div>
    );
}

export default ForgotPass;
