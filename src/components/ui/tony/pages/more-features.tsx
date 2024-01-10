import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent } from "../../card";
import RotateCard from "../rotate-card";
import Image from "next/image";
import { Icons } from "../icons";
import { Languages } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "../../button";
interface Ifeatures extends React.HTMLProps<HTMLDivElement> {}

// https://linear.app/features/asks

function FeatureCard({
  title,
  desc,
  demo,
  direction,
  size,
}: {
  title: string;
  desc: string;
  demo: React.ReactNode;
  direction?: string;
  size?: string;
}) {
  if (direction && direction == "vertical") {
    return (
      <Card
        className={cn(
          "grid h-96 grid-cols-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md",
          {
            "items-center md:col-span-2": size === "large",
          },
        )}
      >
        <div className=" my-auto max-w-md pl-3 md:pl-6">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <div className="prose-sm md:prose">
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {desc}
            </ReactMarkdown>
          </div>
        </div>
        <div>{demo}</div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "flex h-96 flex-col  gap-2   overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md",
        {
          "md:col-span-2": size === "large",
        },
      )}
    >
      <div className="  flex  h-full max-w-md flex-col items-center text-center">
        <div className="mt-2 flex flex-1 items-center justify-center md:mt-3">
          {demo}
        </div>
        <div className="flex-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                />
              ),
            }}
          >
            {desc}
          </ReactMarkdown>
        </div>
      </div>
    </Card>
  );
}

export default function MoreFeature({ className }: Ifeatures) {
  const features = [
    {
      title: "I18n support",
      desc: "use [Next-Intl](https://next-intl-docs.vercel.app/) to support i18n",
      demo: <Languages />,
      size: "small",
    },
    {
      title: "Reusable components",
      desc: "create mutiple reusable components based on [shadcn](https://ui.shadcn.com/)",
      demo: (
        <div className="flex flex-col gap-3 p-3">
          <RotateCard className="h-36 bg-cyan-50">Hover Me</RotateCard>
          <Button>Button</Button>
        </div>
      ),
      direction: "vertical",
      size: "large",
    },

    {
      title: "Built-in Auth + Database",
      desc: "RunningDev comes with authentication and database via [Auth.js](https://authjs.dev/)",
      demo: (
        <div className="flex items-center justify-center space-x-20">
          <Image
            alt="Auth.js logo"
            src="/authjs.webp"
            width={50}
            height={50}
            unoptimized
          />
          {/* <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} /> */}
        </div>
      ),
    },
    {
      title: "Lemon Squeezy",
      desc: "Add payment to current Saas Template *coming soon*",
      demo: <Icons.lemon className="h-10 w-10" />,
    },
    {
      title: "One-click deploy",
      desc: "Deploy RunningDev to [Vercel](https://vercel.com/) in one click",
      demo: (
        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftonyljx%2Fsaas-lightweight-template">
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>
      ),
    },
  ];

  return (
    <div
      className={cn("grid w-full grid-cols-1 gap-5 md:grid-cols-3", className)}
    >
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          demo={feature.demo}
          desc={feature.desc}
          direction={feature.direction}
          size={feature.size}
          title={feature.title}
        />
      ))}
    </div>
  );
}
