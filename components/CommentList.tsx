"use client"
import React, { useOptimistic, useState } from 'react'
import Image from 'next/image'
import { Comment, User } from '@prisma/client'
import { useUser } from '@clerk/nextjs'
import { addComment } from '../lib/actions'

type CommentWithUser = Comment & {user:User}

const CommentList = ({comments,postId}: {comments: CommentWithUser[],postId: string}) => {

    const {user} = useUser()
    const [commentState,setCommentState] = useState(comments)
    const [description,setDescription] = useState("")

    const [optimisticComments,addOptimisticComment] = useOptimistic(commentState,(state,value:CommentWithUser) =>
    [value,...state]
    )

    const add = async() =>{
        if(!user || !description){
            return
        }

        addOptimisticComment({
            id: "",
            description,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            userId: user.id,
            postId: postId,
            user:{
                id: user.id,
                username: "Sending Please wait...",
                avatar: user.imageUrl || "/noAvatar.png",
                cover: "",
                description:"",
                name: "",
                surname: "",
                city: "",
                work:"",
                school: "",
                major:"",
                website: "",
                createdAt:new Date(Date.now()),
                updatedAt:new Date(Date.now())
            }
        })
        try {
            const createdComment = await addComment(postId,description)
            setCommentState(prev => [createdComment,...prev])
        } catch (error) {
            
        }
    }

  return (
    <>
    
        {user && <div className='flex items-center gap-4'>
            <Image src={user?.imageUrl || "/noAvatar"} alt="" width={32} height={32} className='w-8 h-8 rounded-full' />
            <form action={add} className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type="text" value={description} placeholder='Write a comment...' className='flex-1 bg-transparent outline-none' onChange={e => setDescription(e.target.value)}/>
                <Image src={"/emoji.png"} className='w-5 h-5 cursor-pointer' alt="avatar" width={16} height={16}/>
            </form>
        </div>}
        {/* COMMENTS */}
        <div className=''>
            {/* COMMENT */}
            {optimisticComments.map((comment) =>(
                <div className='flex gap-4 justify-between mt-6' key={comment.id}>
                {/* AVATAR */}
                <Image src={comment.user.avatar || "/noAvatar"} alt="" width={40} height={40} className='w-10 h-10 rounded-full' />
                {/* DESCRIPTION */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium text-xs md:text-sm'>{comment.user.name && comment.user.surname ? comment.user.name + " " + comment.user.surname : comment.user.username}</span>
                    <p>{comment.description}</p>
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
            )) }
        </div>
    </>
  )
}

export default CommentList