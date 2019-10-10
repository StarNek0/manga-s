import {Component} from "react";
import {Card, Col, Row} from 'antd';

const {Meta} = Card;

export default class MangaBasicCard extends Component {
  render() {
    return (
      <Card
        hoverable
        bordered={false}
        cover={
          <img
            alt="图片加载失败"
            src="https://manhua.qpic.cn/vertical/0/14_17_07_371cb06b7af8862a858d18f376ddf51f_1536916069031.jpg/420"
          />
        }
      >
        <Meta
          title="漫画名"
          description={
            <Row>
              <Col span={6}>分类</Col>
              <Col span={6}>0</Col>
              <Col span={6}>页数</Col>
              <Col span={6}>0</Col>
            </Row>
          }
        />
      </Card>
    )
  }
}
