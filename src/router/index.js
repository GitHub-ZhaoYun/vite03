import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/components/layout/Layout.vue";
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Fapiao from '../views/Fapiao.vue'

const router = createRouter({
    history: createWebHistory(), // hash模式 createWebHashHistory() history模式 createWebHistory()
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home,
                    children: [
                        {
                            path: '/home/fapiao',
                            name: 'home-fapiao',
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
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/404',
            name: 'NotFound',
            meta: {
                title: 'Page not found',
            },
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/404'
        }
    ]
})

export default router
