<template>
  <div id="but">
    <header>
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <div class="logo">
            <img src="" alt="logo">
          </div>
        </el-col>
        <el-col :span="12">
          <span>共享中心</span>
        </el-col>
        <el-col :span="10">
          <div class="login">admin</div>
        </el-col>
      </el-row>
    </header>
    <div class="container">
      <div class="container-left">
        <el-menu default-active="2">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>导航二
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>导航三
          </el-menu-item> 
        </el-menu>
      </div>
      <div class="container-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'but',
  data() {
    return {
      activeIndex: '2-1',
      activeIndex2: '1',
      route: {
        to: '/b'
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
*{
  margin: 0;
  padding: 0;
}
#but{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 900px;
  header{
    flex: 1;
    background-color: #58B7FF;
  }
  .container{
    flex: 9;
    display: flex;
    justify-content: space-between;
    .container-left{
      background-color: #eef1f6
    }
    .container-right{
      flex: 0 0 80%;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
