import React from 'react';
import { Layout as AntLayout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { useSidebar } from '../hooks/useSidebar';
import Sidebar from './Sidebar';
import Header from './Header';

const { Content } = AntLayout;

const MainLayout = ({ children, showHeader = true, headerTitle = '' }) => {
  const { collapsed } = useSidebar();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <AntLayout>
        {showHeader && (
          <Header title={headerTitle} />
        )}
        <Content
          style={{
            margin: showHeader ? '88px 24px 24px 24px' : '24px',
            marginLeft: collapsed ? '104px' : '284px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            transition: 'margin-left 0.3s ease',
          }}
        >
          {children || <Outlet />}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default MainLayout;
