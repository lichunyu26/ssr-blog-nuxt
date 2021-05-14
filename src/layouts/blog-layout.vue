<template>
  <a-layout>
    <a-back-top>
      <a-icon type="arrow-up"/>
    </a-back-top>
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
      <a-layout-sider :width="315">
        <div class="my-icon">
          <nuxt-link to="/">
            <a-avatar :size="85" src="https://code-summary.oss-cn-shanghai.aliyuncs.com/images/myIcon.jpg" alt="L"/>
          </nuxt-link>
        </div>
        <div class="router-change">
          <div class="router-search">
            <a-input-search
              v-model="filterKey"
              placeholder="根据名称模糊查询..."/>
          </div>
          <div class="router-change-con">
            <div v-for="item in blogList" :key="item.path">
              <nuxt-link :to="item.path">
                <a-icon type="bars"/>
                {{item.meta.title}}
              </nuxt-link>
            </div>
          </div>
        </div>
      </a-layout-sider>
      <a-layout style="padding-left:12px;">
        <a-layout-content>
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
  import {blogList} from '@/../server/router.js'

  export default {
    name: 'blog-layout',
    data() {
      return {
        filterKey: ""
      }
    },
    computed: {
      title() {
        console.log(this.$route)
        return this.$route.meta.title
      },
      subTitle() {
        return this.$route.meta.summary
      },
      blogList() {
        if (this.filterKey === "") return blogList
        return blogList.filter(item => item.meta && item.meta.title && item.meta.title.indexOf(this.filterKey) > -1)
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/style-less/layout";

  @import "../assets/style-less/CSSVariable";

  .router-change-con {
    height: calc(100% - 42px);
    overflow-y: auto;

  }

  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0;
  }

  .my-icon {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
      height: calc(150px * .7);
      width: auto;
      border-radius: 50%;
      transition: all .38s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .router-change {
    padding-left: 24px;
    height: calc(100% - 150px);

    .router-search {
      width: calc(100% - 4px);
      height: 42px;
    }

    > div.router-change-con {
      > div {
        border-bottom: 1px dotted @textColor;

        &:last-child {
          border-bottom: none;
        }

        height: 32px;
        line-height: 32px;
        width: calc(100% - 24px);

        a {
          color: @textColor;

          span {
            margin-right: 4px;
          }

          &:hover {
            color: #40a9ff;
          }

          &.nuxt-link-active.nuxt-link-exact-active {
            color: #1890ff;
          }
        }
      }
    }

  }

  .page-content {
    height: 100%;
    box-sizing: border-box;
    padding: 8px 8px 8px 0;
    overflow-y: auto;

    &::-webkit-scrollbar, ::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 0;
    }
  }
</style>

