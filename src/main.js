import { createApp } from 'vue'
import App from './App.vue'
// import TheHeader from './components/TheHeader.vue'
import './bootstrap.min.css'
import './style.css'

createApp(App)
// global components
  // .component('the-header', TheHeader)
  .mount('#app')
