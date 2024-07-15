"use client"
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { links } from '../constants';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    console.log("current path", pathname)
  return (
    <div className='md:hidden'>
        <RxHamburgerMenu className={`w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-400 ${isOpen ? "hidden":""}`} onClick={() => setIsOpen(!isOpen)} />
        <IoMdClose className={`w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-400 ${!isOpen ? "hidden":""}`} onClick={() => setIsOpen(!isOpen)} />
            {
                isOpen && (
                    <div className='absolute top-14 left-0 w-full h-[calc(100vh-96px)] bg-white z-50 flex flex-col justify-center items-center gap-8 font-medium text-xl'>
                        {links.map((link,index) =>(
                            <Link key={index} href={link.href} className={pathname === link.href ? "text-blue-500" : "text-gray-500"}>{link.name}</Link>
                        ))}
                    </div>
                )
            }
    </div>
  )
}

export default MobileMenu