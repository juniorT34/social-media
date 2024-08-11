"use client"

import { useOptimistic, useState } from "react"
import { switchBlock, switchFollow } from "../lib/actions"

type UserInfoProps = {
    userId: string,
    currentUserId:string,
    isUserBlocked: boolean,
    isFollowing: boolean,
    isFollowingReqSent:boolean
}
const UserInfoButton = ({userId,
    currentUserId,
    isUserBlocked,
    isFollowing,
    isFollowingReqSent}: UserInfoProps) => {
        if(!currentUserId){
            return null
        }

    const [userState,setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingReqSent
    })

    const follow = async() =>{
        switchOptimisticState("follow")
        try {
            await switchFollow(userId)
            setUserState(prev =>({
                ...prev, 
                following:prev.following && false,
                followingRequestSent:!prev.following && !prev.followingRequestSent ? true: false
            }))
        } catch (error) {
            
        }
    }

    const block = async () =>{
        switchOptimisticState("block")

        try {
            await switchBlock(userId)
            setUserState(prev => ({
                ...prev,blocked: !prev.blocked
            }))
        } catch (error) {
            console.log(error)
        }
        
    }

    const [optimisticState, switchOptimisticState] = useOptimistic(userState,(state,value: "follow" | "block") => value==="follow" ? ({
        ...state,
        following:state.following && false,
        followingRequestSent:!state.following && !state.followingRequestSent ? true: false
    }):{...state,blocked: !state}
    
)
  return (

    <>
        <form action={follow}>
            <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-lg w-full'>{optimisticState.following? "Following": optimisticState.followingRequestSent ? "Request Sent": "Follow"}</button>
        </form>
        <form action={block} className="self-end">
            <button className="text-red-500 text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User": "Block User"}
                {/* <span className=''></span> */}
            </button>
        </form>
    </>

  )
}

export default UserInfoButton