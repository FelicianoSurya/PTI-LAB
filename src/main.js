import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueSession from "vue-session";

createApp(App).use(router).mount('#app')
window.axios = require('axios');
createApp(App).use(VueSession);
