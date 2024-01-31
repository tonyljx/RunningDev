import Confetti from "@/components/ui/tony/confetti";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const items = [
  { event: "⭐️项目启动", date: "2024-01-12" },
  { event: "🎉新增路由, confetti效果", date: "2024-02-01" },
  { event: "未完待续~", date: "2024-02-28" },
];

export default function AboutPage({}: Props) {
  return (
    <div className="mx-auto mt-6 h-[80vh] max-w-[800px] px-6">
      <h2 className="mb-8 text-2xl font-semibold">Change Log</h2>
      <div className="relative">
        {items.map((item, key) => (
          <div key={key} className="relative pb-5">
            {/* line */}
            <div className="absolute bottom-0 left-1 top-0 w-1  border-l-2 "></div>
            {/* node */}
            <div
              className={cn(
                "absolute -left-[3px] h-4 w-4 rounded-full bg-sky-300",
                {
                  "top-0": key === 0,
                  "top-1": key !== 0,
                },
              )}
            ></div>
            <div className="flex flex-col gap-3 pl-8">
              <span>{item.event}</span>
              <span className="text-slate-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      <Confetti />
    </div>
  );
}
