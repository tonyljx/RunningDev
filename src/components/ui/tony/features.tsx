"use client";
import React from "react";
import FadeIn from "./fade-in";
import {
  BarChart,
  BarChartIcon,
  Boxes,
  PlugIcon,
  RocketIcon,
  Smartphone,
  UserPlusIcon,
  UserRoundPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useColorStore } from "@/store/color-store";

interface FeatureProps extends React.HTMLProps<HTMLDivElement> {
  // 你的自定义属性
}

export default function Features({ className }: FeatureProps) {
  const themeColor = useColorStore((state) => state.themeColor);

  const features = [
    {
      title: "Onboarding",
      desc: "Streamlined, step-by-step user onboarding for quick adoption.",
      icon: <UserRoundPlus className="text-slate-50" />,
    },
    {
      title: "Integration",
      desc: "Unified third-party integration management to simplify workflows.",
      icon: <PlugIcon className="text-slate-50" />,
    },
    {
      title: "Analytics",
      desc: "Detailed analytics on user engagement and product usage for informed decision-making.",
      icon: <BarChartIcon className="text-slate-50" />,
    },
    {
      title: "Responsive Design",
      desc: "Optimized for all devices, ensuring a seamless experience across desktop, tablet, and mobile.",
      icon: <Smartphone className="text-slate-50" />, // Replace with appropriate icon from Lucide
    },
    {
      title: "Production",
      desc: "Ready for your production",
      icon: <RocketIcon className="text-slate-50" />, // Replace with actual Accessibility icon from Lucide
    },
    {
      title: "Extensive Components",
      desc: "Ensuring the platform is accessible to all users.",
      icon: <Boxes className="text-slate-50" />, // Replace with actual Accessibility icon from Lucide
    },
  ];

  return (
    <div className={cn("w-full space-y-3", themeColor, className)}>
      <FadeIn>
        <h2 className="animate-fade-up text-center text-3xl font-bold tracking-tight lg:text-5xl">
          Features
        </h2>
      </FadeIn>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        Saas lightweight template is all you nedd for your next Saas business
      </p>
      <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 rounded-lg border p-5 shadow"
          >
            <div className="self-start rounded-full bg-primary p-3">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground"> {item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
