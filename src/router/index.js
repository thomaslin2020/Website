import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/art_exhibition',
        name: 'IB Art Exhibition',
        component: () => import(/* webpackChunkName: "about" */ '../views/Art Exhibition.vue')
    },
    {
        path: '/riff',
        name: 'RIFF',
        component: () => import(/* webpackChunkName: "about" */ '../views/Riff.vue')
    },
    {
        path: '/arts_awards',
        name: 'Arts Awards 2020',
        component: () => import(/* webpackChunkName: "about" */ '../views/Arts Awards.vue')
    },
    {
        path: '/music',
        name: 'Music Gallery',
        component: () => import(/* webpackChunkName: "about" */ '../views/Music.vue')
    }, {
        path: '/theatre',
        name: 'Theatre Gallery',
        component: () => import(/* webpackChunkName: "about" */ '../views/Theatre.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
