<template>
  <div class="jump2origin">
    <a :href="originURL" target="_blank"> {{`${originText !== ''?(originText+'-'):''}${originURL}`}}</a>
  </div>
</template>

<script>
  export default {
    name: 'jump2origin',
    props: {
      originURL: {
        default: "",
        type: String,
      },
      originText: {
        default: "",
        type: String,
      }
    },
  }
</script>

<style scoped lang="less">
  .jump2origin {

  a {
    text-decoration: underline;
  }

  }
</style>
