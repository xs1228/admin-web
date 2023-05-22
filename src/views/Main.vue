<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">左侧菜单</el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import commonHeader from '@/components/common/Header.vue'
</script>
<style scoped>
.common-layout {
  /* width: 100%;
  height: 100%; */
}
</style>