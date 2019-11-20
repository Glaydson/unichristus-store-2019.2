import Vue from 'vue'
import router from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')

