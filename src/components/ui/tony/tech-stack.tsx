import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import react from "../../../../public/react.svg";

interface techProps extends React.HTMLProps<HTMLDivElement> {}

export default function TechStack({ className }: techProps) {
  return (
    <div className={cn("w-full", className)}>
      <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight text-muted-foreground lg:text-3xl">
        Tech Stack
      </h2>
      <div className={cn("flex h-12 w-full justify-between gap-3 md:h-auto")}>
        <Image
          width="75"
          height="75"
          src="/react.svg"
          alt="React"
          title="React"
        />
        <Image
          width="75"
          height="75"
          src="next.svg"
          alt="Next.js"
          title="Next.js"
        />
        <Image
          width="75"
          height="75"
          src="/tailwindcss.svg"
          alt="Tailwind CSS"
          title="Tailwind CSS"
        />
        <Image
          width="75"
          height="75"
          src="/ts.svg"
          alt="TypeScript"
          title="TypeScript"
        />
        <Image
          width="75"
          height="75"
          src="/shadcnui.svg"
          alt="shadcnui"
          title="shadcnui"
        />
        {/* <Image
          width="75"
          height="75"
          src="/prisma.svg"
          alt="prisma"
          title="prisma"
        /> */}
        <Image
          width="75"
          height="75"
          src="/framer.svg"
          alt="framer"
          title="framer"
        />
        <Image
          width="75"
          height="75"
          src="/authjs.webp"
          alt="nextauth"
          title="nextauth"
          unoptimized
        />
      </div>
    </div>
  );
}
