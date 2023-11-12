"use client";
import { useConvexAuth } from "convex/react";
import { SignInButton,UserButton,SignUpButton } from "@clerk/clerk-react";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./button";
import { Logo } from "@/app/(marketing)/_components/logo";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0  flex w-full items-center  p-6 backface-invisible",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex 2xl:w-[1400px] xl:w-[1200px] md:w-[700px] lg:w-[1000px]">
        <div className="">
          <ModeToggle />
        </div>
        {isLoading && (
          <div className="mt-3 mr-3">
            <Spinner />
          </div>
        )}
        {!isAuthenticated && !isLoading && (
          <div className="ml-3 flex gap-x-2">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                ورود
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm" className="w-20">
                ثبت نام
              </Button>
            </SignUpButton>
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <div className=" flex mr-3 mt-1 gap-x-1">
            <UserButton afterSignOutUrl="/" />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">ورود به نوت</Link>
            </Button>
          </div>
        )}
      </div>
      <div className=" ">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
//mr-[1220px]
