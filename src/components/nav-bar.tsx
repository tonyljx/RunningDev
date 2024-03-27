"use client";
import React from "react";
import LoginModal from "./ui/tony/login-modal";
import { Icons } from "./ui/tony/icons";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useColorStore } from "@/store/color-store";
import LocaleSwitcher from "./locale-switcher";
import { Link as IntlLink } from "@/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
type Props = {};

export default function NavBar({}: Props) {
  const themeColor = useColorStore((state) => state.themeColor);
  const { data: session, status } = useSession();

  // 获取下一级的路由, 只返回最后的路由,同级路由返回Null
  // 参考 https://next-intl-docs.vercel.app/docs/routing/navigation
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  return (
    <header className=" flex w-full justify-between border-b px-6 py-2">
      <a href="/" className="flex items-center gap-3">
        {/* <Image height={24} width={100} src="/vercel.svg" alt="logo" /> */}
        <Icons.vercel />
        <span className="text-lg font-semibold">RunningDev</span>
      </a>

      <div className="flex items-center gap-2">
        <IntlLink
          className={cn(
            "mr-10 transition-colors duration-150 hover:text-sky-500",
            {
              "text-sky-500": pathname === "/about",
            },
          )}
          href="/about"
        >
          Changlog
        </IntlLink>

        <IntlLink
          className={cn(
            "mr-10 transition-colors duration-150 hover:text-sky-500",
            {
              "text-sky-500": pathname === "/me",
            },
          )}
          href="/me"
        >
          Contact Us
        </IntlLink>

        <IntlLink
          className={cn(
            "mr-10 transition-colors duration-150 hover:text-sky-500",
            {
              "text-sky-500": pathname === "/privacy-policy",
            },
          )}
          href="/privacy-policy"
        >
          Privacy
        </IntlLink>

        <IntlLink
          className={cn(
            "mr-10 transition-colors duration-150 hover:text-sky-500",
            {
              "text-sky-500": pathname === "/terms-of-service",
            },
          )}
          href="/terms-of-service"
        >
          Terms Of Service
        </IntlLink>

        {/* 多语言转换 */}
        <LocaleSwitcher />

        <Link
          target="_blank"
          href="https://twitter.com/abc30037274"
          className="z-10 mr-3 rounded p-2 transition-colors duration-150 hover:bg-slate-200"
        >
          <Icons.X className="h-4 w-4" />
        </Link>
        {/* <LoginModal /> */}
        {/* 区分登录和非登录 */}
        {!session ? (
          // 原始方式
          // <Button>
          //   <Link href="/api/auth/signin">Sign In</Link>
          // </Button>
          <LoginModal />
        ) : (
          <div className="flex items-center gap-2">
            {/* <span className="text-base font-bold">Hi</span> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {session?.user?.image ? (
                  <Avatar>
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/36184555?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20">
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {/* <Link
                    className="hover:text-blue-500"
                    href="/api/auth/signout"
                  >
                    <span>Log out</span>
                  </Link> */}
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
}
