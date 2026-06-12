import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "./components/cursor-glow";

export const metadata: Metadata = {
  title: "FD — Motion Graphics",
  description: "Stay Connected. Dark editorial bento-grid showcase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
