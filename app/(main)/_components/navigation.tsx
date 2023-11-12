"use client";

import { cn } from "@/lib/utils";
import {
  ChevronsRight,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Trash,
} from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import Item from "./item";
import { toast } from "sonner";
import DocumentList from "./document-list";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { TrashBox } from "./trash-box";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-settings";
import { Navbar } from "./navbar";

const Navigation = () => {
  const router=useRouter()
  const settings = useSettings();
  const search = useSearch();
  const params = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResseting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [defaultSize, setDefaultSize] = useState(false);
  const create = useMutation(api.documents.create);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouse = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = window.innerWidth - event.clientX;
    if (newWidth > 240) setDefaultSize(true);
    if (newWidth <= 240) setDefaultSize(false);
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("right", `${newWidth}px`);
      navbarRef.current.style.setProperty("width", `calc(100%-${newWidth}px)`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResseting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100%-240px)"
      );
      navbarRef.current.style.setProperty("right", isMobile ? "100%" : "240px");
      setDefaultSize(false);
      setTimeout(() => setIsResseting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResseting(true);
      setDefaultSize(false);
      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("right", "0");

      setTimeout(() => setIsResseting(false), 300);
    }
  };

  const handleCreate = () => {
    const promise = create({ title: "بدون عنوان" }).then((documentId)=>router.push(`/documents/${documentId}`))
    toast.promise(promise, {
      loading: "در حال ساخت یادداشت جدید",
      success: "یادداشت جدید ساخته شد!",
      error: "یادداشت جدید ساخته نشد.",
    });
  };

  return (
    <>
      {" "}
      <aside
        ref={sidebarRef}
        className={cn(
          `
      group/sidebar h-full
       bg-secondary overflow-y-auto relative 
       flex w-60 flex-col z-[99999]`,
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        {defaultSize && (
          <button className="absolute bottom-0 right-0" onClick={resetWidth}>
            {" "}
            اندازه پیشفرض منو{" "}
          </button>
        )}
        <div
          onClick={collapse}
          role="button"
          className={cn(
            `opacity-0 transition
           group-hover/sidebar:opacity-100 
           h-6 w-6 rounded-sm hover:bg-neutral-300 
           absolute dark:hover:bg-neutral-600 top-3 left-2 text-muted-foreground`,
            isMobile && "opacity-100"
          )}
        >
          <ChevronsRight />
        </div>
        <div>
          <UserItem />
          <Item label="جستجو" icon={Search} onClick={search.onOpen} isSearch />
          <Item label="تنظیمات" icon={Settings} onClick={settings.onOpen} />
          <Item label="صفحه جدید" onClick={handleCreate} icon={PlusCircle} />
        </div>
        <div className="mt-4">
          <DocumentList />
          <Item onClick={handleCreate} icon={Plus} label="افزودن صفحه" />
          <Popover>
            <PopoverTrigger className="w-full mt-4 ">
              <Item label="سطل زباله" icon={Trash} />
            </PopoverTrigger>
            <PopoverContent
              className="p-0 w-72"
              side={isMobile ? "bottom" : "left"}
            >
              <TrashBox />
            </PopoverContent>
          </Popover>
        </div>
        <div
          onMouseDown={handleMouse}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 left-0 top-0"
        />
      </aside>{" "}
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[999999] right-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "right-0 w-full"
        )}
      >
        {!!params.documentId ? (
          <Navbar isCollapsed={isCollapsed} onResetWidth={resetWidth} />
        ) : (
          <nav className="bg-transparent px-3 py-2 w-full">
            {isCollapsed && (
              <MenuIcon
                className="h-6 w-6 text-muted-foreground cursor-pointer hover:bg-neutral-300 "
                onClick={resetWidth}
              />
            )}
          </nav>
        )}
      </div>
    </>
  );
};

export default Navigation;
