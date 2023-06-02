<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="el-aside">
        <layout-aside></layout-aside>
      </el-aside>
      <el-container>
        <el-header class="el-header">
          <layout-header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import layoutHeader from "./components/Header.vue";
import layoutAside from "./components/Aside.vue";

</script>
<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  .el-aside{
    display: inline-block;
    background-color: #fff;
    width: auto;
  }
  .el-header{
    background-color: #fff;
    height: auto;
  }
}
</style>
