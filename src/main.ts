import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './lang/i18n';
import { Icon } from "@iconify/vue";

import "virtual:fonts.css";
import 'virtual:windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component("Icon", Icon)
app.mount('#app')