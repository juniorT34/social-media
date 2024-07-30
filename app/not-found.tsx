import Image from 'next/image'
import React from 'react'

const notFound = () => {
  return (
    <main className="flex h-[calc(100vh-96px)] items-center justify-center w-full">
        <div className='flex flex-col items-center gap-y-4 w-full'>
            <h1 className="text-3xl">404 not found</h1>
            <Image src={"/confused.gif"} alt='confused' width={600} height={600} unoptimized={true}/>
        </div>
    </main>
  )
}

export default notFound