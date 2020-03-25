# manga-s


## 开发进度
- 前端
18% （布局+响应式+首页+详情页+阅读器+后台页添加漫画 的静态页面）[预览](http://nicopoi.com:8000/)(捂脸 服务器带宽太小了

- Web服务
2%（仅仅搭了个路由骨架，写了个demo）

- 爬虫服务
10%（写了某一个网站的单机版爬虫）

- 原型
[持续更新中](https://free.modao.cc/app/t82fsps5qak0zbvvfqi6vgq3kqmr)

## 技术栈（WIP）
- 前端

  基于`React`
  
  UI框架：`antd`
  
  路由框架：`umi`

- 服务端

  语言随意，可能做成分布式的，拆成以下几个模块
  - Web服务（接口
  - 爬虫服务（用于横向扩容
  - 文件存储服务（图片，可用于`http`资源和下载功能
  - 分布式节点管理（还没想好

  通信
  - 前端与Web服务：`http`或者 `json rpc` 吧
  - Web服务与爬虫：`RabbitMQ`
  - Web服务和文件存储（`grpc`吧

  部署
  - `docker`、可能用`k8s`来编排
  
  测试与风格检查
  - `go test`
  - `golint`

  自动化
  - GitHub CI/CD

