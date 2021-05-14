import routes from './server/router.js'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog-ssr',
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
    {src: "@/plugins/vue-particles", ssr: false},
    {src: "@/plugins/directives", ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
