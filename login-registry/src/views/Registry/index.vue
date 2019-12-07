<template>
  <el-container>
    <el-form :model="userInfo" :rules="userRule" ref="myform">
      <el-form-item label="身份" prop="check">
        <el-select v-model="userInfo.check">
          <el-option
            :value="item.id"
            v-for="item in options"
            :key="item.id"
            :label="item.title"
          >{{item.title}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item label="学号" prop="userCode" v-if="userInfo.check==='abc123'">
        <el-input v-model="userInfo.userCode"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import { getIdentity, sendIdentity } from "../../api/registry";
export default {
  data() {
    return {
      userInfo: {
        userName: "",
        password: "",
        check: "",
        userCode: ""
      },
      userRule: {
        userName: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "change"
          }
        ],
        userCode: [
          {
            required: true,
            message: "请输入学号",
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
        ],
        check: [
          {
            required: true,
            message: "请输入身份",
            trigger: "change"
          }
        ]
      },
      options: []
    };
  },
  mounted() {
    getIdentity().then(({ data }) => {
      this.options = data.data;
      this.userInfo.check = this.options[0].id
    });
  },
  methods: {
    submit() {
      this.$refs["myform"].validate(res => {
        console.log("res...", res);
        if (res) {
          sendIdentity(this.userInfo).then(data => {
            if (data.data.code) {
              alert(data.data.msg);
              this.$router.push("/login");
            }
          })
          return;
        }
      })
    }
  }
}
</script>
<style lang="scss">
</style>