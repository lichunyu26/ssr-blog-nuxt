<template>
  <div class="index">
    <a-list item-layout="horizontal" :data-source="blogList">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta
          :description="item.meta.summary">
          <a slot="title" :href="`/blog/${item.path}`" target="_blank">{{ item.meta.title }}</a>
          <a-avatar
            slot="avatar"
            src="https://code-summary.oss-cn-shanghai.aliyuncs.com/images/myIcon.jpg"/>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  import {blogList} from '@/../server/router.js'

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
          content: 'L‘s Blog / 个人博客 / Vue / SSR / Nuxt / Nginx'
        },
      ]
    },
    data() {
      return {
        blogList: []
      }
    },
    created() {
      this.blogList =blogList
    }
  }
</script>
