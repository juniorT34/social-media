import React from 'react'
import Image from "next/image"
import { auth } from '@clerk/nextjs/server'
import { prisma } from '../lib/client'
import Link from 'next/link'
const ProfileCard = async() => {
  
  const {userId} = auth()
  if(userId === null) return null

  const user = await prisma.user.findFirst({
    where: {
      id: userId
    },
    include:{
      _count:{
        select:{
          followers: true,
        }
      }
    }
  })

  if(user === null) return null
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex-flex-col gap-6'>
        <div className='h-20 relative'>
            <Image src={user.cover || "/noCover.png"} alt='' fill className='object-cover rounded-md' />
            <Image src={user.avatar || "/noAvatar.png"} alt='' className='object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10' width={48} height={48} />
        </div>
        <div className='h-20 flex flex-col gap-2 items-center mt-6'>
            <span className='font-semibold'>{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
            <div className='flex items-center gap-4'>
                <div className='flex'>
                <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-3 h-3' width={12} height={12} />
                <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-3 h-3' width={12} height={12} />
                <Image src={"https://images.pexels.com/photos/18687613/pexels-photo-18687613/free-photo-of-brunette-in-white-shirt-and-jeans-among-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' className='object-cover rounded-full w-3 h-3' width={12} height={12} />
                </div>
                <span className='text-xs text-gray-500'>{user._count.followers} Followers</span>
            </div>
            <button className='bg-blue-500 text-white text-xs p-2 rounded-lg'>
              <Link href={`/profile/${user.username}`}>My Profile</Link>
            </button>
        </div>
    </div>
  )
}

export default ProfileCard