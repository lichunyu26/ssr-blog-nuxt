<template>
  <div>
    <a-timeline>
      <a-timeline-item>
        <a-card title="上海成生科技有限公司">
          <h4>在这里，我的前端开发能力飞速提升，从之前的前端菜鸟到现在可以搭建公司的前端框架，成生给了我很大的帮助！</h4>
          <h4>从一名刚站稳脚跟的Java全栈开发向前端开发进行转变。</h4>
          <h4>从一开始的JQuery+layUI+Bootstrap到现在的Vue+ ElementUI/ant-design-vue。</h4>
          <h4>在前端开发的过程中，用了高德地图，百度地图，OpenLayer+天地图，ECharts,HighCharts等优秀的插件库。</h4>
          <h4>工作中，经公司管理层讨论，决定搭建基于Vue的前端框架，因为公司本身已经有了一套比较完善的鉴权管理系统，新的框架需要能完美适配之前的系统，</h4>
          <h4>经过多次开会讨论，公司决定由我牵头来完成对 vue-element-admin 的适配改造，感谢
            <a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank">@PanJiaChen </a>大佬的开源项目
          </h4>
          <a-tag color="blue">Web</a-tag>
          <a-tag color="blue">Node.js</a-tag>
          <a-tag color="blue">JQuery</a-tag>
          <a-tag color="blue">Vue</a-tag>
          <a-tag color="blue">AMap</a-tag>
          <a-tag color="blue">ECharts</a-tag>
          <a-tag color="blue">WeApp(微信小程序)</a-tag>
        </a-card>
      </a-timeline-item>

      <a-timeline-item>
        <a-card title="上海百林通信网络科技服务股份有限公司">
          <h4>入行之后的第一家公司，很感谢百林给了我进入互联网行业的机会。</h4>
          <h4>从一个小白开始慢慢成为一名Java全栈开发</h4>
          <h4>在这里我掌握了一些大数据开发的技能，在组长的带领下，使用ZooKeeper，Hadoop，Kafka 等中间件进行大数据处理开发...</h4>
          <h4>用 JQuery+H5 做了数据的页面展示，同时也做了安卓/iOS的内嵌H5移动开发。</h4>
          <h4>经过半年多的工作与学习，我发现我对Web前端开发更感兴趣，遂跳槽到了下一家公司。</h4>
          <a-tag color="blue">Java</a-tag>
          <a-tag color="blue">ZooKeeper</a-tag>
          <a-tag color="blue">Hadoop</a-tag>
          <a-tag color="blue">Kafka</a-tag>
          <a-tag color="blue">App</a-tag>
          <a-tag color="blue">h5</a-tag>
          <a-tag color="blue">JQuery</a-tag>
          <a-tag color="blue">移动APP</a-tag>
        </a-card>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>
<script>
  export default {
    head: {
      title: 'L‘s Blog',
      meta: [
        {
          hid: 'blog-index-description',
          name: 'description',
          content: '个人经历'
        }, {
          hid: 'blog-index-keywords',
          name: 'keywords',
          content: 'L‘s Blog / 个人博客 / 个人经历'
        },
      ]
    }
  }
</script>
