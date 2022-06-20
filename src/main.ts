import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LibUses from './components';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(LibUses).use(ElementPlus).use(store).use(router).mount('#app')
