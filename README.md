<div align="center">
  <h1>RunningDev</h1>

  <p>🌏 Modern NextJs Web Development Template 🌏</p>
   
   [简体中文](./README-CN.md)
</div>

<div align="center">
   <img width="50" src="./public/next.svg" alt="Next.js" title="Next.js"/> 
   <img width="50" src="./public/react.svg" alt="react.js" title="react.js"/>
  <img width="50" src="./public/ts.svg" alt="ts" title="TypeScript"/>
  <img width="50" src="./public/tailwindcss.svg" alt="Tailwind CSS" title="Tailwind CSS"/>
  <img alt="next-auth" width="50" src="./public/authjs.webp"/>
</div>

## Features

- 🌟 Based on the most popular tech stack:
  - [shadcn](https://ui.shadcn.com/): The tech stack with the highest number of star increases last year, known for its user-friendly styles and secondary development of styles based on [tailwindcss](https://www.tailwindcss.cn/)
  - [Nextauth](https://next-auth.js.org/): Conveniently integrates third-party logins, password logins, and other common login features
- 🌐 i18n support: Based on [next-intl](https://github.com/amannn/next-intl), it supports internationalization in a user-friendly way, **server-side/client-side** examples are provided, allowing easy setup for multiple traffic configurations
- 🚀 oauth support: Based on the login template of [Nextauth](https://next-auth.js.org/), it currently implements oauth logins with Google and GitHub, with detailed configuration available [here](#environment-variables)

## RoadMap

- [ ] Integrate Lemon Squeezy
- [ ] NextAuth
  - [ ] Login
  - [ ] Registration

## Local Deployment

After cloning the project, refer to the `.env.example` to create a `.env` file, and configure the environment variables for the development environment as described in the [Configuration Documentation](#environment-variables) below.

```shell
npm i
npm run dev
```

> [!IMPORTANT]
> The configurations for the development environment and production environment are different, which should be noted.

## Deployment

One Click deploy to [vercel](https://vercel.com/)  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftonyljx%2Fsaas-lightweight-template&env=GITHUB_APP_CLIENT_ID,GITHUB_APP_CLIENT_SECRET,GOOGLE_APP_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET)

## Configuration

### Color Configuration

Since the UI adopts shadcn, the color scheme can refer to [shadcn](https://ui.shadcn.com/themes)

### Environment Variables

#### GITHUB: Configuring oauth login

1. Open the [github oauth apps](https://github.com/settings/developers) page
2. Click on new Oauth App to create an application
   1. Application name: Write a name related to this application, no strict requirements
   2. Homepage url: Write the local URL during development, and the online domain name when deployed
   3. Authorization callback url: Write the local callback url [http://localhost:3000/api/auth/callback/github](http://localhost:3000/api/auth/callback/github) during development, and the online version of the url: [https://hostname/api/auth/callback/github](https://hostname/api/auth/callback/github) when deploying the application online

#### GOOGLE: Configuring oauth login

Similar to github with a few differences:

- Different callback url
- Different google oauth url: Refer to [doc](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=en)

## About Me

- [X / Twitter](https://twitter.com/abc30037274)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tonyljx/saas-lightweight-template&type=Date)](https://star-history.com/#tonyljx/saas-lightweight-template&Date)
