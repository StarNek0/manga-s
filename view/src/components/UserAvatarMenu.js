import Link from 'umi/link';
import React, {Component} from "react";
import {Avatar, Button, Dropdown, Menu} from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      个人中心
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/admin">管理后台</Link>
    </Menu.Item>
    <Menu.Divider/>
    <Menu.Item key="2">
      设置
    </Menu.Item>
    <Menu.Item key="3">
      退出
    </Menu.Item>
  </Menu>
);
export default class UserAvatarMenu extends Component {
  render() {
    return (
      <Dropdown overlay={menu} placement="bottomCenter" trigger="click">
        <Button shape="circle" style={{padding: 0, border: "none"}}>
          <Avatar icon="user"/>
        </Button>
      </Dropdown>
    )
  }
}
