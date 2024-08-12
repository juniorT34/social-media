"use client"
import { User } from '@prisma/client'
import Image from 'next/image'
import React, { useActionState, useState } from 'react'
import { updateProfile } from '../lib/actions'

import { CldUploadWidget } from 'next-cloudinary';
import { Span } from 'next/dist/trace'
import { useRouter } from 'next/navigation'
import UpdateBtn from './UpdateBtn'

const UpdateUser = ({user}:{user:User}) => {

  const [open, setOpen] = useState(false)
  const [cover, setCover] = useState<any>(false)
  const router = useRouter()
  const [state,formAction] = useActionState(updateProfile,{success: false,error:false})

  const handleClose = () =>{
    setOpen(false)
    state.success && router.refresh()
  }

  return (
    <div className='ov'>
        <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setOpen(true)}>Update</span>
        {open && 
        <div className='absolute w-screen h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50'>
          <form action={(formData) =>formAction({formData,cover: cover?.secure_url || ""})} className='p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative'>
            {/* title */}
              <h1>Update Profile</h1>
              <div className='mt-4 text-xs text-gray-500'>
                Use the navigation profile to update avatar and username
              </div>
              {/* cover picture upload */}
              <CldUploadWidget uploadPreset="socioliepu" onSuccess={(response) => setCover(response.info)}>
                {({ open }) => {
                  return (
                    <div className='flex flex-col gap-4 my-4' onClick={() => open()}>
                      <label htmlFor="">Cover Picture</label>
                      <div className='flex- items-center gap-2 cursor-pointer'>
                        <Image src={user.cover || "/noCover.png"} alt="cover picture" width={48} height={32} className='w-12 h-8 rounded-md object-cover'/>
                        <span className='text-xs underline text-gray-500'>Change</span>
                      </div>
                   </div>
                  );
                }}
            </CldUploadWidget>
              
              {/* firstname */}
              <div className='flex flex-wrap justify-between gap-2 xl:gap-4'>
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>First Name</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.name || "John"} name='name'/>
                </div>
              {/* lastname */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Last Name</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.surname || "Doe"} name='surname'/>
                </div>
              
              {/* description */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Description</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.description || "Life is good"} name='description'/>
                </div>
              
              {/*  city*/}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>City</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.city || "Liepaja"} name='city'/>
                </div>
              {/* school */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>School</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.school || "Liepaja University"} name='school'/>
                </div>
                {/* major */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Major</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.major || "Information Tech"} name='major'/>
                </div>
              {/* work */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Work</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.work || "Freelance"}  name='work'/>
                </div>
              
              {/* website */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Website</label>
                  <input className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" type="text" placeholder={user.website || "www.example.com"} name='website'/>
                </div>
              
              </div>
              <UpdateBtn />
              {state.success && <span className='text-green-500'>Profile has been updated</span>}
              {state.error && <span className='text-red-500'>Something went wrong</span>}
              <span className='absolute text-xl right-2 top-3 cursor-pointer' onClick={handleClose}>X</span>
          </form>
        </div>
        }
    </div>
  )
}

export default UpdateUser