import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/Navbar";

const helvetica = localFont({
  src: [
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-Thin.woff2",
      weight: "300",
      style: "normal",
    },  
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/helvetica/HelveticaNowDisplay-ExtBlk.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "FLNT",
  description: "FreeLan Tech is here to solve your boring web design and SEO problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
