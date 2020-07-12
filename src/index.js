import 'assets/scss/base.scss'
import 'assets/font/iconfont.css'
import 'assets/scss/animate.scss'


import fastclick from 'fastclick';
fastclick.attach(document.body);


import Vue from 'vue'
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)

import router from './router'
import App from './App'

// import 'directives'

import store from './store'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: createElement => createElement(App)
})
