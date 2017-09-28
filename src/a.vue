<template>
  <div id="a">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/b' }">b</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/a' }">a</el-breadcrumb-item>
    </el-breadcrumb>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
    name: 'a',
  data(){
      return {
          msg: 'a'
      }
  }
}
</script>

