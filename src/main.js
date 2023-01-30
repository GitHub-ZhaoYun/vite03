import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Elicons from '@element-plus/icons-vue';
const app = createApp(App)
//全局注册 elementplus icon
Object.keys(Elicons).forEach((key) => {
    app.component(key, Elicons[key]);
});
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
