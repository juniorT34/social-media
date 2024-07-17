import React from 'react'
import Image from "next/image"
const Activities = ({size}:{size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
          {/* TOP */}
          <div className='flex items-center justify-between text-gray-500 font-medium'>
            <span>Activities</span>
            <span className='text-xs text-blue-500 underline'>See all</span>
          </div>
          {/* BOTTOM */}
          <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size=="sm" ? "h-24" : size=="md" ? "h-36": "h-48"}`}>
                <Image src={"https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"} fill alt='activity' className='rounded-lg object-cover' />
            </div>
            
            <div className='flex items-center gap-4'>
                <Image src={"https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"} className='w-6 h-6 rounded-full' alt="avatar" width={24} height={24}/>
                <span className='font-medium text-blue-500'>Coding Challenge</span>
            </div>
            <p className={` ${size==="sm" ? "text-xs" : "text-sm"}`}>
                {
                    size ==="sm" ? "Lorem ipsum dolor sit amet adipisicing elit." : 
                    size === "md" ? "Lorem ipsum dolor sit amet adipisicing elit. Doloremque, voluptatem.": "lorem ipsum dolor sit amet adipisicing elit. Doloremque, voluptatem.Lorem ipsum dolor sit amet adipisicing elit. Doloremque, voluptatem.lorem ipsum dolor sit amet adipisicing elit. Doloremque, vo" }
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 rounded-lg text-xs'>Learn More</button>
          </div>
    </div>
  )
}

export default Activities