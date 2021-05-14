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
        <p>个人理解：let temp =  a || 'default string' </p>
        <p>当a是[null,false,undefined,0,'']其中任意一种时，则赋值default string，反则赋予temp a的值</p>

        <h3>??是在查?.过程中意外看到的，顺便记录一下</h3>

        </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2">
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3">
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
  export default {
    name: 'js-kinky-tricks',
    layout: "blog-layout",
    data() {
      return {
        activeKey: ""
      }
    }

  }
</script>

<style scoped>
  .js-kinky-tricks {

  }
</style>
