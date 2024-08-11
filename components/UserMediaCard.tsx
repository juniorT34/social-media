import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { User } from '@prisma/client'
import { prisma } from '../lib/client'

const UserMediaCard = async({user}:{user: User}) => {

  const postWithMedia = await prisma.post.findMany({
    where:{
      userId: user.id,
      image_url:{
        not: null
      }
    },
    take: 8,
    orderBy: {
      createdAt: "desc"
    }
  })

  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex items-center gap-4 justify-between'>
            <span className='text-gray-500'>User Media</span>
            <Link href={"/"} className='text-blue-500 text-xs underline'>See all</Link>
        </div>
        {/* BOTTOM */}
        <div className='flex gap-4 justify-between flex-wrap'>
          {postWithMedia.length ? postWithMedia.map((post) =>(

            <div className='relative w-1/5 h-24' key={post.id}>
            <Image src={post.image_url!} alt='' fill className='object-cover rounded-md' />
          </div>
          )): "No pics found"}
          
        </div>
    </div>
  )
}

export default UserMediaCard