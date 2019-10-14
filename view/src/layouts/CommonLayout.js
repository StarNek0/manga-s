import {Layout} from "antd";
import React from "react";
import AdminLayout from "./AdminLayout";
import CommonHeader from "../components/CommonHeader";
// import styles from './index.css';
// import mp4 from '@/demo.mp4'

const {Content, Footer} = Layout;

function CommonLayout(props) {
  let child = <div>{props.children}</div>;
  if (props.location.pathname === '/admin') {
    child = <AdminLayout children={props.children}/>
  }
  return (
    <Layout className="layout">
      {/*<div className={styles.bg_video}>*/}
      {/*  <video className={styles.v1} autoPlay muted loop>*/}
      {/*    <source src={mp4}/>*/}
      {/*  </video>*/}
      {/*</div>*/}

      <div align="center">
        <CommonHeader pathname={props.location.pathname}/>
        <Content style={{margin: '16px 16px 0', width: "79%", textAlign: "left"}}>
          {/*<div style={{minHeight: 360, borderRadius: 3}}>*/}
          {child}
          {/*</div>*/}
        </Content>
      </div>

      <Footer style={{textAlign: 'center'}}>
        ©2019
      </Footer>

    </Layout>
  );
}

export default CommonLayout;
