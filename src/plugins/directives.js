import Vue from 'vue'
import '../utils/third-js-plugins/BigPicture'
import {message} from 'ant-design-vue';
//复制指令 v-copy  Vue 2.x版本
const copy = {
  bind(el, {value}) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) { /*Todo * 如果没有复制内容，做出一些提示 * */
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) message.success('复制成功！');
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, {value}) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
}

//单张图片查看大图
const pic = {
  mounted: function (el) {
    el.addEventListener('click', ({target}) => {
      BigPicture({
        el: target
      })
    })
  },
}

Vue.directive('copy', copy)
Vue.directive('pic', pic)
