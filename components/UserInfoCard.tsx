import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { User } from '@prisma/client'

const UserInfoCard = ({user}:{user: User}) => {
  
    const createdAt = new Date(user.createdAt)
    const formattedDate = createdAt.toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
  
    return (
    
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP */}
      <div className='flex items-center gap-4 justify-between'>
          <span className='text-gray-500'>User Media</span>
          <Link href={"/"} className='text-blue-500 text-xs underline'>See all</Link>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col gap-4 text-gray-500'>
          <div className='flex items-center gap-2'>
              <span className='text-xl text-black'>{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
              <span className='text-sm'>@{user.username}</span>
          </div>
          {user.description && 
            <p>{user.description}</p>
          }
          {user.city && 
            <div className='text-sm flex items-center gap-2'>
                <Image src={"/map.png"} alt="location icon" width={16} height={16} />
                <span>Living in <strong>{user.city}</strong></span>
            </div>
          }
          {user.school && 
            <div className='text-sm flex items-center gap-2'>
                <Image src={"/school.png"} alt="location icon" width={16} height={16} />
                <span>Went to {user.school}</span>
            </div>
          }
          {user.work && 
            <div className='text-sm flex items-center gap-2'>
                <Image src={"/work.png"} alt="location icon" width={16} height={16} />
                <span>Works at {user.work}</span>
            </div>
          }
          <div className='flex items-center justify-between gap-2'>
             {user.website && <div className='flex items-center gap-1'>
                  <Image src={"/link.png"} alt="location icon" width={16} height={16} />
                  <Link href={user.website} className='text-blue-500 font-medium'>{user.website}</Link>
              </div>}

              {user.createdAt && <div className='flex gap-1 items-center'>
                  <Image src={"/date.png"} alt="location icon" width={16} height={16} />
                  <span className='text-xs'>Joined {formattedDate}</span>
              </div>}
          </div>
          <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-lg'>Follow</button>
          <span className='text-red-500 self-end text-xs cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard