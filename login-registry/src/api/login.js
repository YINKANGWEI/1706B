import request from '../untils/request'


export const login = (data) => request.post("/login", data)