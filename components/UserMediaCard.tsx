import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { User } from '@prisma/client'

const UserMediaCard = ({user}:{user: User}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex items-center gap-4 justify-between'>
            <span className='text-gray-500'>User Media</span>
            <Link href={"/"} className='text-blue-500 text-xs underline'>See all</Link>
        </div>
        {/* BOTTOM */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
          </div>
        </div>
    </div>
  )
}

export default UserMediaCard