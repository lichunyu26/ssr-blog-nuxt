<template>
  <a-layout-sider :width="315">
    <div class="my-icon">
      <nuxt-link to="/">
        <a-avatar :size="85" src="https://code-summary.oss-cn-shanghai.aliyuncs.com/images/myIcon.jpg" alt="L"/>
      </nuxt-link>
    </div>
    <div class="router-change">
      <div class="router-change-con">
        <div>
          <nuxt-link to="/">
            <a-icon type="home"/>
            首页 / Home
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/personal-experience">
            <a-icon type="history"/>
            个人经历 / Experience
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/code-record">
            <a-icon type="bars"/>
            代码记录 / Code Record
          </nuxt-link>
        </div>
      </div>
    </div>
  </a-layout-sider>
</template>

<style scoped lang="less">

  @import "../assets/style-less/CSSVariable";
  .router-change-con {
    height: calc(100% - 150px - 45px);
  }

  .router-change-con-blog {
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100% - 32px);
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
    height: calc(100% - 182px);

    > div.router-change-con, > div.router-change-con-blog {
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

</style>
