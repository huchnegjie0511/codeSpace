import axios from 'axios';
import { showSuccessToast, showFailToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//请求拦截
axios.interceptors.request.use(config=>{//请求拦截
    const token =localStorage.getItem("token")
    if(token){//检查是否有token，如果有就存入头部
        config.headers["Authorization"]="Bearer"+token;
    }
    return config
},error=>{
    return Promise.reject(error);
})

// 响应拦截
axios.interceptors.response.use(
    response => {
      if(response.status !== 200) { // 程序错误
        showFailToast('服务端异常，请稍后重试');   
      }else{
        if(response.data.code !== "8000") { // 逻辑错误
          showFailToast(response.data.msg);
          return Promise.reject(response.data);
        }else{
          return response.data;
        }
      }
     
    }
  );

export default axios;
