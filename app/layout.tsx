import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Noto_Naskh_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProviedr } from "@/components/providers/convex-provide";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "../lib/edgestore";

import "./globals.css";

const noto = Noto_Naskh_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "نوت",
  description: "the connected workspace where better faster work happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-schema:light)",
        url: "/notedark.png",
        href: "/notedark.png",
      },
      {
        media: "(prefers-color-schema:dark)",
        url: "/notedark.png",
        href: "/notedark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <body className={noto.className}>
        <ConvexClientProviedr>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="note-theme-2"
            >
              <Toaster position="top-left" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProviedr>
      </body>
    </html>
  );
}
