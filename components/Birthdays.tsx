import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
          {/* TOP */}
          <div className='flex items-center gap-4 justify-between'>
            <span className='text-gray-500'>Birthdays</span>
        </div>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <Image src={"https://images.pexels.com/photos/27114459/pexels-photo-27114459/free-photo-of-tower-of-the-cathedral-of-arequipa-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                <span className='font-medium'>Fred Holloway</span>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-lg'>Honor</button>
            </div>  
        </div>
        {/* UPCOMING */}
        <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
        <Image src={"/gift.png"}  alt="avatar" width={24} height={24} />
        <Link href={"/"} className='flex flex-col gap-1 text-xs'>
            <span className='text-gray-700 font-semibold'>Upcoming birthdays</span>
            <span className='text-gray-500'>See other 16 upcoming birthdays</span>
        </Link>
        </div>
    </div>
  )
}

export default Birthdays