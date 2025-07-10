import React from 'react';
import { UserOutlined, BarChartOutlined, LayoutOutlined, SettingOutlined, ThunderboltOutlined, RobotOutlined, PlusSquareOutlined, CalendarOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate, Outlet, useLocation} from 'react-router-dom';
import logo from '../assets/imgs/RS_logo.png'; 
import icon from '../assets/imgs/iconpng.png'; // adjust the path if necessary
import '../styles/components/Sidebar.css'; 
import SidebarToggleButton from '../components/SidebarToggleButton';
import { useSidebar } from '../hooks/useSidebar';

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
    const { collapsed, toggleSidebar } = useSidebar();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    const location = useLocation(); // permite obtener la ubicación actual

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider className="sidebar" width={240} trigger={null} collapsible collapsed={collapsed}>
                <div className={`sidebar-toggle-container ${collapsed ? 'collapsed' : 'expanded'}`}>
                    <SidebarToggleButton collapsed={collapsed} onToggle={toggleSidebar} />
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
                { key: '/dashboard', icon: <LayoutOutlined />, label: 'Dashboard'},
                { key: '/bandejas', icon: <PlusSquareOutlined />, label: 'Bandejas'},
                { key: '/reportes', icon: <BarChartOutlined />, label: 'Reportes Semanales'},
                { key: '/bitacora', icon: <CalendarOutlined />, label: 'Bitácora Historica'},
                { key: '/usuarios', icon: <UserOutlined />, label: 'Gestión de Usuarios'},
                { key: '/actuadores', icon: <RobotOutlined />, label: 'Actuadores'},
                { key: '/sensores', icon: <ThunderboltOutlined />, label: 'Sensores'},
                { key: '/configuracion', icon: <SettingOutlined />, label: 'Configuración'},
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