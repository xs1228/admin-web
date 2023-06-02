import { Login } from "@/api/interface/login";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/login`, params);
};

// * 获取按钮权限
// export const getAuthorButtons = () => {
//   return http.get<Login.ResAuthButtons>(`/auth/buttons`);
// };

// * 获取菜单列表
// export const getMenuList = () => {
//   return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`);
// };
