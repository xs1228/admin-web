<template>
  <div class="header">
    <div class="left-content">
      <el-button
        class="menu"
        type="primary"
        :icon="Menu"
        @click="isCollapse = !isCollapse"
      />
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: HOME_URL }" key="/home">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="item in matched"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
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
import { Menu, ArrowRight } from "@element-plus/icons-vue";
import getLocalImg from "@/utils/getLocalImg";
import { LayoutStore } from "@/store/modules/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { HOME_URL } from "@/config/config";

const userStore = LayoutStore();
const { isCollapse } = storeToRefs(userStore);

const route = useRoute();

const matched = computed(() =>
  route.matched.filter(
    (item) => item.meta && item.meta.title && item.meta.title !== "首页"
  )
);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  .left-content {
    display: flex;
    align-items: center;
    .menu {
      margin-right: 18px;
    }
  }
  .right-content {
    padding: 0 16px;
    .user-logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}

.el-breadcrumb {
  font-size: 16px;
}
</style>
