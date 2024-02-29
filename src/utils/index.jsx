// 整合所有工具函数，统一导出
import http from "./http";
import { setToken, getToken, removeToken } from "./token"

export {
    http,
    setToken,
    getToken,
    removeToken
}