<template>
  <div class="nginx-mapping-node">
    <h2>{{$route.meta.title}}</h2>
    <p>简单的来说就是Nuxt项目部署后，用pm2启动该项目，然后把该项目的端口配置在nginx.conf中，再由nginx做一下代理即可。 </p>
    <p>PM2 是一个带有负载均衡功能的 Node 应用进程管理器。</p>
    <jump2origin
      originText="PM2官方文档"
      originURL="https://pm2.keymetrics.io/"></jump2origin>

    <p>nginx.conf的配置</p>

    <p>我的博客是跑在默认的3000端口,把下面的这块代码放到nginx.conf的 http 下</p>
    <insert-code-h5 insert-code="upstream nuxtblog {
  server 127.0.0.1:3000;
}"/>
    <p>然后在http下的server内配置代理，重启nginx即可。</p>
    <insert-code-h5 insert-code="location /{
  proxy_pass http://127.0.0.1:3000;
  index index.html index.htm;
}"/>

  </div>
</template>

<script>
  export default {
    name: 'nginx-mapping-node',
    layout: "blog-layout"
  }
</script>
