<template>
  <div class="footer">
    <router-link to="/home/index">首页</router-link>
    <router-link to="/home/idea">想法</router-link>
    <router-link to="/home/Shool">大学</router-link>
    <router-link to="/home/news">消息</router-link>
    <router-link to="/home/Mine">我的</router-link>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: .8rem;
  display: flex;
  a {
    flex: 2;
    text-align: center;
    line-height: .6rem;
    text-decoration: none
  }
}
</style>