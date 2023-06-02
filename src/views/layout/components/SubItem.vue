<template>
	<template v-for="subItem in menuList" :key="subItem.path">
		<el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
			<template #title>
				<el-icon>
					<component :is="subItem.meta?.icon"></component>
				</el-icon>
				<span class="title">{{ subItem.meta?.title }}</span>
			</template>
			<SubItem :menuList="subItem.children" />
		</el-sub-menu>
		<el-menu-item v-else :index="subItem.path" @click="toPath(subItem.path)">
			<el-icon>
				<component :is="subItem.meta?.icon"></component>
			</el-icon>
			<template v-if="!subItem.meta?.isLink" #title>
				<span class="title">{{ subItem.meta?.title }}</span>
			</template>
			<template v-else #title>
				<a class="href title" :href="subItem.isLink" target="_blank">{{ subItem.meta?.title }}</a>
			</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from "vue-router";
defineProps<{ menuList: RouteRecordRaw[] }>();

const toPath = (path:string) => {
	console.log(path);
	
}
</script>

<style scoped lang="scss">
@import "../css/aside.scss";
</style>
