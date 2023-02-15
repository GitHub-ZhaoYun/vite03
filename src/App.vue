<template>
    <el-config-provider :locale="locale">
        <router-view/>
    </el-config-provider>
</template>
<script setup>
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
    import en from 'element-plus/dist/locale/en.mjs';
    import { usePiniaStore } from './stores/language';
    const store = usePiniaStore();
    let { currentLanguage } = storeToRefs(store);
    let locale = computed(() => (currentLanguage.value === 'zh' ? zhCn : en))
</script>
<style>
@import "./assets/css/reset.css";
</style>
