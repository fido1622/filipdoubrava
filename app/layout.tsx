import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "./components/cursor-glow";
import LoadingScreen from "./components/loading-screen";

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
        <LoadingScreen />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
