"use client"
import { useAuth } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { useOptimistic, useState } from "react"
import { switchLike } from "../lib/actions"

type PostInteractionProps = {
    postId: string,
    likes: string[],
    comments:number
}

const PostInteraction = ({postId,likes,comments}:PostInteractionProps) => {

    const {isLoaded,userId} = useAuth()

    const [likeState,setLikeState] = useState({
        likeCount: likes.length,
        isLiked: userId ? likes.includes(userId) : false
    })

    const [optimisticLike, switchOptimisticLike] = useOptimistic(likeState,(state,value) =>{
        return {
            likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
            isLiked: !state.isLiked
        }
    })

    const likeAction = async() =>{
        switchOptimisticLike("")
        try {
            switchLike(postId)
            setLikeState(state =>({
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked
            }))
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='flex items-center justify-between text-sm my-4'>
        <div className='flex gap-8'>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <form action={likeAction}>
                    <button>
                        <Image src={optimisticLike.isLiked ? "/liked.png" : "/like.png"} className='curosr-pointer w-5 h-5 self-end' alt="avatar" width={16} height={16}/>
                    </button>
                </form>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>{optimisticLike.likeCount} <span className='hidden md:inline'>Likes</span></span>
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
            <span className='hidden md:inline'>Shares</span>
        </div>
    </div>
  )
}

export default PostInteraction