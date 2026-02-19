import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIfiesta 3.O",
  description:
    "Department of Artificial Intelligence and Machine Learning, Global Academy of Technology, Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-neutral-950 text-gray-100 antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
