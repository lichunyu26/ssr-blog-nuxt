<template>
  <a-layout>
    <a-back-top>
      <a-icon type="arrow-up"/>
    </a-back-top>
    <a-layout-header class="header">
      <div class="video-bg" :class="device">
        <img v-if="device==='desktop'"
             src="https://code-summary.oss-cn-shanghai.aliyuncs.com/images/67bd05fb4667dff7f6adeef35fa5b82.jpg"
             :class="device"
             alt="L 个人博客">
        <div class="video-fill">
          <canvas id='bubble'></canvas>
        </div>
        <div class="my-info">
          <p class="my-info-title">L 个人博客</p>
          <h3 style="color: white;">热爱每一行代码！</h3>
        </div>
        <div class="to-begin">
          <a-icon type="down" @click="toBegin"/>
        </div>
      </div>
    </a-layout-header>
    <a-layout id="layOut-Content">
      <client-only>
        <vue-particles
          class="particles-dom"
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="3"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="1"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"/>
      </client-only>
      <left-sider :has-page-header="true"
                  :is-display="true"/>
      <a-layout :style="{'padding-left':device==='desktop'?'12px':'0'}">
        <a-layout-content>
          <div class="page-header-title">
            <a-page-header
              :title="title"
              :sub-title="subTitle">
            </a-page-header>
          </div>
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <nuxt class="page-content"/>
            </keep-alive>
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-footer>
      <a href="http://beian.miit.gov.cn/" target="_blank">豫ICP备 2021001164号-1</a>
      <a href="https://github.com/lichunyu26/ssr-blog-nuxt"
         target="_blank"
         style="float: right;">
        <a-icon type="github"/>
      </a>
    </a-layout-footer>
  </a-layout>
</template>

<script>


  import LeftSider from "/src/components/LeftSider.vue";
  import toInitCanvas from '/src/utils/canvas-bubble'
import toInitCursorSpecialEffects from '/src/utils/mouse-click-special-effects'
  export default {
    components: {
      LeftSider
    },
    data() {
      return {
        device: 'desktop',
      }
    },
    computed: {
      title() {
        console.log(this.$route)
        return this.$route.meta.title
      },
      subTitle() {
        return this.$route.meta.subTitle
      }
    },
    mounted() {
      console.log(this.$route)
      toInitCanvas('bubble');
      //
      toInitCursorSpecialEffects()
    },
    methods: {
      toBegin() {
        window.scroll({top: document.body.clientHeight, left: 0, behavior: 'smooth'});
      }
    }

  }
</script>

<style scoped lang="less">
  @import "../assets/style-less/layout";
  .page-content {
    height: calc(100% - 64px);
    overflow-y: auto;

    &::-webkit-scrollbar,::-webkit-scrollbar{
      /*滚动条整体样式*/
      width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 0;
    }
  }
</style>
