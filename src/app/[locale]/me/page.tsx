import Confetti from "@/components/ui/tony/confetti";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div className="mx-auto mt-6 flex h-[80vh] max-w-[800px] flex-col items-center gap-8 px-6 text-center">
      <h2 className="mb-8 text-3xl font-semibold">VIVIDCODE LTD</h2>
      <p className="text-2xl font-semibold">
        We are a company developing saas sevice for global customers, currently
        we provide RunningDev, a lightweight saas nextjs template
      </p>
      <p className="text-muted-foreground">Email: 15889666941@163.com</p>
      <Confetti />
    </div>
  );
}
