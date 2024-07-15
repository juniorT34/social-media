import Link from "next/link"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-12">
        {/* LEFT */}
        <div>
            <Link href="/" className="font-bold text-xl text-blue-500">SocioLiepu</Link>
        </div>
        {/* CENTER */}
        <div className='hidden'>

        </div>
        {/* RIGHT */}
        <div>
            <MobileMenu />
        </div>
    </div>
    
  )
}

export default Navbar