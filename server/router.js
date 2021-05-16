/**
 * nuxt的路由菜单配置
 * @description 仅仅只用于侧边栏的菜单显示和权限,其它的不做任何功能
 */
export const blogList = [
  {
    path: "nuxt-ssr",
    name: "nuxt-ssr",
    meta: {
      title: 'Nuxt.js 使用简介',
      summary: '因为SPA应用在SEO优化方面对个人开发者不太友好，所以把博客改为采用服务器端渲染，便于搜索引擎抓取关键词，本文记录了从开始搭建到打包部署的全过程。',
    },
  },
  {
    path: "nginx-mapping-node",
    name: "nginx-mapping-node",
    meta: {
      title: 'Nginx代理node服务',
      summary: 'Nuxt打包后在服务器端用nodejs运行，然后用Nginx反向代理node的端口。',
    },
  },{
    path: "js-kinky-tricks",
    name: "js-kinky-tricks",
    meta: {
      title: 'JS的一些使用技巧',
      summary: '日常搬砖过程中用的比较多的js的一些简单写法。',
    },
  },{
    path: "node-qrcode",
    name: "node-qrcode",
    meta: {
      title: 'H5+JS生成二维码',
      summary: '用qrcode.js在前端生成二维码。',
    },
  },
]

const menus = [
  {
    meta: {
      title: 'L`s 个人博客',
    },
    path: "/",
    name: "index"
  },
  {
    meta: {
      title: 'L`s 个人博客',
      subTitle: '个人经历'
    },
    path: "/personal-experience",
    name: "personal-experience"
  },
  {
    meta: {
      title: 'L`s 个人博客',
      subTitle: '代码记录',
    },
    path: "/code-record",
    name: "code-record",
  },
  {
    meta: {
      title: 'L`s 个人博客',
      subTitle: '代码记录',
    },
    path: "/blog",
    name: "blog",
    children: blogList
  },


];

/**
 * 递归查询路由权限
 * @param {*} list
 */
const iterator = list => {
  for (let item of list) {
    for (let m of menus) {
      if (item.name === m.name && item.path === m.path) {
        item.meta = m.meta;
        break
      }
    }
    if (item.children && item.children.length > 0) {
      iterator(item.children);
    }
  }
  return list;
};

export default (routes, resolve) => routes = iterator(routes);
