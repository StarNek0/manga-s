import {Button, Col, Icon, Modal, Row, Tabs} from "antd";
import PictureBasicCard from "../components/PictureBasicCard";
import React, {Component} from "react";
import MangaReader from "../components/MangaReader";
import MangaDescCard from "../components/MangaDescCard";

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
            <MangaDescCard>
              <Row type="flex" justify="end" gutter={24}>
                <Col>
                  <Button type="link" style={{padding: 0}}><Icon type="download"/></Button>
                </Col>
                <Col>
                  <Button type="link" style={{padding: 0}}><Icon type="star"/></Button>
                  {/*<Button type="link"><Icon type="star" theme="filled"/></Button>*/}
                </Col>
                <Col>
                  <Button type="danger" icon="mobile" onClick={this.showModal}>阅读</Button>
                </Col>
              </Row>
            </MangaDescCard>
          </Col>
          <Col span={24} style={{marginTop: 10}}>
            <Tabs defaultActiveKey="1" tabPosition="top">
              <Tabs.TabPane tab="第1话" key="1">
                <div align="center">
                  <Row type="flex" justify="start" gutter={16}>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                  </Row>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="第2话" key="2">
                <div align="center">
                  <Row type="flex" justify="start" gutter={16}>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                    <Col xs={24} sm={12} lg={6} style={{paddingBottom: 16}}><PictureBasicCard/></Col>
                  </Row>
                </div>
              </Tabs.TabPane>
            </Tabs>
          </Col>

          <Modal
            title=""
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={
              <MangaReader/>
            }
            centered={true}
            width="65%"
          >
            阅读器
          </Modal>

        </Row>
      </div>
    );
  }

}
