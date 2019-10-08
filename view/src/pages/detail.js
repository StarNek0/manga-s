// import styles from './detail.css';
import {Button, Card, Col, Row, Tag, Icon} from "antd";

export default function () {
  return (
    <div>
      <Row type="flex" justify="center">
        <Card style={{width: "80%", marginBottom: 20}}>
          <Row type="flex" justify="start" gutter={20}>
            <Col span={8}>
              <img
                width="100%"
                src="https://img10.360buyimg.com/n1/jfs/t1/24283/15/10369/413888/5c8606d0Ea7557eda/3ac144fe938eb391.jpg"
                alt="图片加载失败"
              />
            </Col>
            <Col span={16}>
              <h1>名称</h1>
              <ul>
                <li>作者: null</li>
                <li>人气: 0</li>
                <li>分类: null</li>
                <li>标签: <Tag>null</Tag><Tag>null</Tag></li>
              </ul>

              <Row>
                <Col align="right">
                  <Button type="danger">开始阅读</Button>
                  <span style={{paddingRight: 10}}/>
                  <Button type="primary" icon="download">下载</Button>
                  <span style={{paddingRight: 10}}/>
                  <Button type="link"><Icon type="star"/></Button>
                  <Button type="link"><Icon type="star" theme="filled"/></Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{width: "80%"}} title="预览">
        </Card>
      </Row>
    </div>
  );
}
