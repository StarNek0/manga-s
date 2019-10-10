import {Component} from "react";
import {Card, Col, Row} from 'antd';

const {Meta} = Card;

export default class PictureBasicCard extends Component {
  render() {
    return (
      <Card
        hoverable
        bordered={false}
        cover={
          <img
            alt="图片加载失败"
            src="https://manhua.qpic.cn/manhua_detail/0/16_21_26_794d3a9f89e807498c728895b6da54ec_2336.jpg/800"
          />
        }
      >
        <Meta
          description={
            <p align="center">01</p>
          }
        />
      </Card>
    )
  }
}
