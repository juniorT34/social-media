import React from 'react'
import Post from './Post'
const Feed = () => {
  return (
    <div className='p-4 bg-white shadow-md flex flex-col gap-1'>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    
  )
}

export default Feed