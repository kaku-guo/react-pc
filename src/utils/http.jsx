// 封装axios
import axios from 'axios'
import { getToken } from "./token"

const http = axios.create({
    baseURL: "http://geek.itheima.net/v1_0",
    timeout: 5000,//超时时长5s
})
// 添加请求拦截器
http.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
// 添加响应拦截器
http.interceptors.response.use((response) => {
    // 200 成功
    return response.data
}, (error) => {
    // 失败
    if (error.response.status === 401) {
        window.location.href = '/login'
    }
    return Promise.reject(error)
})

export default http