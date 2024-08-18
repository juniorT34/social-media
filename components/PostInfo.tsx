"use client"

import Image from "next/image"
import { useState } from "react"
import { deletePost } from "../lib/actions"

type Props = {}

const PostInfo = ({postId}:{postId:string}) => {
    const [open,setOpen] = useState(false)
    const deletePostWithId = deletePost.bind(null,postId)
  return (
    <div className="relative">
        <Image src={"/more.png"} className='w-5 h-5 self-end cursor-pointer' onClick={() => setOpen(prev => !prev)} alt="avatar" width={16} height={16}/>
        {open && (
            <div className="absolute top-4 right-0 bg-white p-4 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-50">
                <span className="cursor-pointer">View</span>
                <form action={deletePostWithId}>
                    <button type="submit" className="text-red-500">Delete</button>
                </form>
            </div>)
        }
    </div>

  )
}

export default PostInfo