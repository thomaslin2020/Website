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
        component: () => import('../views/About.vue')
    },
    {
        path: '/ping',
        name: 'Ping',
        component: () => import('../views/Ping.vue')
    },
    {
        path: '/courses',
        name: 'Courses',
        component: () => import('../views/Courses.vue')
    },
    {
        path: '/predict',
        name: 'Predict',
        component: () => import('../views/Predict'),
    },
    {
        path: '/predict/mnist',
        name: 'MNIST',
        component: () => import('../views/MNIST/Task'),

    },
    {
        path: '/predict/mnist/cnn',
        name: 'CNN',
        component: () => import('../views/MNIST/CNN')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
