<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  component: {}
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100vw/750 * 100);
}
</style>
