import React from 'react'
import Image from "next/image"
import Comments from './Comments'
import { Post,User } from '@prisma/client'
import PostInteraction from './PostInteraction'

type PostType = Post & {user: User} & {likes: [{userId: string}]} & {_count:{comments: number}}

const Posted = ({post}: {post:PostType}) => {
  return (
    <div className='flex flex-col gap-4'>
        {/* USERS */}
        <div className='flex gap-2 items-center justify-between'>
            <div className='text-xs md:text-sm flex gap-2 items-center'>
                <Image src={post.user.avatar || "/noAvatar"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                <span className='font-medium'>{(post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}</span>
            </div>
            <Image src={"/more.png"} className='w-5 h-5 self-end' alt="avatar" width={16} height={16}/>
        </div>
        {/* DESCRIPTION */}
        {post.image_url && 
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
                <Image src={post.image_url} className='w-full h-full object-cover rounded-lg' fill alt="avatar"  />
            </div>
            <p>{post.description}</p>
        </div>}
        {/* INTERACTIONS */}
        <PostInteraction postId={post.id} likes={post.likes.map(like => like.userId)} comments={post._count.comments}/>
        {/* COMMENTS */}
            <Comments />
    </div>
  )
}

export default Posted