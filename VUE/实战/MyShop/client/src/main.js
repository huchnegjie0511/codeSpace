import { createApp } from 'vue'
import './assets/style/style.css'
import App from './App.vue'
import router from './router'
import { Button,Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css';

const app=createApp(App);
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(router).mount('#app')
