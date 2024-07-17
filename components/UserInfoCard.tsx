import Link from 'next/link'
import React from 'react'
import Image from "next/image"

const UserInfoCard = ({userId}:{userId:string}) => {
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
              <span className='text-xl text-black'>Teresa Summers</span>
              <span className='text-sm'>Eva Ramsey</span>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, maiores. Eligendi reprehenderit fugiat reiciendis nobis impedit fugit accusamus ipsum alias!</p>
          <div className='text-sm flex items-center gap-2'>
              <Image src={"/map.png"} alt="location icon" width={16} height={16} />
              <span>Living in <strong>New York</strong></span>
          </div>
          <div className='text-sm flex items-center gap-2'>
              <Image src={"/school.png"} alt="location icon" width={16} height={16} />
              <span>Went to Liepaja University</span>
          </div>
          <div className='text-sm flex items-center gap-2'>
              <Image src={"/work.png"} alt="location icon" width={16} height={16} />
              <span>Works at Bite</span>
          </div>
          <div className='flex items-center justify-between gap-2'>
              <div className='flex items-center gap-1'>
                  <Image src={"/link.png"} alt="location icon" width={16} height={16} />
                  <Link href={"https://mywebsite.com"} className='text-blue-500 font-medium'>mywebsite.com</Link>
              </div>
              <div className='flex gap-1 items-center'>
                  <Image src={"/date.png"} alt="location icon" width={16} height={16} />
                  <span className='text-xs'>Joined November 2000</span>
              </div>
          </div>
          <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-lg'>Follow</button>
          <span className='text-red-500 self-end text-xs cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard