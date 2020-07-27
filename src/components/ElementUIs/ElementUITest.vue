<template>
  <div id="apptwo">
    <router />
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-input-number
      v-moudle="num1"
      @change="handleChange"
      :min="1"
      :max="10"
    ></el-input-number>
    <br />
    <el-input placeholder="el输入框">a</el-input>
    <input placeholder="输入框">b</input>

  </div>
</template>

<script>
  export default {
    name: 'apptwo',
    data(){
      return {
        num1: 1
      };

    },
    moudles:{
      handleChange(value){
        console.log(value)
      }
    }
  }
</script>
