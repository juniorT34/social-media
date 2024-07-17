import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Activities from './Activities'

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequests/>
      <Birthdays/>
      <Activities size='md' />

    </div>
  )
}

export default RightMenu