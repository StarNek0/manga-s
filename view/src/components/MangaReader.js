import React, {Component} from "react";
import {Col, InputNumber, Row, Slider, Tabs} from "antd";

export default class MangaReader extends Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const {inputValue} = this.state;
    return (
      <div align="left">
        <Tabs defaultActiveKey="1" tabPosition="top">
          <Tabs.TabPane tab="第1话" key="1">
            <img
              width="100%"
              src="https://manhua.qpic.cn/manhua_detail/0/16_21_26_794d3a9f89e807498c728895b6da54ec_2336.jpg/800"
              alt="图片加载失败"
            />
            <Row type="flex" justify="center">
              <Col span={12}>
                <Slider
                  min={1}
                  max={20}
                  onChange={this.onChange}
                  value={typeof inputValue === 'number' ? inputValue : 0}
                />
              </Col>
              <Col span={1}/>
              <Col>
                <InputNumber
                  min={1}
                  max={20}
                  // style={{marginLeft: 16}}
                  value={inputValue}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="第2话" key="2">
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}
