"use client";
import React from "react";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { ThemeColor, useColorStore } from "@/store/color-store";
import { cn } from "@/lib/utils";
import { Check, CheckCircle } from "lucide-react";

type Props = {};

//引入zustand的修改函数

export default function ColorPicker({}: Props) {
  const themeColor = useColorStore((state) => state.themeColor);

  const colors = [
    //
    {
      colorHsl: "hsl(240 6% 10%)",

      colorEnum: ThemeColor.Zinc,
    },
    // 蓝色
    {
      colorHsl: "hsl(221,83%,53%)",

      colorEnum: ThemeColor.Blue,
    },
    // 绿色
    {
      colorHsl: "hsl(153, 47%, 49%)",

      colorEnum: ThemeColor.Green,
    },
    // purple
    {
      colorHsl: "hsl(258, 90%, 66%)",

      colorEnum: ThemeColor.Violet,
    },
  ];

  const updateColor = useColorStore((state) => state.changeColor);
  // 在一个 React 组件中
  function updatePrimaryColor(newColor: ThemeColor) {
    // document.documentElement.style.setProperty("--primary", newColor);
    updateColor(newColor);
  }

  return (
    <div className="">
      <div className="flex gap-3">
        {colors.map((color, idx) => (
          <Button
            key={idx}
            className={cn("rounded-full p-2", {})}
            variant="outline"
            style={
              {
                "--theme-primary": color.colorHsl,
              } as React.CSSProperties
            }
            onClick={() => updatePrimaryColor(color.colorEnum)}
          >
            <span className="flex h-6 w-6 rounded-full bg-[--theme-primary] p-[3px]"></span>
          </Button>
        ))}
      </div>
    </div>
  );
}
