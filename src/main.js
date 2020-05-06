import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/boostrap-vue'
import VS2 from 'vue-script2'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueWindowSize from 'vue-window-size';
import VueMobileDetection from 'vue-mobile-detection'
import BootstrapVueIcons from 'bootstrap-vue'

Vue.use(VS2)
Vue.use(VueMobileDetection)
Vue.use(VueWindowSize);
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.prototype.$static = 'https://raw.githubusercontent.com/thomaslin2020/ridley-arts-celebration/master/src/assets/'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
