// import styles from './detail.css';
import {Button, Card, Col, Row, Tag, Icon, Tabs, Modal} from "antd";
import PictureBasicCard from "@/components/PictureBasicCard";
import React, {Component} from "react";

export default class Detail extends Component {
  state = {visible: false};
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={24}>
            <Card bordered={false}>
              <Row type="flex" justify="start" gutter={20}>
                <Col xs={24} sm={12} lg={8}>
                  <img
                    width="100%"
                    src="https://img10.360buyimg.com/n1/jfs/t1/24283/15/10369/413888/5c8606d0Ea7557eda/3ac144fe938eb391.jpg"
                    alt="图片加载失败"
                  />
                </Col>
                <Col xs={24} sm={12} lg={16}>
                  <h1>名称</h1>
                  <ul>
                    <li>作者: null</li>
                    <li>人气: 0</li>
                    <li>分类: null</li>
                    <li>标签: <Tag>null</Tag><Tag>null</Tag></li>
                  </ul>
                  <p>...(简介)</p>
                  <p>...(简介)</p>
                  <p>...(简介)</p>

                  <Row>
                    <Col align="right">
                      <Button type="danger" icon="mobile" onClick={this.showModal}>阅读</Button>
                      <span style={{paddingRight: 5}}/>
                      <Button type="primary" icon="download">下载</Button>
                      {/*<span style={{paddingRight: 10}}/>*/}
                      <Button type="link"><Icon type="star"/></Button>
                      {/*<Button type="link"><Icon type="star" theme="filled"/></Button>*/}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card bordered={false}>
              <Tabs defaultActiveKey="1" tabPosition="top">
                <Tabs.TabPane tab="第1话" key="1">
                  <Row type="flex" justify="start">
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                  </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="第2话" key="2">
                  <Row type="flex" justify="start">
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6}><PictureBasicCard/></Col>
                  </Row>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>


          <Modal
            title=""
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={
              <div align="left">
                <Tabs defaultActiveKey="1" tabPosition="top">
                  <Tabs.TabPane tab="第1话" key="1">
                    <img
                      width="100%"
                      src="https://img10.360buyimg.com/n1/jfs/t1/24283/15/10369/413888/5c8606d0Ea7557eda/3ac144fe938eb391.jpg"
                      alt="图片加载失败"
                    />
                    <img
                      width="100%"
                      src="https://img10.360buyimg.com/n1/jfs/t1/24283/15/10369/413888/5c8606d0Ea7557eda/3ac144fe938eb391.jpg"
                      alt="图片加载失败"
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="第2话" key="2">
                  </Tabs.TabPane>
                </Tabs>
              </div>
            }
            width="95%"
          >
            漫画阅读
          </Modal>

        </Row>
      </div>
    );
  }

}
