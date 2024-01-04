import { CheckCircle, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Price({}: Props) {
  const priceStrategy = [
    {
      plan: "Standard",
      price: "$89",
      desc: "Pay-Once license for you",
      features: [
        "1 macOS device",
        "Pay once, use forever",
        "All screen Studio features",
        "1 year of updates",
      ],
    },
    {
      plan: "Extended",
      price: "$189",
      desc: "Great for multi-devices setups & small teams.",
      features: [
        "3 macOS device",
        "Pay once, use forever",
        "All screen Studio features",
        "1 year of updates",
      ],
    },
    {
      plan: "Team",
      price: "Get in touch",
      desc: "Pay per seat for your team.",
      features: [
        "unlimited macOS device",
        "All screen Studio features",
        "App updates during the subscription",
      ],
    },
  ];

  return (
    <div className="">
      <h2 className="text-center text-3xl font-bold tracking-tight lg:text-5xl">
        Use template to speed up
      </h2>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        Screen Studio is a one-time purchase. You get all the features in every
        plan.
      </p>
      <div className="mt-12 grid w-full gap-8 md:grid-cols-3  md:gap-6">
        {/* plan */}
        {priceStrategy.map((item) => (
          <div
            key={item.plan}
            className="flex flex-col gap-2 rounded-lg border bg-slate-100 px-8 py-10 transition-all duration-150 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/50"
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
              className="rounded bg-violet-300 px-3 py-2 text-center font-medium transition-all duration-150 hover:bg-violet-400 hover:text-slate-50"
            >
              Getting Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
