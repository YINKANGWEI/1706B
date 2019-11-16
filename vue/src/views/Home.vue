<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer/index"; //引入组件
export default {
  name: "home",
  components: {
    Footer //把底部的二级路由放在 Fooer 组件中 并注册Footer 放到页面中
  }
};
</script>
<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .content{
      flex: 1;
      overflow: auto;
    }
    .footer{
      width: 100%;
      height: .6rem;
    }
  }
</style>
