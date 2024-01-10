import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/ui/tony/color-picker";
import { AccordionFAQ } from "@/components/ui/tony/faq";
import Features from "@/components/ui/tony/features";
import { Icons } from "@/components/ui/tony/icons";
import Mansory from "@/components/ui/tony/mansoryv2";
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
          Modern Next.Js Template
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
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&project-name=saas-lightweight-template&repository-name=saas-lightweight-template"
            className=" flex items-center gap-2 rounded border bg-slate-100 px-4 py-2  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <Icons.vercel className="h-4 w-4" />
            <span>Deploy to vercel</span>
          </Link>
          {/* <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftonyljx%2Fsaas-lightweight-template&skippable-integrations=1">
            <img
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              className="px-4 py-2"
            />
          </a> */}
        </div>
      </div>

      <ColorPicker />

      <Features className="mt-[3rem]" />

      <TechStack className="mt-[3rem]" />

      <Mansory className="mt-[10rem]" />

      {/* 付款页面 */}
      <Price />

      {/* FAQ */}
      <AccordionFAQ />

      {/* rotate card */}
      <RotateCard />

      <footer className="h-screen"></footer>
    </main>
  );
}
