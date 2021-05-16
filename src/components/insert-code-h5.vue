<template>
  <div class="insert-code-h5">
    <div class="btn-copy">
      <a-button size="small"
                icon="copy"
                v-copy="insertCode"
                type="primary">
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
    /*height: 32px;*/
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    width: auto;
    min-width: 500px;
    margin-bottom: 4px;
    background: rgba(0, 0, 0, .05);
    max-width: 80%;

    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;

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

    &:hover {
      border-color: #40a9ff;
      border-right-width: 1px !important;
      .btn-copy {
        display: block;
      }
    }

    pre {
      margin-bottom: 0;
    }
  }

</style>
