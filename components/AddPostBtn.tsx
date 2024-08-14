"use client"

import { useFormStatus } from "react-dom"

type Props = {}

const AddPostBtn = () => {

    const {pending} = useFormStatus()
  return (
    <button className="bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed px-2 py-1 rounded-md text-white" type="submit" disabled={pending}>
        {pending ? "Posting": "Post"}
    </button>
  )
}

export default AddPostBtn