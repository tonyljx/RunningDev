import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "zh"],

  // Used when no locale matches
  defaultLocale: "zh",

  // 配置这个 默认url不显示多语言后缀
  // https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix-as-needed
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(zh|en)/:path*"],
};
