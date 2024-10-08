import "@/styles/global.css";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Astro TribeBlockChain",
  description: "Astro TribeBlockChain Template",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
