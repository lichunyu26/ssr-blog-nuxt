<template>
  <div class="node-qrcode">
    <h2>本页面提供二维码相关实例以及代码</h2>
    <p>js依赖 qrcode.js</p>
    <insert-code-h5 insert-code="npm install --save qrcode
import QRCode from 'qrcode'"/>

    <a-collapse>
      <a-collapse-panel header="生成最简单的二维码">
        <a-row class="node-qrcode-instance"
               :gutter="[16,16]">
          <a-col :span="12">
            <a-input v-model="qrCode1Val" @pressEnter="initQRCodeDemo1"></a-input>
            <img :src="qrCode"/>
          </a-col>
          <a-col :span="12">
            <p>html/template代码</p>
            <insert-code-h5 insert-code="<img :src='qrCode'/>"/>
            <p>生成二维码的function</p>
            <insert-code-h5 insert-code="async initQRCodeDemo1() {
  this.qrCode = await QRCode.toDataURL(this.qrCode1Val)
}"/>
          </a-col>
        </a-row>
        <p>ps:如果data是一个网站，扫码后会自动打开二维码的网站</p>
      </a-collapse-panel>
      <a-collapse-panel header="生成中间带有图片/Icon的二维码">

      </a-collapse-panel>

    </a-collapse>
    <jump2origin
      originText=""
      originURL="https://github.com/cmanzana/qrcode-npm"/>
  </div>
</template>

<script>
  import QRCode from 'qrcode'

  export default {
    name: "node-qrcode",
    layout: "blog-layout",
    data() {
      return {
        qrCode1Val: "我就是二维码的内容",
        qrCode: null,
        qrCodeVal2: "https://lr1314.cn/",
      }
    },

    created() {
      this.initQRCodeDemo1()
    },
    methods: {

      async initQRCodeDemo1() {
        this.qrCode = await QRCode.toDataURL(this.qrCode1Val)
      }
    },
  }
</script>

<style scoped lang="less">
  .node-qrcode-instance {
    height: 200px;
  }
</style>
