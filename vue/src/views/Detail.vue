<template>
  <div>
    <span @click="btnBack()" class="btn">返回</span>
    <dl>
      <dt></dt>
      <dd>
        <h3>{{item.name}}</h3>
        <p>{{item.text}}</p>
        点赞：<span @click="addEvent()" ref="span">{{item.count}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  created() {
    // 打印查看 跳转过来的详情信息 是否接到
    this.item = this.$route.params.item
  },
  watch: {},
  methods: {
    btnBack() {
      window.history.back()
    },
    addEvent() {
      console.log()
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-block;
  width: 50px;
  height: 35px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 35px;
}
</style>