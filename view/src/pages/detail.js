import styles from './detail.css';
import {Button, Col, Icon, Modal, Row, Tabs, Tag} from "antd";
import PictureBasicCard from "../components/PictureBasicCard";
import React, {Component} from "react";
import MangaReader from "../components/MangaReader";

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
            <Row type="flex" justify="start" gutter={20}>
              <Col xs={24} sm={12} lg={8}>
                <img
                  width="100%"
                  height={380}
                  src="https://manhua.qpic.cn/vertical/0/14_17_07_371cb06b7af8862a858d18f376ddf51f_1536916069031.jpg/420"
                  alt="图片加载失败"
                />
              </Col>
              <Col xs={24} sm={12} lg={16} className={styles.right_content}>
                <Row className={styles.right_content}>
                  <Col span={24} className={styles.desc}>
                    <h1>斗破苍穹</h1>
                    <ul>
                      <li>作者: 任翔、知音漫客、天蚕土豆</li>
                      <li>人气: 147.3亿</li>
                      <li>评分: 8.8(15346人评分)</li>
                      <li>标签: <Tag>热血</Tag><Tag>魔幻</Tag><Tag>动作</Tag></li>
                    </ul>
                    <p>正所谓三十年河东三十年河西，天才少年因忽然失去了天生的灵力，被所有人嘲笑排挤，为了一雪前耻他亲手毁掉婚约，一心进修、打怪、升级！重登人生巅峰的他让人们知道莫欺少年穷真的很重要！</p>
                  </Col>
                  <Col span={24} className={styles.buttons}>
                    <Row type="flex" justify="end" gutter={24}>
                      <Col>
                        <Button type="link" style={{padding: 0}}><Icon type="download"/></Button>
                      </Col>
                      <Col>
                        <Button type="link" style={{padding: 0}}><Icon type="star"/></Button>
                      </Col>
                      <Col>
                        {/*<Button type="link"><Icon type="star" theme="filled"/></Button>*/}
                        <Button type="danger" icon="mobile" onClick={this.showModal}>阅读</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
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
            width="95%"
          >
            阅读器
          </Modal>

        </Row>
      </div>
    );
  }

}
