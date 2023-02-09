<template>
    <div class="header-content">
        <logo v-if="isShowLogo"></logo>
        <div class="header" :class="{ 'has-logo': isShowLogo }">
            <div class="header-left">
                <fold v-if="!isCollapse" class="navbar-icon _fold" @click="changeCollapse(true)"/>
                <expand v-else class="navbar-icon _fold" @click="changeCollapse(false)"/>
                <el-breadcrumb separator="/">
                    <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
                    <el-breadcrumb-item v-for="item in breadcrumb" :key="item.menuId">
                        {{ item.menuName }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
                <slot name="sidebar"></slot>
            </div>
            <div class="header-right">
                <full-screen></full-screen>
                <el-dropdown @command="changeLanguage">
                    <el-icon style="font-size: 18px;">
                        <svg-icon name="language"></svg-icon>
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <!-- command绑定值"zh"  disabled是标签属性,不然选择-->
                            <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'"
                            >中文
                            </el-dropdown-item>
                            <!-- command绑定值"zh" disabled是标签属性,不然选择-->
                            <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
                            >English
                            </el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <user-info></user-info>
                <el-icon>
                    <Tools @click="showSetting"/>
                </el-icon>
            </div>
        </div>
    </div>
    <system-setting ref="setting1"></system-setting>
</template>

<script>
import {reactive, toRefs, computed, watch} from 'vue'
import SystemSetting from '../setting/index.vue'
import Logo from '../Logo.vue'
import FullScreen from './FullScreen.vue'
import {useStore} from 'vuex'
import {getBreadcrumb} from '@/utils/storage'
import UserInfo from './UserInfo.vue'
import {usePiniaStore} from '@/stores/language'

export default {
    components: {
        SystemSetting,
        Logo,
        FullScreen,
        UserInfo
    },
    props: {
        showLogo: Boolean
    },
    setup(props) {
        const store = useStore()
        const data = reactive({
            setting1: null,
            breadcrumb: getBreadcrumb()
        })

        // 显示设置页面
        const showSetting = () => data.setting1.showDraw()

        // 是否显示Logo
        const isShowLogo = computed(() => {
            return props.showLogo
        })

        // 是否折叠菜单
        const isCollapse = computed(() => {
            return store.state.isCollapse
        })

        // 切换菜单状态
        const changeCollapse = (value) => store.commit('getCollapse', value)

        watch(
            () => store.state.activeMenu,
            (value, old) => (data.breadcrumb = getBreadcrumb())
        )
        const {proxy} = getCurrentInstance();
        //获取当前的语言是什么,让页面标签el-dropdown-item变成灰色不然点击,只能让其点击没选中的
        const piniaStore = usePiniaStore();
        let {currentLanguage} = storeToRefs(piniaStore);
        const changeLanguage = (val) => { //接受参数。是上方lang文件设置的。message  zh还是en
            currentLanguage.value = val;
            proxy.$i18n.locale = val == 'zh' ? 'zh' : val == 'en' ? 'en' : '';
        }
        const params = toRefs(data)
        return {
            ...params,
            changeLanguage,
            currentLanguage,
            showSetting,
            isShowLogo,
            isCollapse,
            changeCollapse
        }
    }
}
</script>

<style></style>
