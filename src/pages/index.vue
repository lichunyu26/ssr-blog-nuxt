<template>
  <div class="home-index">
    <h4 style="margin-top: 4px">
      来自河南的一个糙汉子，入行后经不住岁月和生活的摩擦，
      短短三年时间，体重暴涨近60斤。
    </h4>
    <h2>
      <a-tag color="blue">胖子</a-tag>
      <a-tag color="blue">Java</a-tag>
      <a-tag color="blue">前端</a-tag>
      <a-tag color="blue">JQuery</a-tag>
      <a-tag color="blue">Vue</a-tag>
      <a-tag color="blue">技术宅</a-tag>
      <a-tag color="blue">有梦想的咸鱼...</a-tag>
    </h2>

    <a-divider orientation="left" style="border-color: #d7dae2" dashed></a-divider>
    <h4>
      2018 年入行，从一名JavaWeb开发做起，期间接触了大数据处理。
    </h4>
    <h4>
      2019 年过完年后投入前端大军的怀抱，因为有之前 JavaWeb 开发的底子在，经过两年的前端工作，对于 Vue 有了比较深入的理解，对 React 有一定的了解，也做过几个demo，可以用 React
      进行开发。
    </h4>
    <h4>2020 年初因为疫情的影响居家办公，随之产生了搭建自己的博客的想法，刚好抓着24岁的尾巴买了阿里云的学生机，虽然不是白嫖但是他便宜啊。</h4>
    <h4>2020年3月 复工后，因为之前的工作积压太多，不得不暂时放弃搭建自己博客的想法。</h4>
    <h4>2020年底，随着一年即将结束，项目也马上要验收，即将告一段落，遂又萌发了搭建自己博客的想法...</h4>
    <h4>2021.01，新的一年开始了，域名备案也终于完成了，博客开动...</h4>
    <a-divider orientation="left" style="border-color: #d7dae2" dashed></a-divider>
    <h4>运行环境与开发所用技术</h4>
    <h4>服务器 CentOS 7.3</h4>
    <h4>Web服务器 Nginx</h4>
    <h4>前端页面采用 Nuxt + ant-design-vue  开发</h4>
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
          content: 'L的个人博客概述'
        }, {
          hid: 'blog-index-keywords',
          name: 'keywords',
          content: 'L‘s Blog / 个人博客 / Vue / SSR / Nuxt / nginx'
        },
      ]
    },
    meta:{title:"Index Page"}

  }
</script>
