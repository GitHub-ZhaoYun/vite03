<template>
    <el-sub-menu :index="item.menuId" v-if="item.children.length > 0">
        <template #title>
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.menuName }}</span>
        </template>
        <sidebar-item v-for="inner in item.children" :key="inner.menuId" :item="inner"></sidebar-item>
    </el-sub-menu>
    <el-menu-item :index="item.menuId" v-else @click="handleMenu(item)">
        <el-icon>
            <component :is="item.icon"></component>
        </el-icon>
        <span v-if="collapse">{{ item.menuName }}</span>
        <template #title>{{ item.menuName }}</template>
    </el-menu-item>
</template>

<script>
import {setTabs, getTabs} from '@/utils/storage.js'
import {useStore} from 'vuex'

export default {
    props: {
        item: Object,
        collapse: Boolean
    },
    setup() {
        const store = useStore()
        // 点击菜单回调
        const handleMenu = (obj) => {
            const {menuId, menuName} = obj
            let tabs = getTabs()
            let flag = true
            tabs.forEach((item) => {
                if (item.id === menuId) {
                    flag = false
                }
            })
            if (flag) {
                tabs.push({
                    id: menuId,
                    name: menuName,
                    active: true
                })
            }
            store.commit('getActiveMenu', menuId)
            setTabs(tabs, menuId)
        }

        return {
            handleMenu
        }
    }
}
</script>

<style></style>
