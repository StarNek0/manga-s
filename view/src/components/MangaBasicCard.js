import {Component} from "react";
import {Card, Col, Row} from 'antd';

const {Meta} = Card;

export default class MangaBasicCard extends Component {
  render() {
    return (
      <Card
        hoverable
        style={{width: 240}}
        bordered={false}
        cover={
          <img
            alt="图片加载失败"
            src="https://img10.360buyimg.com/n1/jfs/t1/24283/15/10369/413888/5c8606d0Ea7557eda/3ac144fe938eb391.jpg"
          />
        }
      >
        <Meta
          title="Manga Name"
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
