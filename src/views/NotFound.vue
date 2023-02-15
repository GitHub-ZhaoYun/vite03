<template>
    <div class="notFound-container">
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test"></use>
            </svg>
        </div>
        <div>
            <span>未找到对应的页面</span>
        </div>
        <!--实现阿里icon的4种方式 开始-->
        <div>
            开始
            <i class="iconfont" style="font-size: 40px;" @click="btnFun">&#xe602;</i>
            <i class="iconfont icon-shoucang" style="font-size: 40px;"></i>
            <i class="iconfont icon-pingguo" style="font-size: 40px;"></i>
            <svg class="icon icon-size" aria-hidden="true">
                <use xlink:href="#icon-nv"></use>
            </svg>
            结束
        </div>
        <!--实现阿里icon的4种方式 结束-->
    </div>
</template>

<script setup>
const btnFun = () => {
    console.log(import.meta.env);
}
</script>

<style lang="scss" scoped>
.notFound-container{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-pingguo::after{
        content: '\e716'
    }
    .icon-size{
        width: 2em;
        height: 2em;
        vertical-align: -0.5em;
        fill: currentColor;
        overflow: hidden;
    }
}
</style>
