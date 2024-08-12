"use client"

import { FollowRequest, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"
import { acceptFollowRequest, declineFollowRequest } from "../lib/actions"

type RequestWithUser = FollowRequest & {
    sender: User
}

const FriendRequestList = ({requests}: {requests: RequestWithUser[]}) => {

    const [requestState,setRequestState] = useState(requests)
    // accept
    const accept = async (requestId: string,userId: string) =>{
        removeOptimisticRequest(requestId)
        try{
            await acceptFollowRequest(userId)
            setRequestState(prev => prev.filter(req => req.id !== requestId))
        }catch(error){

        }
    }
    //decline
    const decline = async (requestId: string,userId: string) =>{
        removeOptimisticRequest(requestId)
        try{
            await declineFollowRequest(userId)
            setRequestState(prev => prev.filter(req => req.id !== requestId))
        }catch(error){

        }
    }
    const [optimisticRequests,removeOptimisticRequest] = useOptimistic(requestState,(state,value) =>
        state.filter(req => req.id !== value)
    
    )
  return (
        <div className='flex items-center justify-between'>
            {
                optimisticRequests.map((request) => {
                    return (
                        <>
                            <div className='flex gap-4 items-center' key={request.id}>
                                <Image src={request.sender.avatar || "/noAvatar.png"} className='w-10 h-10 object-cover rounded-full' alt="avatar" width={40} height={40} />
                                <span className='font-medium'>{(request.sender.name && request.sender.surname) ? request.sender.name + " " + request.sender.surname : request.sender.username}</span>
                            </div>
                            <div className='flex gap-3 items-center justify-end'>
                                <form action={() => accept(request.id,request.sender.id)}>
                                    <button>
                                        <Image src={"/accept.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
                                    </button>
                                </form>

                                <form action={() => decline(request.id,request.sender.id)}>
                                    <button>
                                        <Image src={"/reject.png"} className='w-5 h-5 cursor-pointer' alt="accept icon" width={16} height={16}/>
                                    </button>
                                </form>
                            </div>
                        </>
                    )
                })
            }
              
        </div>
  )
}

export default FriendRequestList