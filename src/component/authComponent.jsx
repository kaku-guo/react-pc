// 判断token是否存在，如果存在正常渲染，否则重定向到登录页
import { getToken } from "../utils"
import { Navigate } from "react-router-dom"

const AuthComponent = ({ children }) => {
    const isToken = getToken()
    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' replace />
    }
}

export default AuthComponent