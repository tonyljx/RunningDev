"use client";
import { CheckCircle, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./fade-in";
import { cn } from "@/lib/utils";
import { useColorStore } from "@/store/color-store";

interface PriceProps extends React.HTMLProps<HTMLDivElement> {
  // 你的自定义属性
}

export default function Price({ className }: PriceProps) {
  const themeColor = useColorStore((state) => state.themeColor);

  const [isMonth, setIsMonth] = useState(true);

  const sliderVariants = {
    monthly: { x: 0 },
    annually: { x: "95%" },
  };

  const priceStrategy = [
    {
      plan: "Standard",
      price: "free",
      desc: "Free to use",
      features: [
        "1 macOS device",
        "Pay once, use forever",
        "All screen Studio features",
        "1 year of updates",
      ],
    },
    {
      plan: "Extended",
      price: "$9.99",
      desc: "Great for multi-devices setups & small teams.",
      features: [
        "3 macOS device",
        "Pay once, use forever",
        "All screen Studio features",
        "1 year of updates",
      ],
    },
    {
      plan: "Pro",
      price: "$13.99",
      desc: "Pay per seat for your team.",
      features: [
        "unlimited macOS device",
        "All screen Studio features",
        "App updates during the subscription",
      ],
    },
  ];

  const yearPriceStrategy = [
    {
      plan: "Standard",
      price: "free",
      desc: "Free to use",
      features: [
        "1 macOS device",
        "Pay once, use forever",
        "All screen Studio features",
        "1 year of updates",
      ],
    },
    {
      plan: "Extended",
      price: "$7.99",
      desc: "Great for multi-devices setups & small teams.",
      features: [
        "3 macOS device",
        "Pay once, use forever",
        "All screen Studio features",
        "1 year of updates",
      ],
    },
    {
      plan: "Pro",
      price: "$11.99",
      desc: "Pay per seat for your team.",
      features: [
        "unlimited macOS device",
        "All screen Studio features",
        "App updates during the subscription",
      ],
    },
  ];

  return (
    <div className={cn(className)}>
      <FadeIn>
        <h2 className="animate-fade-up text-center text-3xl font-bold tracking-tight lg:text-5xl">
          Use template to speed up
        </h2>
      </FadeIn>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        Screen Studio is a one-time purchase. You get all the features in every
        plan.
      </p>

      {/* month or year plan */}
      <div className="relative mx-auto mt-3  grid w-1/3   grid-cols-2 rounded bg-slate-200 p-1">
        <div
          className={cn("z-10  cursor-pointer rounded p-1 text-center", {
            // "bg-slate-50": isMonth,
          })}
          onClick={() => setIsMonth(true)}
        >
          Monthly
        </div>
        <div
          className={cn("z-10  cursor-pointer rounded p-1 text-center", {
            // "bg-slate-50": !isMonth,
          })}
          onClick={() => setIsMonth(false)}
        >
          Annually
        </div>
        <motion.div
          className="absolute inset-1 z-0  w-1/2 rounded bg-slate-50"
          animate={isMonth ? "monthly" : "annually"}
          variants={sliderVariants}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="mt-12 grid w-full gap-8 md:grid-cols-3  md:gap-6">
        {/* plan */}
        {isMonth
          ? priceStrategy.map((item) => (
              <div
                key={item.plan}
                className={cn(
                  "flex flex-col gap-2 rounded-lg border bg-slate-100 px-8 py-10 transition-all duration-150 hover:-translate-y-2 hover:shadow-lg",
                )}
              >
                <h3 className=" bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-2xl font-semibold text-transparent">
                  {item.plan}
                </h3>
                <p className="text-3xl font-bold">{item.price}</p>
                <p className="text-muted-foreground">{item.desc}</p>

                {/* features */}
                <ul className="mb-6 mt-10 flex-1 space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircleIcon className="text-emerald-500" /> {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={cn(
                    "rounded bg-primary px-3 py-2 text-center font-medium text-slate-50 transition-all duration-150 ",
                    themeColor,
                  )}
                >
                  Getting Started
                </Link>
              </div>
            ))
          : // 否则是年度的订阅方案
            yearPriceStrategy.map((item) => (
              <div
                key={item.plan}
                className={cn(
                  "flex flex-col gap-2 rounded-lg border bg-slate-100 px-8 py-10 transition-all duration-150 hover:-translate-y-2 hover:shadow-lg",
                )}
              >
                <h3 className=" bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-2xl font-semibold text-transparent">
                  {item.plan}
                </h3>
                <p className="text-3xl font-bold">{item.price}</p>
                <p className="text-muted-foreground">{item.desc}</p>

                {/* features */}
                <ul className="mb-6 mt-10 flex-1 space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircleIcon className="text-emerald-500" /> {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={cn(
                    "rounded bg-primary px-3 py-2 text-center font-medium text-slate-50 transition-all duration-150 ",
                    themeColor,
                  )}
                >
                  Getting Started
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
