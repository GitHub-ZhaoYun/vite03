<template>
    <el-config-provider :locale="locale">
        <RouterView />
    </el-config-provider>
</template>
<script setup>
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
    import en from 'element-plus/dist/locale/en.mjs'
    import { useStore } from './stores/language'
    const store = useStore();
    let { currentLanguage } = storeToRefs(store);
    let locale = computed(() => (currentLanguage.value === 'zh' ? zhCn : en))
</script>
<style>
@import "./assets/css/reset.css";
</style>
