import React from 'react'
import Image from 'next/image'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs scrollbar-hide'>
        {/* STORIES */}
        <div className='flex gap-8 w-max'>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={80} height={80} alt="story" className='w-20 h-20 rounded-full ring-2' />
                <span className='font-medium'>Junior</span>
            </div>
        </div>
    </div>
  )
}

export default Stories