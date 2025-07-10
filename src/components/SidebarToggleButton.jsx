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
            color: 'var(--color-text)',
            transition: 'opacity 0.3s, transform 0.2s',
          }}
        />
      </Tooltip>
    </div>
  );
};

export default SidebarToggleButton;
