import { createApp } from 'vue'
import App from './App.vue'
import ToastProvider from './components/ToastProvider.vue'

const app = createApp(ToastProvider)
app.component('App', App)
app.mount('#app')
