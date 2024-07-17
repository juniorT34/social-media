import React from 'react'
import Link from 'next/link'
import Image from "next/image"

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex items-center gap-4 justify-between'>
            <span className='text-gray-500'>Friend Requests</span>
            <Link href={"/"} className='text-blue-500 text-xs underline'>See all</Link>
        </div>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <Image src={"https://images.pexels.com/photos/27114459/pexels-photo-27114459/free-photo-of-tower-of-the-cathedral-of-arequipa-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                <span className='font-medium'>Fred Holloway</span>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <Image src={"/accept.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
                <Image src={"/reject.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
            </div>  
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <Image src={"https://images.pexels.com/photos/27114459/pexels-photo-27114459/free-photo-of-tower-of-the-cathedral-of-arequipa-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                <span className='font-medium'>Fred Holloway</span>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <Image src={"/accept.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
                <Image src={"/reject.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
            </div>  
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <Image src={"https://images.pexels.com/photos/27114459/pexels-photo-27114459/free-photo-of-tower-of-the-cathedral-of-arequipa-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                <span className='font-medium'>Fred Holloway</span>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <Image src={"/accept.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
                <Image src={"/reject.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
            </div>  
        </div>
    </div>
  )
}

export default FriendRequests