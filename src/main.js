import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker' 
import router from './router'
import store from './store'

import lazyLoading from './funcs/lazyLoading'

//css样式导入防止Resource interpreted as Stylesheet but transferred with MIME type text/html错误
import "./../public/common/default.css"
import "./../public/common/font.css"

Vue.config.productionTip = false
Vue.prototype.$lazyLoading = lazyLoading

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')