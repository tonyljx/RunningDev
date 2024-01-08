# 配置环境变量

## GITHUB: 配置oauth登录

1. 打开 [github oauth apps ](https://github.com/settings/developers) 页面
2. 点击 new Oauth App, 创建应用
   1. application name: 写和本次应用相关的name, 无强制要求
   2. homepage url：开发的时候写本次URL, 部署到线上需要写线上域名
   3. Authorization callback url:
      1. 开发的时候写本地回调url [http://localhost:3000/api/auth/callback/github](http://localhost:3000/api/auth/callback/github)
      2. 部署线上应用需要写线上版本的url: [https://hostname/api/auth/callback/github](https://hostname/api/auth/callback/github)

## GOOGLE：配置oauth登录

和github基本同理,注意有几点不同

- callback url的不同
- google oauth url不同: 参考[https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=zh-cn](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=zh-cn)

## 颜色配置

因为技术栈采取shadcn, 所以颜色配色方案可以参考 [https://ui.shadcn.com/themes](https://ui.shadcn.com/themes)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
