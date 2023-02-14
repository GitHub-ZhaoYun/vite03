import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Fapiao from '../views/fapiao.vue'

const router = createRouter({
    history: createWebHashHistory(), // hash模式 createWebHashHistory() history模式 createWebHistory()
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
