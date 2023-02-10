import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Fapiao from '../views/fapiao.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home/fapiao',
                    name: 'home',
                    component: Fapiao,
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/fapiao',
            name: 'Fapiao',
            component: Fapiao
        }
    ]
})

export default router
