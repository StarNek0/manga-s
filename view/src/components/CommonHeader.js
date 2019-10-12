import {Col, Icon, Input, Layout, Menu, Row} from "antd";
import Link from 'umi/link';
import UserAvatarMenu from "./UserAvatarMenu";
import React, {Component} from "react";
import routes from '../routes'

export default class CommonHeader extends Component {
  state = {
    current: '',
  };
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    //判断pathname是否激活导航条选中样式
    const {pathname} = this.props;
    if (pathname === routes.pathHash.indexPage && this.state.current === '') {
      this.setState({current: routes.pathHash.indexPage})
    }
    if (pathname !== routes.pathHash.indexPage && this.state.current !== '') {
      this.setState({current: ''})
    }

    return (
      <Layout.Header style={{background: '#fff', padding: 0}}>
        <Row style={{width: "79%", textAlign: "left"}}>
          <Col span={3} align="left">
            logo
          </Col>
          <Col xs={4} sm={7} lg={9} align="left">
            <Menu
              theme="light"
              mode="horizontal"
              // defaultSelectedKeys={['1']}
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              style={{lineHeight: '64px'}}
            >
              <Menu.Item key={routes.pathHash.indexPage}>
                <Link to={routes.pathHash.indexPage}>
                  主页
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={10} sm={9} lg={8} align="right">
            <Input.Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col span={3} align="right">
            <Icon type="bell"/>
          </Col>
          <Col xs={4} sm={2} lg={1} align="right">
            <UserAvatarMenu/>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}
