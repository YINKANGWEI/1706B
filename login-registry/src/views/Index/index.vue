<template>
  <el-container class="wrap">
    <el-aside width="200px" style="background:#2F5F83">
      <div>
        <img :src="require('../../assets/timg.jpg')" alt />
      </div>
      <el-menu class="el-menu">
        <el-menu-item v-for="(item, index) in viewList" :key="index">
          <router-link :to="item.name">{{item.title}}</router-link></el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-header>
        <p style="float:right">{{userTitle}}:{{userName}}</p>
      </el-header>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import { getUserInfo } from "../../api/info";
export default {
  data() {
    return {
      userName: "",
      userTitle: "",
      viewList: []
    };
  },
  mounted() {
    getUserInfo()
      .then(res => {
        this.userName = res.data.userName;
        this.userTitle = res.data.userTitle;
        this.viewList = res.data.viewList;
        console.log(res.data);
      })
      .catch(error => {
        alert(error.response.data.msg);
      });
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-menu{
  li{
    background: #2F5F83;
    color: #fff;
  }
  li:hover{
    background: #ccc;
  }
}
</style>