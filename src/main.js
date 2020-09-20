import Vue from 'vue'
import App from './App'
import router from './router'

// pc端适应屏幕
import './utils/flexible'
// 阿里小图标
import '../static/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
