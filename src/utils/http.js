// 在封装接口之前，先封装http的工具类
// 封装http的工具，可以帮我们为所有的接口增加一些统一的操作，比如请求头，统一的请求参数，统一的错误处理

// 可以使用自定义配置新建一个 axios 实例，这样我们就可以添加统一的请求头了

// 这样就创建了一个axios的实例，我们可以通过这个实例发送http请求，通过这个实例发送的时候
// 会使用我们自定义的配置
import axios from "axios";

const instance  = axios.create({
    baseURL: '',
    timeout: 10000,
    // 配置通用的请求头
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // 跨域请求，也携带鉴权信息
    withCredentials:true
});

// 添加请求拦截器
// 拦截到发送请求之前
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 可以添加统一的鉴权信息
    // 比如说我们的接口是token鉴权，可以在请求拦截器里，统一的设置请求的token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 我们可以对不同的错误进行统一的捕获和处理
    // debugger
    if (response.status === 200){
        // 请求成功
        return response.data;
    }else if(response.status === 404){
        // 跳转到404友好提示页面
    } else if(response.status === 403){
        alert("您没有权限，进行该操作")
    } else if (response.status === 401) {
        alert("请先登录")
    }else {
        console.error("系统错误请联系管理员")
        console.error(response)
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default instance;
