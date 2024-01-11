<div align="center">
  <h1>RunningDev</h1>

  <p>🌏 Modern NextJs Web Development Template 🌏</p>
   
   [简体中文](./README-CN.md)
</div>

<div align="center">
   <img width="50" src="./public/next.svg" alt="Next.js" title="Next.js"/> 
   <img width="50" src="./public/react.svg" alt="react.js" title="react.js"/> 
   <img alt="next-auth" width="50" src="./public/authjs.webp"/>
	 <img width="50" src="./public/tailwindcss.svg" alt="Tailwind CSS" title="Tailwind CSS"/>

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
- Different google oauth url: Refer to [https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=zh-cn](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=zh-cn)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tonyljx/saas-lightweight-template&type=Date)](https://star-history.com/#tonyljx/saas-lightweight-template&Date)
