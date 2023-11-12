import { cn } from "@/lib/utils";
import Image from "next/image";



export const Logo = () => {
  return (
    <div className={cn("hidden md:flex items-center gap-x-2")}>
      <Image
        src="/notelight.png"
        height={40}
        width={30}
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/notedark.png"
        height={40}
        width={30}
        alt="logo"
        className="hidden dark:block"
      />
      <p className="font-semibold ">نوت</p>
    </div>
  );
};
