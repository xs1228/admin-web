<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="userStore.isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <slot>
        <h3 class="logo">{{ userStore.isCollapse ? "后台" : "通用后台管理系统" }}</h3>
      </slot>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Na</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { useHomeStore } from "@/store/home";

const userStore = useHomeStore();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
  background-color: #fff;

  .el-menu-vertical {
    height: 100vh;
    .logo {
      padding: 18px 0;
      width: 100%;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 300px;
  }
}
</style>
