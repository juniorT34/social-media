import React from 'react'
import Image from "next/image"
const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex-flex-col gap-6'>
        <div className='h-20 relative'>
            <Image src={"https://images.pexels.com/photos/14677783/pexels-photo-14677783.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' fill className='object-cover rounded-md' />
            <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10' width={48} height={48} />
        </div>
        <div className='h-20 flex flex-col gap-2 items-center mt-6'>
            <span className='font-semibold'>Vera Johnson</span>
            <div className='flex items-center gap-4'>
                <div className='flex'>
                <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-3 h-3' width={12} height={12} />
                <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-3 h-3' width={12} height={12} />
                <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-3 h-3' width={12} height={12} />
                </div>
                <span className='text-xs text-gray-500'>500 Followers</span>
            </div>
            <button className='bg-blue-500 text-white text-xs p-2 rounded-lg'>My Profile</button>
        </div>
    </div>
  )
}

export default ProfileCard