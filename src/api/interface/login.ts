// * 登录
export namespace Login {
  export interface ReqLoginForm {
    name: string;
    password: string;
  }
  export interface ResLogin {
    token: string;
  }
  export interface ResAuthButtons {
    [propName: string]: any;
  }
}
