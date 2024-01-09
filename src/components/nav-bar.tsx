"use client";
import React from "react";
import LoginModal from "./ui/tony/login-modal";
import Image from "next/image";
import { Icons } from "./ui/tony/icons";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useColorStore } from "@/store/color-store";

type Props = {};

export default function NavBar({}: Props) {
  const themeColor = useColorStore((state) => state.themeColor);
  const { data: session, status } = useSession();
  return (
    <header className="flex w-full justify-between border-b px-6 py-2">
      <a href="/" className="flex items-center gap-3">
        {/* <Image height={24} width={100} src="/vercel.svg" alt="logo" /> */}
        <Icons.vercel />
        <span className="text-lg font-semibold">NextJs Template</span>
      </a>
      <div className="flex items-center gap-2">
        <Link
          target="_blank"
          href="https://twitter.com/abc30037274"
          className="mr-3 rounded p-2 transition-colors duration-150 hover:bg-slate-200"
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
            <span className="text-base font-bold">Hi</span>
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
