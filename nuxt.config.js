import routes from './server/router.js'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'L`s Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '个人博客'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'https://code-summary.oss-cn-shanghai.aliyuncs.com/images/favicon.ico'}
    ]
  },
  srcDir: 'src',
  router: {
    base: '/',
    extendRoutes: routes
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/style-less/index.less',
    '@/assets/style-less/layout.less',
  ],
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios',
    {src: "@/plugins/vue-particles", ssr: false},
    {src: "@/plugins/directives", ssr: false},
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL:process.env.BASE_URL
    }
  },
  modules: ['@nuxtjs/axios'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

}
