import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"],
  weight:["400","500","600","700"],
  variable:"--font-poppins" });

export const metadata: Metadata = {
  title: "Socio Liepu",
  description: "Social Media for liepaja university",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={poppins.variable}>
            <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-2 md:py-4">
              <Navbar />
            </div>
            <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {children}
            </div>
            </body>
        </html>
      </ClerkProvider>
  );
}
