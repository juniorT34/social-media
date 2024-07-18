import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Activities from './Activities'
type LeftMenuProps = {
  type:"home" | "profile"
}


const LeftMenu = ({type}:LeftMenuProps) => {
  return (
    <div className='flex flex-col gap-6'>
      {type === "home" && <ProfileCard />}

      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/posts.png"} alt="home icon" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/activity.png"} alt="home icon" width={20} height={20} />
          <span>Activities</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/market.png"} alt="home icon" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/events.png"} alt="home icon" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/albums.png"} alt="home icon" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/videos.png"} alt="home icon" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/news.png"} alt="home icon" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/courses.png"} alt="home icon" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />

        <Link href={"/"} className='flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100'>
          <Image src={"/settings.png"} alt="home icon" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Activities size='sm' />
    </div>

  )
}

export default LeftMenu