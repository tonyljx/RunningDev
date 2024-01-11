import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/ui/tony/color-picker";
import { AccordionFAQ } from "@/components/ui/tony/faq";
import Features from "@/components/ui/tony/features";
import { Icons } from "@/components/ui/tony/icons";
import Mansory from "@/components/ui/tony/mansoryv2";
import MoreFeature from "@/components/ui/tony/pages/more-features";
// import Mansory from "@/components/ui/tony/mansory";
import Price from "@/components/ui/tony/price";
import RotateCard from "@/components/ui/tony/rotate-card";
import TechStack from "@/components/ui/tony/tech-stack";
// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import Link from "next/link";

async function getGithubStars() {
  const res = await fetch(
    "https://api.github.com/repos/tonyljx/saas-lightweight-template",
  );
  if (!res.ok) {
    return;
  }
  const data = await res.json();
  return data?.stargazers_count;
}

export default async function Home() {
  const githubStar = await getGithubStars();

  // const t = useTranslations("Index");
  const t = await getTranslations("Index");

  return (
    <main className="flex flex-col items-center gap-3 px-6">
      <div className="mt-16 max-w-xl space-y-5">
        <h2 className="bg-gradient-to-r from-pink-500  to-violet-500 bg-clip-text text-center text-4xl font-bold text-transparent duration-1000 animate-in fade-in slide-in-from-bottom-5 md:text-7xl md:leading-[5rem]">
          {t("h1")}
        </h2>
        <p className="text-center text-muted-foreground duration-1000 animate-in fade-in slide-in-from-bottom-5">
          An template for your next project based on Next.js {t("title")}
        </p>

        <div className="flex justify-center gap-3">
          <Link
            target="_blank"
            href="https://github.com/tonyljx"
            className="flex items-center gap-2 rounded border bg-slate-100 px-4 py-2  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <Icons.gitHub className="h-4 w-4" />
            <span>Star on Github </span>
            <span className="">{githubStar}</span>
          </Link>

          <Link
            target="_blank"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftonyljx%2Fsaas-lightweight-template&env=GITHUB_APP_CLIENT_ID,GITHUB_APP_CLIENT_SECRET,GOOGLE_APP_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET&envDescription=api%20key%20for%20oauth%20login"
            className=" flex items-center gap-2 rounded border bg-slate-100 px-4 py-2  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <Icons.vercel className="h-4 w-4" />
            <span>Deploy to vercel</span>
          </Link>
        </div>
      </div>

      <ColorPicker />

      <Features className="mt-[3rem]" />

      <TechStack className="mt-[3rem]" />

      <MoreFeature className="mt-[4rem]" />

      <Mansory className="mt-[10rem]" />

      {/* 付款页面 */}
      <Price />

      {/* FAQ */}
      <AccordionFAQ />

      <div className="columns-3">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            I am FREAKING OUT. DesignerGPT is listed as number 1 in trending on
            OpenAI&#39;s official announcement for the store! Excuse me as I
            pass out!{" "}
            <a href="https://t.co/hnJ39j17n7">pic.twitter.com/hnJ39j17n7</a>
          </p>
          &mdash; Pietro Schirano (@skirano){" "}
          <a href="https://twitter.com/skirano/status/1745142589412495626?ref_src=twsrc%5Etfw">
            January 10, 2024
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            CSS tip:
            <br />
            <br />
            Are your numbers jumpy? That&#39;s because each digit can have a
            different width. This causes issues ranging from an unpleasant
            visual effect in a counter component to layout shifts in your UI 😬
            <br />
            <br />
            To fix this, use `font-variant-numeric` and `font-feature-setting`:{" "}
            <a href="https://t.co/Usbcn4dFNd">pic.twitter.com/Usbcn4dFNd</a>
          </p>
          &mdash; StackBlitz (@stackblitz){" "}
          <a href="https://twitter.com/stackblitz/status/1745063227124261004?ref_src=twsrc%5Etfw">
            January 10, 2024
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="zh" dir="ltr">
            给大家安利一下出海去社区的专属 Reddit 板块 - r/shipit
            <a href="https://t.co/WX1sU8moA3">https://t.co/WX1sU8moA3</a>
            <br />
            <br />
            分享你的出海产品，寻求 early adopters 反馈，和海外 indie hackers
            联动，都可以来这个 sub
            试试，近期我们会开始推广和运营这个板块，大家可以一起来玩！
            <br />
            <br />
            遇到问题（比如内容被系统过滤）可以私信我和{" "}
            <a href="https://twitter.com/lyc_zh?ref_src=twsrc%5Etfw">@lyc_zh</a>
            。
          </p>
          &mdash; Luo说不啰嗦 (@LuoSays){" "}
          <a href="https://twitter.com/LuoSays/status/1744932101303181625?ref_src=twsrc%5Etfw">
            January 10, 2024
          </a>
        </blockquote>
        <blockquote class="twitter-tweet">
          <p lang="zh" dir="ltr">
            推荐文章【独立开发的五年】，出海，然后随心所欲的活着
            <a href="https://t.co/YhIy6HnIy4">https://t.co/YhIy6HnIy4</a>{" "}
            <a href="https://t.co/sWF9JyUKi2">pic.twitter.com/sWF9JyUKi2</a>
          </p>
          &mdash; 花果山大圣 (@shengxj1){" "}
          <a href="https://twitter.com/shengxj1/status/1745169739800805543?ref_src=twsrc%5Etfw">
            January 10, 2024
          </a>
        </blockquote>

        <blockquote className="twitter-tweet">
          <p lang="zh" dir="ltr">
            在做产品初期验证的时候，技术上应该尽可能地“拿来主义”。
            <br />
            <br />
            看到同事吭哧吭哧写了一大堆代码,Code Review
            之前，我花了大概一分钟，在 Github
            上找到了一个经过时间验证、功能更加强大的组件代码，只需要 5min…
          </p>
          &mdash; Barret李靖 (@Barret_China){" "}
          <a href="https://twitter.com/Barret_China/status/1745209921891876933?ref_src=twsrc%5Etfw">
            January 10, 2024
          </a>
        </blockquote>
      </div>
    </main>
  );
}
