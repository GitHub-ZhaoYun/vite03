<template>
    <el-container>
        <el-aside :width="sidebarWidth">
            <sidebar :showLogo="true"></sidebar>
        </el-aside>
        <el-container>
            <el-header>
                <navbar></navbar>
            </el-header>
            <tabs></tabs>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { Sidebar, Navbar } from './components/layout.js'
    import Header from './components/Header.vue'
    const route = useRoute();
    const store = useStore();

    // 获取当前路径
    const currentPath = computed(() => {
      return route.path
    })

    // 导航栏类型
    const navbarType = computed(() => {
      return store.state.navbarType
    })

    // 是否折叠菜单
    const isCollapse = computed(() => {
      return store.state.isCollapse
    })
    // 侧边栏宽度
    const sidebarWidth = computed(() => {
      return store.state.isCollapse ? '64px' : '200px'
    })
</script>

<style></style>
