<template>
    <header>
        <div class='header-content'>
            <h1 class='content-logo'>
                <img src="../../assets/logo.svg">
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
                    <el-button link>
                        {{currentLanguage == 'zh' ? '中文' : '英文'}}
                    </el-button>
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
let currentLanguage = ref('zh');
const changeLanguage = (val) => { //接受参数。是上方lang文件设置的。message  zh还是en
    currentLanguage.value = val;
    proxy.$i18n.locale = val == 'zh' ? 'zh' : val == 'en' ? 'en' : '';
}
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
