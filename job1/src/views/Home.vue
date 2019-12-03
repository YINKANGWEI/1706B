<template>
  <div class="first">
    <div class="box">
      <div class="top">
        <div class="top3">
          <span class="top1">&lt;</span>
          <span class="top2">客户账户</span>
        </div>
      </div>
      <div class="top4">
        <input type="text" placeholder="输入客户名称，手机号，备注名" v-model="val" />
        <button @click="search">搜索</button>
      </div>
    </div>
    <div class="wrap">
      <div class="center">
        <div
          v-for="(item,index) in tab"
          :key="index"
          @click="btn(index)"
          :class="index==isNow?'active':''"
          class="center"
        >
          {{item.name}}
          <b v-if="item.num">{{item.num}}</b>
        </div>
      </div>
      <div class="list">
        <div v-for="(item, index) in allData" :key="index" class="list-item">
          <div class="left">
            <h3>{{item.name}}</h3>
          </div>
          <div class="right">
            <h4>￥{{item.price}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  components: {},
  data() {
    return {
      val: "",
      tab: [
        {
          name: "全部",
          type: "all",
          num: ""
        },
        {
          name: "云进货商",
          type: "grocers",
          num: ""
        },
        {
          name: "关注用户",
          type: "like",
          num: ""
        },
        {
          name: "成交",
          type: "ok",
          num: ""
        }
      ], //切换
      isNow: 0, //下标
      list: [], //列表
      allData: []
    };
  },
  async mounted() {
    let res = await axios.get("/api/get/list");
    this.list = res.data;
    this.setTab(this.list);
    this.setAlldata(this.tab[this.isNow].type);
  },
  methods: {
    //计算每个的数据 全部37 云进货商7 关注用户7 成交23
    setTab(list) {
      this.tab = this.tab.map((item, index) => {
        if (item.type === "all") {
          item.num = list.length;
        } else {
          item.num = list.reduce((total, val) => {
            total += val.type === item.type ? 1 : 0;
            return total;
          }, 0);
        }
        return item;
      });
    },
    setAlldata(type) {
      if (type === "all") {
        this.allData = this.list;
      } else {
        this.allData = this.list.filter(item => item.type === type);
      }
    },
    //切换类名的
    btn(index) {
      this.isNow = index;
      this.setAlldata(this.tab[index].type);
    },
    search() {
      if (this.val) {
        axios
          .get("/api/get/seach", {
            params: {
              val: this.val
            }
          })
          .then(res => {
            this.allData = res.data
          });
      } else {
        alert("请输入val值");
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.first {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .box {
    width: 100%;
    height: 150px;
    background: orange;
  }
  .wrap {
    flex: 1;
    overflow: auto;
  }
}

.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .center {
    width: 100%;
    height: 50px;
  }
  .list {
    flex: 1;
    overflow: auto;
  }
}

.top {
  width: 100%;
  height: 150px;
}
.top3 {
  width: 100%;
  height: 50px;
  color: white;
  margin-top: 10px;
}
.top2 {
  margin-left: 150px;
  font-size: 16px;
}
.top1 {
  font-size: 40px;
}
.top4 {
  margin-top: -40px;
  width: 100%;
  height: 40px;
  input {
    width: 80%;
    height: 30px;
    border: solid 1px white;
    border-radius: 15px;
    background: orange;
    margin-left: 2%;
    padding-left: 10px;
    color: white;
    outline: none;
  }
  button {
    width: 50px;
    height: 30px;
    margin-left: 3px;
    background: none;
    border: none;
    outline: none;
  }
}
.center {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
.center1 {
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.active {
  color: orange;
}

.list {
  width: 100%;
  .list-item {
    display: flex;
  }
}

.list-item {
  width: 100%;
  height: auto;
  margin-top: 10px;
  .left {
    flex: 2;
  }
  .right {
    width: 100px;
    height: 100%;
    text-align: center;
  }
}

dl {
  display: flex;
}
img {
  width: 80px;
  height: 80px;
}

dl dd {
  span {
    color: #ccc;
  }
}
</style>
