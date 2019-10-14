import React, {Component} from "react";
import {Button, Col, Icon, Input, List, Modal, Progress, Row, Select} from "antd";
import MangaDescCard from "../components/MangaDescCard";

const selectBefore = (
  <Select defaultValue="全部" style={{minWidth: 90}}>
    <Select.Option value="全部">全部</Select.Option>
    <Select.Option value="腾讯动漫">腾讯动漫</Select.Option>
  </Select>
);
const listData = [];
for (let i = 0; i < 13; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `漫画 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      <div>
        <li>作者：</li>
        <li>标签：</li>
        <li>人气：</li>
        <li>评分：</li>
        <li>章节数：</li>
      </div>,
    content:
      <div>
        <p>描述</p>
        <p>描述</p>
        <p>描述</p>
        <p>描述</p>
      </div>,
  });
}
const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);
export default class Admin extends Component {
  state = {visible: false};
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
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
        <Button onClick={this.showModal}>获取</Button>
        <Modal
          destroyOnClose={true}
          title="获取新漫画"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
          // footer={
          //   <MangaReader/>
          // }
          centered={true}
          width="65%"
        >
          <Row type="flex" justify="center">
            <Col span={24}>
              <Input.Search
                addonBefore={selectBefore}
                placeholder="搜索"
                onSearch={value => console.log(value)}
              />
            </Col>
            <Col span={24}>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={listData}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
                renderItem={item => (
                  <List.Item>
                    <MangaDescCard>
                      <Row type="flex" justify="center">
                        <Col span={24}>
                          <Button>获取 default:<Icon type="plus-circle"/>success:<Icon type="check-circle"/>retry:<Icon
                            type="reload"/></Button>
                        </Col>
                        <Col span={24}>
                          <Progress
                            strokeColor={{
                              '0%': '#108ee9',
                              '100%': '#87d068',
                            }}
                            percent={66.9}
                          />
                        </Col>
                      </Row>

                    </MangaDescCard>
                  </List.Item>
                )}
              />
            </Col>
          </Row>

        </Modal>
      </div>
    )
  }
}
