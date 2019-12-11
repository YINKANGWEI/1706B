import request from '../untils/request'

export const getUserInfo = () => request.get("/getUserInfo",{
    headers: {
       token: window.localStorage.getItem("token")
    }
})