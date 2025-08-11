import type { Metadata } from "next";
import { nunitoSans } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Explore information about countries around the world using this responsive Next.js app. Features include a dark/light theme toggle, search and filter by region, and detailed country pages powered by the REST Countries API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
