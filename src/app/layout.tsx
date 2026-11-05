import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import MotionProvider from "@/components/ui/motion-provider";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Ngo's Portfolio",
  description: "A look into Brian's life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
