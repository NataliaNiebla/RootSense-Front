import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../styles/components/ContentLayoutStyles.css';


const ButtonAdd = ({ onClick, title = '' }) => (
     <Button 
        className="btn-add"
        onClick={onClick}
        icon={<PlusOutlined />}
       >
          {title}
        </Button>
);

export default ButtonAdd;