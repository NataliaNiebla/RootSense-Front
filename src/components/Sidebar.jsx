import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate, Outlet, useLocation} from 'react-router-dom';
import logo from '../assets/imgs/RS_logo.png'; 
import icon from '../assets/imgs/iconpng.png'; // adjust the path if necessary
import '../styles/Sidebar.css'; 
import SidebarToggleButton from '../components/SidebarToggleButton';

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    const location = useLocation(); // permite obtener la ubicación actual

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider className="sidebar" width={260} trigger={null} collapsible collapsed={collapsed}>
                <div
                    className="sidebar-toggle-container"
                        style={{
                        position: 'absolute',
                        top: 16,
                        left: collapsed ? 80 : 260, // cambia según estado
                        zIndex: 1001, // por encima del sidebar
                        transition: 'left 0.3s ease',
                        }}
                    >
                    <SidebarToggleButton collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
            </div>

                 <div className="sidebar-header">
                    {collapsed ? (
                        <img src={icon} alt="Icon" className="icon" />
                    ) : (
                        <img src={logo} alt="Logo" className="logo" />
                    )}
                 </div>
            <Menu
                className="sidebar-menu"
                selectedKeys={[location.pathname]}
                mode="inline"
                defaultSelectedKeys={['/dashboard']}
                onClick={({ key }) => {
                    navigate(key);
                }}
                items={[
                { key: '/dashboard', icon: <UserOutlined />, label: 'Dashboard'},
                { key: '/bandejas', icon: <VideoCameraOutlined />, label: 'Bandejas'},
                { key: '/reportes', icon: <UploadOutlined />, label: 'Reportes Semanales'},
                { key: '/bitacora', icon: <UserOutlined />, label: 'Bitácora'},
                { key: '/usuarios', icon: <VideoCameraOutlined />, label: 'Usuarios'},
                { key: '/actuadores', icon: <UploadOutlined />, label: 'Actuadores'},
                { key: '/sensores', icon: <UserOutlined />, label: 'Sensores'},
                { key: '/configuracion', icon: <VideoCameraOutlined />, label: 'Configuración'},
            ]}
            />
            </Sider>

            <Layout>
                <Content style={{ 
                    padding: '24px',
                    background: colorBgContainer,
                    minHeight: '100vh',
                    overflow: 'auto'
                }}>
                    <Outlet /> 
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;