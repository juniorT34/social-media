import React from 'react'
import Image from "next/image"

const AddPost = () => {
  return (
    
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md'>
      {/* AVATAR */}
      <Image src={"https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} className='w-12 h-12 object-cover rounded-full' alt="avatar" width={48} height={48} />
      {/* POST */}
      <div className='flex-1'>
        {/* INPUT */}
        <div className='flex gap-4'>
          <textarea name="" id="" placeholder="What's on your mind?" className='flex-1 w-full md:h-24 h-20 resize-none bg-slate-100 rounded-lg p-2 outline-none'></textarea>
          <Image src={"/emoji.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
        </div>
        {/* POST OPTIONS */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={"/addImage.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
            <span>Photo</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={"/addVideo.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
            <span>Video</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={"/events.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
            <span>Event</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={"/poll.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
            <span>Activities</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPost