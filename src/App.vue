<template>
    <el-config-provider :locale="locale">
        <component :is="Layout" v-if="$route.path != '/fapiao'"></component>
        <router-view v-else/>
    </el-config-provider>
</template>
<script setup>
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
    import en from 'element-plus/dist/locale/en.mjs';
    import { usePiniaStore } from './stores/language';
    import Layout from "./components/layout/Layout.vue";
    const store = usePiniaStore();
    let { currentLanguage } = storeToRefs(store);
    let locale = computed(() => (currentLanguage.value === 'zh' ? zhCn : en))
</script>
<style>
@import "./assets/css/reset.css";
</style>
