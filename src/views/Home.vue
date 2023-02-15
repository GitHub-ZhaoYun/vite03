<template>
    <div>
<!--        <Header></Header>-->
        <div style="width: 100%;">
            <div style="width: 1200px; margin: 30px auto;">
                <el-table mb-1 :data="[]" />
                <el-pagination :total="100" />
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
// import Header from '../components/common/Header.vue'

</script>

<style scoped>

</style>
