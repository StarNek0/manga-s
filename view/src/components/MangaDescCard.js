import React, {Component} from "react";
import {Card, Col, Row, Tag} from "antd";
import styles from "./MangaDescCard.css";

export default class MangaDescCard extends Component {
  render() {
    return (
      <Card style={{borderRadius: 3, border: 0}} bodyStyle={{padding: 0}}>
        <Row type="flex" justify="start" gutter={20}>
          <Col xs={24} sm={12} lg={8}>
            <Card style={{border: 0}} bodyStyle={{padding: 0}}>

              <img
                width="100%"
                src="https://manhua.qpic.cn/vertical/0/14_17_07_371cb06b7af8862a858d18f376ddf51f_1536916069031.jpg/420"
                alt="图片加载失败"
              />
            </Card>
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
                {this.props.children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
}
