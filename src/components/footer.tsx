import React from "react";
import { Icons } from "./ui/tony/icons";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="mt-20   flex w-full flex-wrap gap-10 border-t px-8 py-12 ">
      <div className="mr-auto flex flex-1 flex-col">
        <p className="flex-1">RunningDev</p>
        <div className="flex gap-1">
          <Link
            target="_blank"
            href="https://twitter.com/abc30037274"
            className=" rounded p-2 transition-colors duration-150 hover:bg-slate-200"
          >
            <Icons.X className="h-4 w-4" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/tonyljx/saas-lightweight-template"
            className="rounded p-2 transition-colors duration-150 hover:bg-slate-200"
          >
            <Icons.gitHub className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="flex flex-1 gap-32">
        <div className="flex flex-col gap-3">
          <p className="font-bold">Product</p>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-violet-500"
          >
            Features
          </Link>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-violet-500"
          >
            Pricing
          </Link>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-violet-500"
          >
            Docs
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Resources</p>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-violet-500"
          >
            NextJs
          </Link>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-violet-500"
          >
            React
          </Link>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-violet-500"
          >
            Shadcn
          </Link>
        </div>
      </div>
    </footer>
  );
}
