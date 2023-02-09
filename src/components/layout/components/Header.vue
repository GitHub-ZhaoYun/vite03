<template>
    <header>
        <div class='header-content'>
            <h1 class='content-logo'>
                <img src="../../../assets/logo.svg">
            </h1>
            <div class='content-nav'>
                <ul>
                    <li>首页</li>
                    <li>课程</li>
                    <li>会员</li>
                </ul>
            </div>
            <div class='search-buy-login'>
                <div class='content-search'>
                    <input type="" :placeholder="$t('message.topPlaceholder')">
                    <el-icon color='#808080' :size='22'>
                        <search style="width: 22px; height:22px;"/>
                    </el-icon>
                </div>
                <div class='content-shopping'>
                    <el-icon color='#808080' :size='24'>
                        <shopping-cart style="width: 24px; height:24px;"/>
                    </el-icon>
                </div>
                <div class='content-login'>登录 / 注册</div>
                <el-dropdown @command="changeLanguage">
                    <!-- 这里的用的icon是阿里巴巴的-iconfont -->
<!--                    <el-button link>-->
<!--                        {{currentLanguage == 'zh' ? '中文' : '英文'}}-->
<!--                    </el-button>-->
                    <i class="el-icon el-tooltip__trigger" data-v-7b5f8a18="" style="font-size: 24px;">
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-7b5f8a18="">
                            <path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path>
                        </svg>
                    </i>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <!-- command绑定值"zh"  disabled是标签属性,不然选择-->
                            <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'"
                            >中文</el-dropdown-item>
                            <!-- command绑定值"zh" disabled是标签属性,不然选择-->
                            <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
                            >English</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </header>
</template>
<script setup>

// getCurrentInstance 引自 vue
const { proxy } = getCurrentInstance();
//获取当前的语言是什么,让页面标签el-dropdown-item变成灰色不然点击,只能让其点击没选中的
import { usePiniaStore } from '../../../stores/language'
const store = usePiniaStore();
let { currentLanguage } = storeToRefs(store);
const changeLanguage = (val) => { //接受参数。是上方lang文件设置的。message  zh还是en
    currentLanguage.value = val;
    proxy.$i18n.locale = val == 'zh' ? 'zh' : val == 'en' ? 'en' : '';
}
onBeforeMount(() => {
    proxy.$i18n.locale = currentLanguage.value;
})
</script>

<style scoped>
header{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100px;
    background: white;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
}
.header-content{
    display: flex;
    justify-content: space-around;
    width: 1200px;
}
.content-logo{
    width: 160px;
    height: 55px;
    margin: 10px 0;
    cursor: pointer;
}
.content-logo img{
    height: 100%;
}
.content-nav{
    width: 300px;
    height: 75px;
}
.content-nav ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 75px;
}
.content-nav ul li{
    font-size: 18px;
    color: #808080;
}
.search-buy-login{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
}
.content-search{
    display: flex;
    align-items: center;
    padding: 5px 10px;
    width: 350px;
    height: 35px;
    border-radius: 8px;
    background: #f0f2f4;
}
.content-search input{
    padding: 0 10px;
    width: 430px;
    height: 40px;
    border: 0;
    border-radius: 8px;
    color: #808080;
    background: #f0f2f4;
    font-size: 16px;
    outline: none;
}
.content-login{
    font-size: 18px;
    color: #808080;
    text-align: center;
    cursor: pointer;
}
</style>
