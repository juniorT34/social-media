import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Activities from './Activities'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { User } from '@prisma/client'

const RightMenu = ({user}:{user: User}) => {
  return (
    <div className='flex flex-col gap-6'>
      {user ? (
        <>
          <UserInfoCard user={user} />
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendRequests/>
      <Birthdays/>
      <Activities size='md' />

    </div>
  )
}

export default RightMenu