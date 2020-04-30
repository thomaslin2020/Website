import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '@babel/polyfill'
import './plugins/boostrap-vue'
// import VueWindowSize from 'vue-window-size';

// Vue.use(VueWindowSize);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
