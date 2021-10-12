import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { FileAddOutlined, ProfileOutlined } from "@ant-design/icons";
import { WEB } from "constant/web";

interface MenuShape {
  name: string;
  id: string;
  link?: string;
  icon?: React.ReactElement;
}

const menu: Array<MenuShape> = [
  {
    name: "تیکت ها",
    id: WEB.root,
    link: WEB.root,
    icon: <ProfileOutlined />,
  },
  {
    name: "ایجاد تیکت جدید",
    id: WEB.newTicket,
    link: WEB.newTicket,
    icon: <FileAddOutlined />,
  },
];

const MenuPanel = () => {
  const location = useLocation();

  return (
    <Menu mode="inline" selectedKeys={[location.pathname]} theme="dark">
      {menu.map((menuItem) => (
        <Menu.Item key={menuItem.id} icon={menuItem.icon}>
          <Link to={{ pathname: menuItem.link }}>{menuItem.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuPanel;
