import type { Metadata } from "next";
import {Poppins } from "next/font/google";
// import "../global.css"
import Navbar from "../../components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import LeftMenu from "../../components/LeftMenu";
import RightMenu from "../../components/RightMenu";


const poppins = Poppins({ subsets: ["latin"],
  weight:["400","700"],
  variable:"--font-poppins" });

export const metadata: Metadata = {
  title: "Socio Liepu",
  description: "Social Media for liepaja university",
};

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
          <main className={`${poppins.variable}`}>
            
            <div className="flex gap-6 pt-6">
                <div className=" xl:block w-[30%]">
                    <LeftMenu type="profile"/>
                </div>
                {children}
            </div>
            </main>
       
  );
}
