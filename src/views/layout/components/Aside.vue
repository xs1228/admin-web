<template>
  <div class="aside">
    <el-menu
      default-active="index"
      class="el-menu-vertical"
      :collapse="userStore.isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <slot>
        <h3 class="logo">{{ userStore.isCollapse ? "后台" : "通用后台管理系统" }}</h3>
      </slot>
      <SubItem :menuList="menuList"></SubItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { LayoutStore } from "@/store/modules/layout";
import routes from "@/router/modules"; 
import SubItem from "./SubItem.vue";


// 获取路由导航是否展开标识符
const userStore = LayoutStore();

const menuList = routes.filter(item=> item.meta!.title != '登录')



const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
@import "../css/aside.scss";
</style>
