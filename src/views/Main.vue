<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">左侧菜单</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout {
  /* width: 100%;
  height: 100%; */
}
</style>