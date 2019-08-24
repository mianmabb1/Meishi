import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Top from './components/Top'
import Bottom from './components/Bottom'

Vue.component("top",Top);
Vue.component("bottom",Bottom);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
