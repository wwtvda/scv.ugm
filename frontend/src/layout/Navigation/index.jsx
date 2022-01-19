import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HeatMapOutlined,
  UsergroupAddOutlined,
  BuildOutlined,
  ExperimentOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <img src="https://res.cloudinary.com/dwt2lmb6s/image/upload/v1642573756/satgas_formal_js2wtb.svg"></img>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Dashboard
          </Menu.Item>
          <Menu.Item key="24" icon={<HeatMapOutlined />}>
            <Link to="/jogjamap">Peta Covid Jogja</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
            <Link to="/patient">Pasien Suspek Covid-19</Link>
          </Menu.Item>
          <Menu.Item key="21" icon={<BuildOutlined />}>
            <Link to="/tracing" />
            Tracing Kontak Erat
          </Menu.Item>
          <Menu.Item key="3" icon={<ExperimentOutlined />}>
            <Link to="/vacc" />
            Vaksinasi
          </Menu.Item>
          <Menu.Item key="31" icon={<TeamOutlined />}>
            <Link to="/usermgr" />
            Manajemen User
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;