<template>
  <div id="but">
    <el-row type="flex" justify="center">
      <el-col :span="2">
        <div class="logo">
          <img src="" alt="logo">
        </div>
      </el-col>
      <el-col :span="12">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <a href="https://www.ele.me" target="_blank">Orders</a>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="10">
        <div class="login"></div>
      </el-col>
    </el-row>
    <!-- <div class="line"></div>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-submenu index="2">
          <template slot="title1">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </el-menu-item>
      </el-menu> -->
  </div>
</template>
<script>
export default {
  name: 'but',
  data() {
    return {
      activeIndex: '2-1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
  .logo,.login{
    height: 60px;
    line-height: 60px;
    background-color: #324157;
  }
  .logo{
    border-radius: 3px 0 0 3px;
  }
  .login{
    border-radius: 0 3px 3px 0;
  }
  .el-menu{
    border-radius: 0 !important;
  }
</style>
