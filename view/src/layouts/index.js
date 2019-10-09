import Link from 'umi/link';
import {Avatar, Col, Icon, Input, Layout, Menu, Row} from "antd";
// import styles from './index.css';
// import mp4 from '@/demo.mp4'

const {Header, Content, Footer} = Layout;

function BasicLayout(props) {
  return (
    <Layout className="layout">
      {/*<div className={styles.bg_video}>*/}
      {/*  <video className={styles.v1} autoPlay muted loop>*/}
      {/*    <source src={mp4}/>*/}
      {/*  </video>*/}
      {/*</div>*/}

      <div align="center">
        <Header style={{background: '#fff'}}>
          <Row style={{width: "79%", textAlign: "left"}}>
            <Col span={2} align="left">
              logo
            </Col>
            <Col span={12} align="left">
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
              >
                <Link to="/">
                  <Menu.Item key="1">主页</Menu.Item>
                </Link>
              </Menu>
            </Col>
            <Col span={6} align="right">
              <Input.Search
                placeholder="搜索"
                onSearch={value => console.log(value)}
                style={{width: 200}}
              /></Col>
            <Col span={2} align="right">
              <Avatar icon="user"/>
              <Icon type="caret-down"/>
            </Col>
            <Col span={1} align="right">
              <Icon type="bell"/>
            </Col>
            <Col span={1} align="right">
              <Icon type="logout"/>
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '16px 16px 0', width: "79%", textAlign: "left"}}>
          <div style={{padding: 16, background: '#fff', minHeight: 360, borderRadius: 3}}>
            {props.children}
          </div>
        </Content>
      </div>

      <Footer style={{textAlign: 'center'}}>
        ©2019
      </Footer>

    </Layout>
  );
}

export default BasicLayout;
