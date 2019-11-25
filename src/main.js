import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

// Importing the global css file
import "@/css/app.css"

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')

