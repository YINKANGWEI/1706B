<template>
  <div class="deepBox">
    <div class="twoBox">
      <router-link to="/home/index/attention">关注</router-link>
      <router-link to="/home/index/remend">推荐</router-link>
      <router-link to="/home/index/hotPam">热榜</router-link>
    </div>
    <div class="cont">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: .4rem;
}
  .deepBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .twoBox{
      width: 100%;
      height: .6rem;
      background: #f2f2f2;
    }
    .cont{
      flex: 1;
      overflow: auto;
    }
  }

  .twoBox{
    display: flex;
    a{
      flex: 2;
      text-align: center;
      line-height: .6rem;
      text-decoration: none;
    }
  }

  .router-link-active{
    color: #00f;
    background: #fff;
  }
</style>