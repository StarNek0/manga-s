import {Card, Icon, Layout, Menu} from "antd";
import React from "react";

const {SubMenu} = Menu;
const {Content, Sider} = Layout;


function AdminLayout(props) {
  return (
    <div>
      <Layout>
        <Sider width={200} style={{background: '#fff', borderRadius: 20}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRadius: 2}}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user"/>
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop"/>
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification"/>
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{minHeight: 280}}>
          <Card style={{height: "100%", border: 0, marginLeft: 10}}>
            {props.children}
          </Card>
        </Content>
      </Layout>
    </div>
  );
}

export default AdminLayout;
