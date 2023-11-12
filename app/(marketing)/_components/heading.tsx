"use client";

import { useConvexAuth } from "convex/react";

import {SignInButton,SignUpButton} from "@clerk/clerk-react"
 
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl -mt-16 space-y-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl ">
        نوشتن ایده ها ، طرح ها ، اسناد و برنامه های روزانه
        <br />
        به <span className="font-semibold">نوت</span> خوش آمدید
      </h1>
      <h3 className="text-base sm:text-md md:text-xl ">
        نوت یک فضای کاری متصل به شما است که در آن <br /> کار بهتر و سریعتر انجام
        می شود
      </h3>
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          {" "}
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            {" "}
            ورود به نوت <ArrowLeft className="h-4 w-4 mr-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button >
            ثبت نام
            <ArrowLeft className="h-4 w-4 mr-2" />
          </Button>
        </SignUpButton>
      )}
    </div>
  );
};
