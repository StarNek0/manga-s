import React, {Component} from "react";
import {Avatar, Button, Col, Icon, Input, List, Modal, Row, Select} from "antd";

const selectBefore = (
  <Select defaultValue="全部" style={{minWidth: 90}}>
    <Select.Option value="全部">全部</Select.Option>
    <Select.Option value="腾讯动漫">腾讯动漫</Select.Option>
  </Select>
);
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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
        <Button onClick={this.showModal}>添加</Button>
        <Modal
          destroyOnClose={true}
          title="添加新漫画"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
          // footer={
          //   <MangaReader/>
          // }
          centered={true}
          width="50%"
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
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText type="star-o" text="156" key="list-vertical-star-o"/>,
                      <IconText type="like-o" text="156" key="list-vertical-like-o"/>,
                      <IconText type="message" text="2" key="list-vertical-message"/>,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://manhua.qpic.cn/vertical/0/14_17_07_371cb06b7af8862a858d18f376ddf51f_1536916069031.jpg/420"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar}/>}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
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
