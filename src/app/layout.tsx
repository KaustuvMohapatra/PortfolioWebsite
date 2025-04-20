import "./globals.css";
import type { Metadata } from "next";
import { DesktopProvider } from "@/contexts/DesktopContext";

export const metadata: Metadata = {
  title: "MacOS Portfolio",
  description: "A portfolio website with a macOS-inspired interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DesktopProvider>
          {children}
        </DesktopProvider>
      </body>
    </html>
  );
}
