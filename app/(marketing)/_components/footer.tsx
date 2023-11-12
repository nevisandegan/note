import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
    return (
      <div className="flex items-center h-full w-full   p-6 bg-background gap-x-3 z-50 dark:bg-[#1F1F1F]">
        <Logo />
        <div className="flex md:mr-auto justify-between  md:justify-end items-center w-full gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            سیاست حفظ حریم خصوصی
          </Button>
          <Button variant="ghost" size="sm">
            شرایط و ضوابط
          </Button>
        </div>
      </div>
    );
}
 
