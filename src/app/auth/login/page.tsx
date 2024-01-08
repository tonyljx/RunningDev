"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/tony/icons";
import { cn } from "@/lib/utils";
import { useColorStore } from "@/store/color-store";
import React from "react";

type Props = {};

export default function LoginPage({}: Props) {
  const themeColor = useColorStore((state) => state.themeColor);
  return (
    <div className="mx-auto   mt-10 h-full max-w-xl">
      <h2 className=" bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-2xl   font-bold text-transparent">
        NextJs Template
      </h2>
      <p className="text-center">Sign In to your account</p>
      <div className="grid gap-4 py-4">
        <Button variant="outline" type="button">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Github
        </Button>

        <Button variant="outline" type="button">
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid items-center gap-2">
          <Label htmlFor="name" className="text-slate-500">
            Email Address
          </Label>
          <Input id="name" placeholder="gogo@gmail.com" />
        </div>
        <div className="grid items-center gap-2">
          <Label htmlFor="username" className="text-slate-500">
            Password
          </Label>
          <Input id="username" type="password" />
        </div>

        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <span className="text-violet-500 hover:cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

        <Button className={cn("w-full rounded", themeColor)} type="submit">
          Sign In
        </Button>
      </div>
    </div>
  );
}
