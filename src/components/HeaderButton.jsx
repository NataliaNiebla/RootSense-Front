import React from 'react';
import { Button } from 'antd';

const HeaderButton = () => (
    <Button className="logout-btn">
        <a href="/login"> 
            Cerrar Sesión
        </a>
    </Button>
);

export default HeaderButton;

// Uso:
// <HeaderButton />