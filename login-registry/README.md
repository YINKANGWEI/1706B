#### 接口根地址

baseUrl: http://localhost:169.254.156.144:7001

统一格式: {
    code: 1,
    msg: 提示消息,
    data: 返回数据
}

状态码: 
200 成功 401 无权限 404 页面找不到 500 服务器报错

---------
#### 1.
#### 接口描述

获取身份信息

#### 接口地址

```
/identity
```

#### 接口请求方式

GET

#### 接口传参

```
{
    "code":1,
    "msg":"成功",
    "data":[
        {"id": 学生身份id, "title":"学生"},
        {"id":"老师身份id", "title":"老师"}
    ]
}
```

#### 接口返回值

```
{
    msg: "成功",
    code: 1,
    data: [
        {
          id: "身份id",
          title: "身份名称"
      } 
   ]
}
```

----------

#### 2.
#### 接口描述

注册

#### 接口地址

```
/registry
```

#### 接口请求方式

POST

#### 接口传参

```
参数名称 | 参数说明
---|---
userName | 用户名
password | 密码
userCode | 学号(可选)
ckeck | 身份id
```

#### 接口返回值

```
{
    "code":1,
    "msg":"注册成功"
}
```


------
#### 3.
#### 接口描述

用户登录

#### 接口地址

```
/login
```

#### 接口请求方式

POST

#### 接口传参

```
参数名称 | 参数说明
---|---
userName | 用户名
password | 密码
```

#### 接口返回值

```
{
    "code":1,
    "msg":"登录成功",
    "data": {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InE2Ym13dGo5Z2MiLCJ1c2VyTmFtZSI6IuWNl-i2iiIsInBhc3N3b3JkIjoiMTIzNDU2IiwiY2hlY2siOiJhYmMxMjMiLCJ1c2VyQ29kZSI6ImExdjNnNCIsImlhdCI6MTU3NjA2NTc3MH0.DuG9S4IUUXv31vV0vmhCOijRo-rfj3xxnD74OptSw6o(用户身份令牌)"
    }
}
```
------
#### 4.
#### 接口描述

获取用户身份信息

#### 接口地址

```
/getUserInfo
```

#### 接口请求方式

GET

#### 接口传参

```
登录时通过headers携带身份id令牌(token)字段
```

#### 接口返回值

```
{
    "id":"q6bmwtj9gc",
    "userName":"南越",
    "password":"123456",
    "check":"abc123",
    "userCode":"a1v3g4",
    "iat":1576065770,
    "userTitle":"学生",
    "viewList": [{
        "name":"submit",
        "title":"提交成绩"
        }, {
            "name":"show",
            "title":"查看成绩"
        }
    ]
}
```