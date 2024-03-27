import React from "react";
import { Icons } from "./ui/tony/icons";
import Link from "next/link";
import Image from "next/image";
import { Link as IntlLink } from "@/navigation";
import { cn } from "@/lib/utils";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="mt-20   flex w-full flex-wrap gap-10 border-t px-8 py-12 ">
      <div className="mr-auto flex flex-1 flex-col">
        <p className="flex-1">RunningDev</p>

        <div className="flex items-center gap-1">
          <Link
            target="_blank"
            href="https://twitter.com/abc30037274"
            className=" rounded p-2 transition-colors duration-150 hover:bg-slate-200"
          >
            <Icons.X className="h-4 w-4" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/tonyljx/"
            className="rounded p-2 transition-colors duration-150 hover:bg-slate-200"
          >
            <Icons.gitHub className="h-4 w-4" />
          </Link>
          <Link
            href="https://ko-fi.com/F1F0QT7HI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={100}
              width={162} // 你需要提供正确的宽度
              src="/kofi_button_red.png"
              alt="Buy Me a Coffee at ko-fi.com"
              unoptimized
            />
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
          <IntlLink
            className={cn(
              "mr-10 transition-colors duration-150 hover:text-sky-500",
            )}
            href="/me"
          >
            Contact Us
          </IntlLink>

          <IntlLink
            className={cn(
              "mr-10 transition-colors duration-150 hover:text-sky-500",
            )}
            href="/privacy-policy"
          >
            Privacy
          </IntlLink>

          <IntlLink
            className={cn(
              "mr-10 transition-colors duration-150 hover:text-sky-500",
            )}
            href="/terms-of-service"
          >
            Terms Of Service
          </IntlLink>
        </div>
      </div>
    </footer>
  );
}
