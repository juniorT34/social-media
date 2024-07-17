import React from 'react'
import Image from "next/image"
const Comments = () => {
  return (
    <div>
        {/* WRITE */}
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/26857128/pexels-photo-26857128/free-photo-of-purple-anthurium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={32} height={32} className='w-8 h-8 rounded-full' />
            <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type="text" placeholder='Write a comment...' className='flex-1 bg-transparent outline-none' />
                <Image src={"/emoji.png"} className='w-5 h-5 cursor-pointer' alt="avatar" width={16} height={16}/>
            </div>
        </div>
        {/* COMMENTS */}
        <div className=''>
            {/* COMMENT */}
            <div className='flex gap-4 justify-between mt-6'>
                {/* AVATAR */}
                <Image src="https://images.pexels.com/photos/26857128/pexels-photo-26857128/free-photo-of-purple-anthurium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className='w-10 h-10 rounded-full' />
                {/* DESCRIPTION */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium text-xs md:text-sm'>Martha Holloway</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex items-center gap-8 text-xs mt-2'>
                        <div className='flex items-center gap-4'>
                        <Image src={"/like.png"} className='w-4 h-4 cursor-pointer' alt="avatar" width={16} height={16} />
                        <span className='text-gray-200'>|</span>
                        <span className='text-gray-500'>34 <span className='hidden md:inline'>Likes</span></span>
                        </div>
                        <div>Reply</div>
                    </div>
                </div>
                {/* ICONS */}
                <Image src={"/more.png"} className='w-4 h-4 cursor-pointer' alt="avatar" width={16} height={16} />
            </div>
        </div>
    </div>
  )
}

export default Comments