import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/boostrap-vue'
import VueAgile from 'vue-agile'
import VS2 from 'vue-script2'

Vue.use(VS2)
Vue.use(VueAgile)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
