import request from '../untils/request'

export const getExam = (data) => request.post("/submitExam", data, {
    headers: {
        token: window.localStorage.getItem("token")
    }
})