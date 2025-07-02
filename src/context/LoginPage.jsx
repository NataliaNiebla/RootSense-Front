import React from 'react';
import LoginForm from '../components/Login.jsx';

export default function LoginPage({ onLoginSuccess }) {
    const handleLogin = async ({ email, password }) => {
    const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Error en login');
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Aquí avisamos al componente padre que el login fue exitoso
    onLoginSuccess();

    alert(`Bienvenido, ${data.user.name}!`);
    };

    return <LoginForm onLogin={handleLogin} />;
}

