<template>
  <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
    <router-link to="home">
      <el-menu-item index="1">首页</el-menu-item>
    </router-link>
    <router-link to="https://github.com/songhlc">
      <el-menu-item index="2">Github</el-menu-item>
    </router-link>
    router-link
    <el-menu-item index="3">博客</el-menu-item>
    <el-menu-item index="3">关于我</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
