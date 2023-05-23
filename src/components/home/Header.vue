<template>
  <div class="header">
    <div class="left-content">
      <el-button type="primary" :icon="Menu"  @click="isCollapse = !isCollapse"/>
    </div>
    <div class="right-content">
      <el-dropdown>
        <img class="user-logo" :src="getLocalImg('user.png')" alt="" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from "@element-plus/icons-vue";
import getLocalImg from "@/utils/getLocalImg";
import { useHomeStore } from '@/store/home'
import { storeToRefs } from 'pinia'

const userStore = useHomeStore()
const { isCollapse } = storeToRefs(userStore)

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  .right-content {
    padding: 0 16px;
    .user-logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
