<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="el-aside">
        <home-aside></home-aside>
      </el-aside>
      <el-container>
        <el-header class="el-header">
          <home-header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import homeHeader from "@/components/home/Header.vue";
import homeAside from "@/components/home/Aside.vue";

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
