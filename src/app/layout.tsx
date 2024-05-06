import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar }  from "@/components/navbar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Maincommunity from "@/components/maincommunity";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeyondPaper",
  description: "BeyondPaper - Book Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Maincommunity/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
