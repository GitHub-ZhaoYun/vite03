<template>
    <el-config-provider :locale="locale">
        <component :is="Layout"></component>
    </el-config-provider>
</template>
<script setup>
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
    import en from 'element-plus/dist/locale/en.mjs';
    import { useStore } from './stores/language';
    import Layout from "./components/layout/Layout.vue";
    const store = useStore();
    let { currentLanguage } = storeToRefs(store);
    let locale = computed(() => (currentLanguage.value === 'zh' ? zhCn : en))
</script>
<style>
@import "./assets/css/reset.css";
</style>
