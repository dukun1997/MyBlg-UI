import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element-ui
import ElementUI from 'element-ui'
// 导入element-ui的全局样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 关闭生产模式下的一些消息，减少应用体积
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
