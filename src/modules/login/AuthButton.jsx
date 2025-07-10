import React from 'react';
import { Button } from 'antd';
import '../../styles/login/LoginFormStyles.css'; 

const AuthButton = ({ loading, text = 'Enviar', className = '' }) => {
    return (
        <Button
        className={`btn-login ${className}`}
        htmlType="submit"
        block
        loading={loading}
        >
        {text}
        </Button>
    );
};

export default AuthButton;