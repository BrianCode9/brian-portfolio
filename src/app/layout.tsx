import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import MotionProvider from "@/components/ui/motion-provider";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const description =
  "Brian Ngo, an electrical and computer engineering student at West Virginia University interested in FPGAs and ASIC design.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brian-ngo.com"),
  title: "Brian Ngo's Portfolio",
  description,
  openGraph: {
    title: "Brian Ngo",
    description,
    url: "/",
    siteName: "Brian Ngo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Ngo",
    description,
  },
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
