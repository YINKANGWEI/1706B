import request from '../untils/request'


//identity 身份的接口
export const getIdentity = () => request.get("/identity")

//提交发送并注册
export const sendIdentity = (data) => request.post("/registry",data)

