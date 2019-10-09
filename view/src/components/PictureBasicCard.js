import {Component} from "react";
import {Card, Col, Row} from 'antd';

const {Meta} = Card;

export default class PictureBasicCard extends Component {
  render() {
    return (
      <Card
        hoverable
        style={{width: 240}}
        bordered={false}
        cover={
          <img
            alt="图片加载失败"
            src="https://img14.360buyimg.com/n1/jfs/t1/7119/16/15851/276237/5c762d55E773fc8bc/95ea80c28c035d15.png"
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
