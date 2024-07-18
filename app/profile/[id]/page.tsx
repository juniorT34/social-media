import React from 'react'
import Feed from '../../../components/Feed'
import LeftMenu from '../../../components/LeftMenu'
import RightMenu from '../../../components/RightMenu'
import Image from "next/image"

const Profile = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'>
        <LeftMenu type='profile'/>
      </div>

      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image src={"https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" fill className='object-cover rounded-md'/>
              <Image src={"https://images.pexels.com/photos/1903308/pexels-photo-1903308.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className='object-cover rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10' width={128} height={128} />
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>Gilbert Rhodes</h1>
            <div className='flex items-center gap-12 justify-center mb-4'>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>145</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>1.2K</span>
                <span className='text-sm'>Followers</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>1.4K</span>
                <span className='text-sm'>Following</span>
              </div>
              
            </div>
          </div>
          <Feed />
        </div>
      </div>
      
      <div className='hidden lg:block w-[30%]'>
        <RightMenu userId='test'/>
      </div>
    </div>
  )
}

export default Profile