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
        path: '/art_exhibition',
        name: 'IB Art Exhibition',
        component: () => import('../views/Art Exhibition.vue')
    },
    {
        path: '/art_exhibition/:name',
        name: 'IB Art Exhibition Artists',
        component: () => import('../views/Artists.vue')
    },
    {
        path: '/art_video',
        name: 'IB Art Video',
        component: () => import('../views/ArtVideo.vue')
    },
    {
        path: '/riff',
        name: 'RIFF',
        component: () => import('../views/Riff.vue')
    },
    {
        path: '/art_gallery',
        name: 'Art Gallery',
        component: () => import('../views/VisualArt.vue')
    },
    {
        path: '/art_gallery/:grade',
        name: 'Art Gallery Grade',
        component: () => import('../views/VisualArtGrade.vue')
    },
    {
        path: '/award_video',
        name: 'Arts Awards Video',
        component: () => import('../views/Arts Awards.vue')
    },
    {
        path: '/award_list',
        name: 'Arts Awards List',
        component: () => import('../views/Award List.vue')
    },
    {
        path: '/music',
        name: 'Music Gallery',
        component: () => import('../views/Music.vue')
    },
    {
        path: '/music/:event',
        name: 'Music Events',
        component: () => import('../views/MusicEvents.vue')
    },
    {
        path: '/theatre',
        name: 'Theatre Gallery',
        component: () => import('../views/Theatre.vue')
    },
    {
        path: '/theatre/:events',
        name: 'TheatreEvents',
        component: () => import('../views/TheatreEvents.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
