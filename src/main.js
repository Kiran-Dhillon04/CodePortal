import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { createPinia } from 'pinia';
import { store } from "./store";

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);
app.use(store);
app.mount('#app');