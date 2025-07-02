import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const SidebarToggleButton = ({ collapsed, onToggle }) => {
  return (
    <div className="collapse-button">
      <Tooltip  placement="right">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          style={{
            fontSize: '1.2rem',
            width: '100%',
            height: 48,
            textAlign: 'left',
            paddingLeft: 16,
          }}
        />
      </Tooltip>
    </div>
  );
};

export default SidebarToggleButton;
