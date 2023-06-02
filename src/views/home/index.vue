<template>
  <div>
    <h1>我是home</h1>
    <el-button round @click="" size="large">重置</el-button>
    <el-button plain>朴素按钮</el-button>
    <el-button>默认按钮</el-button>
    <div>
      {{globalStore.token}}
    </div>
    <div>
      {{ globalStore.userInfo }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store/modules/global";

const globalStore = GlobalStore()

</script>

<style scoped>

</style>