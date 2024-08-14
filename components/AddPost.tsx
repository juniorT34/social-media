"use client"
import Image from "next/image"
import { prisma } from '../lib/client'
import { auth } from '@clerk/nextjs/server'
import { useUser } from "@clerk/nextjs"
import { useState } from "react"
import { CldUploadWidget } from "next-cloudinary"
import AddPostBtn from "./AddPostBtn"
import { addPost } from "../lib/actions"
const AddPost = () => {
  const {user,isLoaded} = useUser()
  const [description, setDescription] = useState("")
  const [img,setImg] = useState<any>()

  if(!isLoaded){
    return "Loading..."
  }

  
  

  return (
    
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md'>
      {/* AVATAR */}
      <Image src={user?.imageUrl || "noAvatar.png"} className='w-12 h-12 object-cover rounded-full' alt="avatar" width={48} height={48} />
      {/* POST */}
      <div className='flex-1'>
        <form action={(formData) => addPost(formData, img?.secure_url || "")} className='flex gap-4 items-center'>
          {/* INPUT */}
            <textarea name="description" id="" value={description} placeholder="What's on your mind?" className='flex-1 w-full md:h-24 h-20 resize-none bg-slate-100 rounded-lg p-2 outline-none' onChange={(e) => setDescription(e.target.value)}></textarea>
            <Image src={"/emoji.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
            {/* <button type='submit'>Post</button> */}
            <AddPostBtn />
        </form>
        {/* POST OPTIONS */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <CldUploadWidget uploadPreset="socioliepu" onSuccess={(response,widget) => {setImg(response.info);widget.close()}}>
                {({ open }) => {
                  return (          
                  <div className='flex items-center gap-2 cursor-pointer' onClick={() =>open()}>
                    <Image src={"/addImage.png"} className='w-5 h-5 self-end' alt="avatar" width={20} height={20}/>
                    <span>Photo</span>
                  </div>
                  );
                }}
            </CldUploadWidget>

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