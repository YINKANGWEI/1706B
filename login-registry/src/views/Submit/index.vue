<template>
  <el-form>
    <el-form-item label="理论成绩">
      <el-input v-model="theory" type="number"></el-input>
    </el-form-item>
    <el-form-item label="技能成绩">
      <el-input v-model="skill" type="number"></el-input>
    </el-form-item>
    <el-form-item label="选择时间">
      <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getExam } from "../../api/exam";
export default {
  data() {
    return {
      theory: "",
      skill: "",
      date: new Date().toLocaleDateString(),
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    }
  },
  methods: {
    submit() {
      let date = new Date(this.date).toLocaleDateString()
      getExam({
        theory: this.theory,
        skill: this.skill,
        date
      }).then(res => {
        this.$message({
          message: "提交成绩成功",
          type: "success"
        })
        this.$router.push("/index/show")
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>