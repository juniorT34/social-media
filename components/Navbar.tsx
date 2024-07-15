import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-12">
        {/* LEFT */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-blue-500">SocioLiepu</Link>
        </div>

        {/* CENTER */}
        <div className='hidden md:flex w-[50%] text-sm'>
          {/* links */}
          <div className='flex items-center gap-6 text-gray-600'>
            <Link href="/" className="flex items-center gap-2">
				<Image src={"/home.png"} width={16} height={16} alt="Homepage" />
				<span>Homepage</span>
            </Link>
            <Link href="/friends" className="flex items-center gap-2">
				<Image src={"/friends.png"} width={16} height={16} alt="Homepage" />
				<span>Friends</span>
            </Link>
            <Link href="/stories" className="flex items-center gap-2">
				<Image src={"/stories.png"} width={16} height={16} alt="Homepage" />
				<span>Stories</span>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
            <MobileMenu />
        </div>
    </div>
    
  )
}

export default Navbar