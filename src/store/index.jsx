// 整合所有模块，导出一个统一的方法useStore
import React from "react";
import LoginStore from "./login";
import UserStore from "./username";

class RootStore {
    constructor(){
        this.LoginStore = new LoginStore()
        this.UserStore = new UserStore()
    }
}

// 实例化根导出useStore，context
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore