<div align="center">
  <h1>RunningDev</h1>

  <p>🌏 现代化的NextJs网页开发模板 🌏</p>
   
   [English](./README.md)
</div>

<div align="center">
   <img width="50" src="./public/next.svg" alt="Next.js" title="Next.js"/> 
   <img width="50" src="./public/react.svg" alt="react.js" title="react.js"/> 
   <img alt="next-auth" width="50" src="./public/authjs.webp"/>
	 <img width="50" src="./public/tailwindcss.svg" alt="Tailwind CSS" title="Tailwind CSS"/>

</div>

## 特点

- 🌟基于最流行的技术栈:
  - [shadcn](https://ui.shadcn.com/): 是去年star增长数最多的技术栈, 因为其友好的样式以及基于 [tailwindcss](https://www.tailwindcss.cn/) 的样式二次开发
  - [Nextauth](https://next-auth.js.org/): 方便集成第三方登录、密码登录等常见登录功能
- 🌐i18n支持: 基于[next-intl](https://github.com/amannn/next-intl), 友好的支持国际化, **服务端/客户端**均给出示例, 可以方便的进行多流量设置
- 🚀oauth支持: 基于[Nextauth](https://next-auth.js.org/) 的登录模板, 目前实现了基于 google 和 github 的oauth 登录,详细配置见 [这里](#环境变量)

## RoadMap

- [ ] 集成Lemon Squeezy
- [ ] NextAuth
  - [ ] 登录
  - [ ] 注册

## 配置

### 颜色配置

因为UI采取shadcn, 所以颜色配色方案可以参考 [shadcn](https://ui.shadcn.com/themes)

### 环境变量

#### GITHUB: 配置oauth登录

1. 打开 [github oauth apps ](https://github.com/settings/developers) 页面
2. 点击 new Oauth App, 创建应用
   1. Application name: 写和本次应用相关的name, 无强制要求
   2. Homepage url：开发的时候写本次URL, 部署到线上需要写线上域名
   3. Authorization callback url: 开发的时候写本地回调url [http://localhost:3000/api/auth/callback/github](http://localhost:3000/api/auth/callback/github)，部署线上应用需要写线上版本的url: [https://hostname/api/auth/callback/github](https://hostname/api/auth/callback/github)

#### GOOGLE：配置oauth登录

和github基本同理,注意有几点不同

- callback url的不同
- google oauth url不同: 参考[https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=zh-cn](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=zh-cn)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tonyljx/saas-lightweight-template&type=Date)](https://star-history.com/#tonyljx/saas-lightweight-template&Date)
