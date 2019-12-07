<template>
  <el-container class="wrap">
    <el-aside width="200px">
      <div>
        <img
          src="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=31ae4c2cac611321b2816410a594ec94&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F9f5b6ac2d5628535ddc0f85898ef76c6a7ef63b5.jpg"
          alt
        />
      </div>
    </el-aside>
    <el-main>
      <el-header>Header</el-header>Main
    </el-main>
  </el-container>
</template>
<script>
import { getUserInfo } from "../../api/info";
export default {
  data() {
    return {}
  }
}
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
</style>