<template>
  <div class="insert-code-h5">
    <div class="btn-copy">
      <a-button size="small"
                v-copy="insertCode"
                type="primary">一键复制
      </a-button>
    </div>
    <pre><code>{{insertCode}}</code></pre>
  </div>
</template>

<script>
  export default {
    name: "insert-code-h5",
    props: {
      insertCode: String
    }
  }
</script>
<style scoped lang="less">
  .insert-code-h5 {
    position: relative;
    display: inline-block;
    width: auto;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.12),
    2px 2px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    /*line-height: ;*/
    padding: 0;
    min-width: 500px;
    margin: 1em 0;
    background: rgba(0, 0, 0, .05);
    max-width: 80%;

    ::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 5px;
    }

    .btn-copy {

      display: none;
      position: absolute;
      top: 4px;
      right: 8px;
    }

    &:hover .btn-copy {
      display: block;
    }

    pre {
      padding: 4px;
      margin-bottom: 0;
      font-size: 16px;
    }
  }

</style>
