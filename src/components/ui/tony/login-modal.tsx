import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/tony/icons";

type Props = {};

export default function LoginModal({}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-2xl   font-bold text-transparent">
            NextJs Template
          </DialogTitle>
          <DialogDescription className="text-center">
            Sign In to your account
          </DialogDescription>
        </DialogHeader>
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
            <Input id="name" value="gogo@gmail.com" />
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
        </div>
        <DialogFooter>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
