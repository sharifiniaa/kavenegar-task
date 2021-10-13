import React, { useState } from "react";
import { Layout, Menu } from "antd";
import MenuPanel from "components/MenuPanel";

import Styles from "./PublicLayout.module.scss";

const { Header, Content, Sider } = Layout;

const PublicLayout: React.FC = ({ children }): React.ReactElement => {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapsed = () => {
    setCollapse(!collapsed);
  };

  return (
    <Layout className={Styles.mainLayout} style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        reverseArrow={true}
        onCollapse={handleCollapsed}
      >
        <div className={Styles.logo} />
        <MenuPanel />
      </Sider>
      <Layout>
        <Header className={Styles.header}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className={Styles.content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PublicLayout;
