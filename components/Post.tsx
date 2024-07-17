import React from 'react'
import Image from "next/image"
import Comments from './Comments'
const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* USERS */}
        <div className='flex gap-2 items-center justify-between'>
            <div className='text-xs md:text-sm flex gap-2 items-center'>
                <Image src={"https://images.pexels.com/photos/27114459/pexels-photo-27114459/free-photo-of-tower-of-the-cathedral-of-arequipa-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                <span className='font-medium'>Fred Holloway</span>
            </div>
            <Image src={"/more.png"} className='w-5 h-5 self-end' alt="avatar" width={16} height={16}/>
        </div>
        {/* DESCRIPTION */}
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
                <Image src={"https://images.pexels.com/photos/3670580/pexels-photo-3670580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-full h-full object-cover rounded-lg' fill alt="avatar"  />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque obcaecati quas laudantium. Unde quod quae perspiciatis! Qui velit nam eum. Doloremque, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* INTERACTIONS */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image src={"/like.png"} className='curosr-pointer w-5 h-5 self-end' alt="avatar" width={16} height={16}/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>34 <span className='hidden md:inline'>Likes</span></span>
                </div>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <Image src={"/comment.png"} className='curosr-pointer w-5 h-5 self-end' alt="avatar" width={16} height={16}/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>23 <span className='hidden md:inline'>Comments</span></span>
                </div>
            </div>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src={"/share.png"} className='curosr-pointer w-5 h-5 self-end' alt="avatar" width={16} height={16}/>
                <span>|</span>
                <span>11 <span className='hidden md:inline'>Shares</span></span>
        	</div>
        </div>
        {/* COMMENTS */}
            <Comments />
    </div>
  )
}

export default Post