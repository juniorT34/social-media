import Image from 'next/image'
import React from 'react'

const notFound = () => {
  return (
    <main className="flex h-full items-center justify-center">
        <div className='flex flex-col items-center gap-y-4'>
            <h1 className="text-3xl">404 not found</h1>
            <Image src={"/assets/confused.gif"} alt='confused' width={600} height={600} unoptimized={true}/>
        </div>
    </main>
  )
}

export default notFound