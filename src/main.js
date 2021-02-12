import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
=======
import router from './router'
import store from './store'
>>>>>>> linux first commit

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  render: h => h(App),
=======
  router,
  store,
  render: h => h(App)
>>>>>>> linux first commit
}).$mount('#app')
