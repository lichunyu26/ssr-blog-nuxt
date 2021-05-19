<template>
  <div class="nuxt-ssr">
    <h2>Nuxt.js & SSR</h2>
    <h2>{{$store.state.counter}}</h2>
    <a-collapse>

      <a-collapse-panel header="搭建SSR项目的缘由">
        <p>之前的博客采用的Vue 3.x + ant-design-vue 2.x 开发，但是SPA应用在SEO优化方面不是很友好，查询各种资料后，决定采用Nuxt来改写</p>
        <p>nuxt版本 2.14.12 </p>
      </a-collapse-panel>

      <a-collapse-panel header="基于Nuxt搭建的SSR项目初始化">
        项目初始化参照官方文档操作即可，这里就不再搬运了
        <jump2origin
          originText="nuxtjs官方文档"
          originURL="https://zh.nuxtjs.org/"></jump2origin>
      </a-collapse-panel>

      <a-collapse-panel header="在Nuxt里面注册全局指令">
        <p>常规的Vue项目里面，我们注册全局指令一般是在main.js里面，但是nuxt搭建的项目没有main.js</p>
        <p>查询部分资料后，发现是在nuxt.config.js的plugins里面配置</p>
        <insert-code-h5 insert-code="export default{
    plugins: [{src: '@/plugins/directives', ssr: false}]
}"/>
        <p>ssr: false 一定要加上，不然会遇到 window is not defined 的错误</p>
        <p>directives.js内容如下</p>
        <insert-code-h5 insert-code="import Vue from 'vue'
import {message} from 'ant-design-vue';
//一键复制
const copy = {
  bind(el, {value}) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) { /*Todo * 如果没有复制内容，做出一些提示 * */
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) message.success('复制成功！');
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, {value}) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
}
Vue.directive('copy', copy)
"/>
        <p>本项目中的一键复制功能就是采用的上面的解决方案</p>

        <jump2origin origin-text="该方法搬运自知乎" origin-u-r-l="https://zhuanlan.zhihu.com/p/337659611"/>
      </a-collapse-panel>

      <a-collapse-panel header="给自动生成的路由加上meta">
        <p>nuxt的路由是nuxt.js根据 src/pages 文件夹下的文件自动生成的，所以自身的meta属性是{}</p>
        <p>但是实际使用过程中，我们需要在meta里面写一些字段，查阅了资料后，实现方法如下</p>
        <p>在根目录下新建一个server文件夹，然后在该文件夹下新建一个router.js</p>
        <img class="blog-demo-image block"
             v-pic
             src="https://code-summary.oss-cn-shanghai.aliyuncs.com/images/nuxt-2021-05-14/nuxt_16209886768401.png"
             alt="router.js">
        <a href="https://code-summary.oss-cn-shanghai.aliyuncs.com/images/nuxt-2021-05-14/router.js">下载router.js</a>
        <p>nuxt.config.js内配置如下</p>
        <insert-code-h5 insert-code="import routes from './server/router.js'
export default{
  router: {
    base: '/',
    extendRoutes: routes
  }
}"/>

        <jump2origin
          originText="参考文章"
          originURL="https://www.pianshen.com/article/7564169815/"></jump2origin>
      </a-collapse-panel>

      <a-collapse-panel header="Nuxt项目打包后自动部署到服务器">
        <p>依赖</p>
        <insert-code-h5 insert-code="npm install shelljs scp2 chalk ssh2 cross-env dotenv --save-dev"/>
        <p>自动部署的实现方法参考了下面的这个文章，但是由于nuxt项目和Vue项目部署的文件不同，我根据个人的实际情况写了一个用于我这个项目的上传部署</p>
        <p>实现思路如下：</p>
        <p>一、要部署到服务器上，首先要连接到服务器。</p>
        <p>二、连接到服务器后，先停止之前运行的pm2服务，然后删除原始文件。</p>
        <p>三、原始文件删除后，把本地的打包文件上传至服务器。</p>
        <p>四、安装依赖并启动pm2服务。</p>
        <p>具体实现方法github上有源码，这里不贴源码了。</p>
        <jump2origin
          originText="参考文章：Vue打包并自动部署到指定服务器"
          originURL="https://blog.csdn.net/a736755244/article/details/113408078"></jump2origin>
      </a-collapse-panel>

    </a-collapse>
    <jump2origin
      originText="博客完整代码"
      originURL="https://github.com/lichunyu26/ssr-blog-nuxt"></jump2origin>

  </div>
</template>

<script>
  export default {
    name: 'nuxt-ssr',
    layout: "blog-layout"
  }
</script>

<style scoped>
  .nuxt-ssr {

  }
</style>
