import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import Navbar from "./Navbar";
import Footer from "./Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "S.Chanthea's Portfolio",
  description: "Showcasing innovative projects and skills by S.Chanthea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
