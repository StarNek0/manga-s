// ref: https://umijs.org/config/
import routes from './src/routes'

export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'view',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: {
    // 'primary-color': '#0a72a5',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/CommonLayout.js',
      routes: [
        {
          path: routes.pathHash.indexPage,
          component: 'index.js',
          title: '首页 - MangaS'
        },
        {
          path: routes.pathHash.detailPage,
          component: 'detail.js',
          title: '详情页 - MangaS'
        },
        {
          path: routes.pathHash.adminPage,
          component: 'admin.js',
          title: '管理后台 - MangaS'
        },
      ]
    },
  ]
}
