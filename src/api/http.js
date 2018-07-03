import axios from 'axios';
import {
  Message
} from 'iview';

const instance = axios.create({
  baseURL: '/baidu',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
});

// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

//添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    //在发送请求之前做某事
    return config;
  },
  (error) => {
    //请求错误时做些事
    Message.error('请求错误！')
    console.log('错误', error)
  });

//添加响应拦截器 做全局的错误判断
instance.interceptors.response.use(
  (response) => {
    // if (!response.data.succsee) { //这个地方要和亮亮约定好一个返回的字段，判断后端给的错误,axios会把返回的数据包装在data里面，所以要response.data获取
    //   Message.error(response.data.message);
    // }
    return response.data;
  },
  (error) => {
    //请求错误时做些事
    Message.error('请求错误！')
    console.log('错误', error)
  });
export default instance;
