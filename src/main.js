import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

import '@/css/styles.css'

import router from './router/router'

createApp(App)
    .use(router)
    .mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
