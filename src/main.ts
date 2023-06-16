import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ContextMenu from "web-contextmenu";

const app = createApp(App);
app.use(ContextMenu);

app.mount('#app')
