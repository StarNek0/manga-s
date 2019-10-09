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
      <Header style={{background: '#fff'}}>
        <Row>
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
      <Content style={{margin: '24px 16px 0'}}>
        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
          {props.children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        ©2019
      </Footer>

    </Layout>
  );
}

export default BasicLayout;
