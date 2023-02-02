<template>
    <div>
        <Header></Header>
        <div style="width: 30%;">
            <el-table mb-1 :data="[]" />
            <el-pagination :total="100" />
        </div>
    </div>
</template>

<script setup>
import Header from '../components/common/Header.vue'
</script>

<style scoped>

</style>
