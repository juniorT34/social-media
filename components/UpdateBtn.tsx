"use client"

import { useFormStatus } from "react-dom"

const UpdateBtn = () => {
    
    const {pending} = useFormStatus()
  return (
    
    <button type='submit' disabled={pending} className='bg-blue-500 rounded-md text-white p-2 mt-2 disabled:bg-opacity-50 disabled:cursor-not-allowed'>
        {pending ? "Updating..." : "Update"}
    </button>
  )
}

export default UpdateBtn