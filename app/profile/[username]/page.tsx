import React from 'react'
import Feed from '../../../components/Feed'
import LeftMenu from '../../../components/LeftMenu'
import RightMenu from '../../../components/RightMenu'
import Image from "next/image"
import { auth } from '@clerk/nextjs/server'
import { prisma } from '../../../lib/client'
import { notFound } from 'next/navigation'

const Profile = async({params} : {params: {username: string }}) => {
  
  const {userId: currentUserId} = auth()
  const username = params.username

  if(username === undefined) return notFound()

  const user = await prisma.user.findFirst({
    where: {
      username: username
    },
    include:{
      _count:{
        select:{
          followers: true,
          followings: true,
          posts: true,
        }
      }
    }
  })

  if(!user) return notFound()
  
  let isBlocked;
  if(currentUserId){
    const response = await prisma.block.findFirst({
      where:{
        blockerId: user.id,
        blockedId: currentUserId,
      }
    })

    if(response) isBlocked = true

  }else{
    isBlocked = false
  }

  if(isBlocked) return notFound()

  
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'>
        <LeftMenu type='profile'/>
      </div>

      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image src={user.cover || "/noCover.png"} alt="" fill className='object-cover rounded-md'/>
              <Image src={user.avatar || "/noAvatar.png"} alt="" className='object-cover rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10' width={128} height={128} />
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</h1>
            <div className='flex items-center gap-12 justify-center mb-4'>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>{user._count.posts}</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>{user._count.followers}</span>
                <span className='text-sm'>Followers</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>{user._count.followings}</span>
                <span className='text-sm'>Following</span>
              </div>
              
            </div>
          </div>
          <Feed />
        </div>
      </div>
      
      <div className='hidden lg:block w-[30%]'>
        <RightMenu user={user} />
      </div>
    </div>
  )
}

export default Profile