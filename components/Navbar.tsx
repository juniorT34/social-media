import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading,SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-12">
        {/* LEFT */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-blue-500">SocioLiepu</Link>
        </div>

        {/* CENTER */}
        <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
          {/* links */}
          <div className='flex items-center gap-6 text-gray-600'>
            <Link href="/" className="flex items-center gap-2 hover:text-blue-500">
				<Image src={"/home.png"} width={16} height={16} alt="Homepage" />
				<span>Homepage</span>
            </Link>
            <Link href="/friends" className="flex items-center gap-2 hover:text-blue-500">
				<Image src={"/friends.png"} width={16} height={16} alt="Homepage" />
				<span>Friends</span>
            </Link>
            <Link href="/stories" className="flex items-center gap-2 hover:text-blue-500">
				<Image src={"/stories.png"} width={16} height={16} alt="Homepage" />
				<span>Stories</span>
            </Link>
          </div>
          <div className="hidden xl:flex p-2 bg-slate-100 rounded-full">
            <input type="text" placeholder="Search" className="bg-transparent text-sm text-gray-500 outline-none" />
            <Image src={"/search.png"} width={20} height={20} alt="search" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
            <ClerkLoading>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-black">Loading...</span>
            </div>
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <div className="cursor-pointer hover:text-blue-500">
                  <Image src={"/people.png"} width={20} height={20} alt="people" className="hover:text-blue-500" />
                </div>
                <div className="cursor-pointer hover:text-blue-500">
                  <Image src={"/messages.png"} width={20} height={20} alt="messages"  className="hover:text-blue-500" />
                </div>
                <div className="cursor-pointer hover:text-blue-500">
                  <Image src={"/notifications.png"} width={20} height={20} alt="notifications"  className="hover:text-blue-500" />
                </div>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <div className="flex items-center gap-2 text-sm">
                  <Image src={"/login.png"} width={20} height={20} alt="login" />
                  <Link href={"/sign-in"} className="">Login/Register</Link>
                </div>
              </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
    
  )
}

export default Navbar