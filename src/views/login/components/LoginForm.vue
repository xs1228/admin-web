<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="name">
			<el-input v-model="loginForm.name" placeholder="用户名">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" show-password v-model="loginForm.password" placeholder="密码">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round @click="" size="large">重置</el-button>
		<el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
			登录
		</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import { Login } from "@/api/interface/login";
import {useRouter} from 'vue-router'
import type { ElForm } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/store/modules/global";

type FormInstance = InstanceType<typeof ElForm>;

const globalStore = GlobalStore();

//form表单对象
const loginFormRef = ref<FormInstance>();

const loginRules = reactive({
	name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loginForm = reactive<Login.ReqLoginForm>({
	name: "xuanmao",
	password: "123456"
});

const router = useRouter();
const loading = ref(false)
// login
const login = (formEl: FormInstance | undefined) => {

	if (!formEl) return;
	formEl.validate(async valid => {
		
		if (valid) {
			loading.value = true;
			try {
				let requestLoginForm: Login.ReqLoginForm = {
					name: loginForm.name,
					password: loginForm.password
				};
				const res = await loginApi(requestLoginForm);
				globalStore.setToken(res.data!.token);
				globalStore.setUserInfo(res.data);
				ElMessage.success("登录成功！");
				router.push({ path: "/home" });
			} finally {
				loading.value = false;
			}
		}
	});
};
</script>

<style scoped lang="scss">
.el-form-item {
	margin-bottom: 35px;
}
.login-btn {
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	white-space: nowrap;
	.el-button {
		width: 185px;
	}
}
</style>
