import { createApp } from 'vue'
import App from './App.vue'
import { injectionKey, store } from '@/store'
import router from '@/router'

import './main.scss'

const app = createApp(App)

app.use(router)
app.use(store, injectionKey)

app.mount('#app')
