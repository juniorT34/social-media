"use client"

import { useUser } from "@clerk/nextjs"
import { Story, User } from "@prisma/client"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useOptimistic, useState } from "react"
import { addStory } from "../lib/actions"

type StoryWithUser = Story & {user: User}

const StoryList = ({stories,userId}:{stories:StoryWithUser[],userId: string}) => {

    const [storyList,setStoryList] = useState(stories)
    const [img,setImg] = useState<any>()
    const {user,isLoaded} = useUser()

    const [optimisticStories, addOptimisticStories] = useOptimistic(storyList,
        (state,value: StoryWithUser) =>[value,...state]
    )

    // if(!user && !isLoaded) return "Loading..."

    const add = async() =>{
        if(!img?.secure_url) return

        addOptimisticStories({
            id: "",
            image_url: img.secure_url,
            createdAt: new Date(Date.now()),
            expiresAt: new Date(Date.now()+24*60*60*1000),
            userId: userId,
            user:{
                id: userId,
                username: "Sending...",
                avatar: user?.imageUrl || "/noAvatar.png",
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
            const createdStory = await addStory(img.secure_url)
            setStoryList(prev => [createdStory!,...prev])
            setImg(null)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="flex gap-8 w-max">
        <CldUploadWidget uploadPreset="socioliepu" onSuccess={(response,widget) => {setImg(response.info);widget.close()}}>
                {({ open }) => {
                  return (          
                    <div className='flex flex-col items-center gap-2 cursor-pointer relative' >
                        <Image onClick={() => open()} src={img?.secure_url || user?.imageUrl ||"/noAvatar.png"} width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2 object-cover' />
                        {img ? (
                            <form action={add}>
                                <button className="text-xs bg-blue-500 p-1 rounded-md text-white">Send</button>
                            </form>): 
                            (<span className='font-medium'>Add a Story</span>) }
                        <div className="absolute text-6xl text-gray-200 top-1">+</div>
                    </div>)
                }}
            </CldUploadWidget>
        {optimisticStories.map((story) =>(
            <div className='flex flex-col items-center gap-2 cursor-pointer' key={story.id}>
                <Image src={story.user.avatar || "/noAvatar.png"} width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>{story.user.name || story.user.username}</span>
            </div>
        )) }
    </div>
  )
}

export default StoryList