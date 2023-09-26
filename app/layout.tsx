import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Kelby Gassman UX Designer",
  description: "Kelby Gassman's UX Designer and Design Technologist portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
