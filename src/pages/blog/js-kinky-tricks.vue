<template>
  <div class="js-kinky-tricks">
    <a-collapse>
      <a-collapse-panel header="?? || ?. 三个运算符的区别">
        <h3>平常工作中用的多比较多的是||，至于?.是有一次看echarts的demo的时候，看到是这样写的</h3>
        <insert-code-h5 insert-code="const pieChart = echarts.init(document.getElementById('plough-rectify-pieChart'))
pieChart?.setOption({...})"/>
        <p>
          可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者
          undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。
          当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。
        </p>
        <jump2origin
          originText="详情查看文档"
          originURL="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining"></jump2origin>

        <h3>||一般用来给变量赋予一个默认值</h3>
        <insert-code-h5 insert-code="const tempObj = res || {}
console.log(tempObj)"/>
        <p>此时当res为null,false,undefined,0时，会给赋予{}，不然会把res的值赋给tempObj</p>
        <p>百度后发现当 res = '' 的时候，也会赋值 {}</p>
        <p>个人理解：let temp = a || 'default string' </p>
        <p>当a是[null,false,undefined,0,'']其中任意一种时，则赋值default string，反则赋予temp a的值</p>

        <h3>??是在查?.过程中看到的，顺便记录一下</h3>
        <p>大致作用和||差不多，但是对于运算符左侧的类型少了一些，只有null 和 undefined</p>
      </a-collapse-panel>
      <a-collapse-panel header="从数组里面删除指定元素，并返回删除后的数组">
        <p>在一些可以动态编辑的页面，该需求是很经常用到的。</p>
        <p>但是js提供的splice()方法向/从数组中添加/删除项目，然后返回被删除的项目。</p>
        <p>splice()是返回删除的元素，但是会修改原数组，那么可以直接封装一个方法，接收要删除的元素和原数组，删除后返回这个数组即可实现</p>
        <insert-code-h5 insert-code="function deleteArrayItem(arr, item) {
    const itemIndex = arr.indexOf(item)
    if (itemIndex > -1) arr.splice(itemIndex, 1);
    return arr
}"></insert-code-h5>

      </a-collapse-panel>
    </a-collapse>
    <p class="last-update-time">最后更新时间：2021/5/14</p>
  </div>
</template>

<script>
  export default {
    name: 'js-kinky-tricks',
    layout: "blog-layout",
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
          content: 'L‘s Blog / 个人博客 / Vue / SSR / Nuxt / JS'
        },
      ]
    },
  }
</script>

<style scoped>
  .js-kinky-tricks {

  }
</style>
