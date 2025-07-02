import { DashboardOutlined, UserOutlined, BarChartOutlined, PieChartOutlined, TeamOutlined, FileTextOutlined, ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Icons = {
    PieChartOutlined,
    TeamOutlined,
    FileTextOutlined,
    ShoppingCartOutlined,
    AppstoreOutlined,
};

function MenuComponents() {
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fakeMenuData = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: "PieChartOutlined",
            roles: [""],
        },
        {
            title: "Configuración",
            path: "/config",
            icon: "SettingOutlined",
            roles: [""],
        },

    useEffect(() => {
        setTimeout(() => {
            setMenuItems(fakeMenuData);
        }, 500);
    }, []);

    const renderMenu = () => {
        return menuItems.map((item) => {
            const IconComponent = Icons[item.icon];
            return {
                key: item.path,
                icon: IconComponent ? <IconComponent /> : null,
                label: item.title
            };
        });
    };

    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={renderMenu()}
            onClick={({ key }) => navigate(key)}
            style={{ height: '100%', borderRight: 0 }}

        />
    );
}

export default MenuComponents;