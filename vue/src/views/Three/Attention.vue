<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="itemBox"
      @click="detailEvent(item, index)"
    >
      <h3>{{item.name}}</h3>
      <p>{{item.text}}</p>
      <span>点赞：{{item.count}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //模拟数据
      list: [
        {
          name: '怎么看待结婚后与父母一起住',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师傅大法师',
          count: 0
        },
        {
          name: '怎么看待结婚后与父母一起住?',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师傅大法师',
          count: 120
        },
        {
          name: '怎么看待结婚后与父母一起住？？',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师法师',
          count: 360
        },
        {
          name: '怎么看待结婚后与父母一起住',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师傅大法师',
          count: 480
        },
        {
          name: '怎么看待结婚后与父母一起住?',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师傅大法师',
          count: 240
        },
        {
          name: '怎么看待结婚后与父母一起住？？',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师法师',
          count: 640
        },
        {
          name: '怎么看待结婚后与父母一起住?',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师傅大法师',
          count: 980
        },
        {
          name: '怎么看待结婚后与父母一起住？？',
          text:
            '匿名用户第六十六看电视看电视了发射点发示范点发射点犯得上大师法师',
          count: 1000
        }
      ]
    }
  },
  methods: {
    //做点击事件 跳转--详情--路由 并传参之详情页面渲染
    detailEvent(item, index) {
      this.$router.push({
        name: 'detail',
        params: {
          item: item
        }
      })
    }
  }
}
</script>
<style lang="scss">
.itemBox {
  width: 95%;
  height: 2rem;
  border: 1px solid #ccc;
  padding-top: 0.2rem;
  margin-top: 0.18rem;
  margin-left: 0.18rem;
}
</style>