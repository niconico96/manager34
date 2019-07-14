import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 挂在到Vue实例上

}).$mount('#app')
