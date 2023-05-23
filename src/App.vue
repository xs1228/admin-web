<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

import { onMounted } from 'vue'
 
onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#000');
  document.body.style.setProperty('--el-color-primary-light-9', '#000');
  document.body.style.setProperty('--el-color-primary-light-3', '#000');

})
</script>

<template>
  <router-view />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style lang="scss" scoped>

</style>
