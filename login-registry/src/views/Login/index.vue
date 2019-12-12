<template>
  <el-container>
    <el-form :model="userInfo" :rules="userRule" ref="myform">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import { login } from "../../api/login";
export default {
  data() {
    return {
      userInfo: {
        userName: "",
        password: ""
      },
      userRule: {
        userName: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change"
          },
          {
            min: 6,
            max: 16,
            message: "请输入密码",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs["myform"].validate(res => {
        if (res) {
          login(this.userInfo).then(data => {
            if (data.data.code) {
              //登录
              window.localStorage.setItem("token",data.data.data.token)
              this.$router.push("/index")
            } else {
              this.$message.error(data.data.msg);
            }
          });
          return;
        }
      });
    }
  }
};
</script>
<style lang="scss">
</style>