import {createRouter, createWebHistory} from 'vue-router'
import login from '../views/login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Fapiao from '../views/fapiao.vue'

const router = createRouter({
    history: createWebHistory(), // hash模式 createWebHashHistory() history模式 createWebHistory()
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home/fapiao',
                    name: 'home-fapiao',
                    components: Fapiao,
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
