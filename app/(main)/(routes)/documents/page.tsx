"use client";

import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  
  const onCreate = () => {
    const promise = create({
      title: "بدون عنوان",
    });

    toast.promise(promise,{
      loading:"در حال ساخت یادداشت جدید",
      success:"یادداشت جدید ساخته شد!",
      error:"یادداشت جدید ساخته نشد."
    })

  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        className="dark:hidden"
        src="/empty.png"
        width={300}
        height={300}
        alt="empty"
      />
      <Image
        className="hidden dark:block"
        src="/empty-dark.png"
        width={300}
        height={300}
        alt="empty"
      />

      <h2> {user?.firstName || user?.username } جان به نوت خوش آمدید</h2>
      <Button className="mt-3"onClick={onCreate}>
        <PlusCircle className="h-4 w-4 ml-2" />
        یادداشت
      </Button>
    </div>
  );
};

export default DocumentsPage;
