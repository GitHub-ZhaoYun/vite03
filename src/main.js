import { createApp } from 'vue'
import store from './stores'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Elicons from '@element-plus/icons-vue';
import i18n from './locales/lang/index'
const app = createApp(App).use(ElementPlus,{
    i18n:(key,value) => i18n.t(key,value),
})
//全局注册 elementplus icon
Object.keys(Elicons).forEach((key) => {
    app.component(key, Elicons[key]);
});
app.use(store)
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
