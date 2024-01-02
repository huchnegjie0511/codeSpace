import { createApp } from 'vue'

import App from './App.vue'//    
import 'amfe-flexible'//自动设置大小
import router from './router'
import './assets/style/reset.css'
import { Button,Form, Field, CellGroup  } from 'vant';
import 'vant/lib/index.css';



const app = createApp(App);//const app = createApp(); createApp需要接受实参，因此需要将第三行的App传入到createApp（App）
app.use(router);
// 3. 注册你需要的组件
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')//所有use都需要放在mount之前否则会导致
