<template>
    <div>
<!--        <Header></Header>-->
        <div style="width: 100%;">
            <!--实现阿里icon的三种方式 开始-->
            <div>
                开始
                <i class="iconfont" style="font-size: 40px;" @click="btnFun">&#xe602;</i>
                <i class="iconfont icon-shoucang" style="font-size: 40px;"></i>
                <i class="iconfont icon-love" style="font-size: 40px;"></i>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nv"></use>
                </svg>
                结束
            </div>
        </div>
    </div>
</template>

<script setup>
// import Header from '../components/common/Header.vue'
const btnFun = () => {
    console.log(import.meta.env);
}
</script>

<style scoped>
.icon-love::after{
    content: '\e716'
}
.icon{
    width: 2em;
    height: 2em;
    vertical-align: -0.5em;
    fill: currentColor;
    overflow: hidden;
}
</style>
