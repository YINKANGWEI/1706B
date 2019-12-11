<template>
  <el-form>
    <el-form-item label="理论成绩">
      <el-input v-model="theory" type="number"></el-input>
    </el-form-item>
    <el-form-item label="技能成绩">
      <el-input v-model="skill" type="number"></el-input>
    </el-form-item>
    <el-form-item label="选择时间">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      theory: "",
      skill: "",
      value1: ""
    };
  },
  methods: {
    submit() {
      let date = this.value1.toLocaleDateString();
      console.log(this.theory, this.skill, date);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>