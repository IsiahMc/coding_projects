import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='grid md:ml-20 md:mr-20 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='font-bold sm:text-3xl text-2xl md:text-4xl mt-4 py-2'>Want to know how to optimize your flow?</h1>
            <p>Sign up for our newsletter to get the best info</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email' />
                <button className='font-medium text-black bg-[#ff10f0] my-4 w-[200px] rounded-md mx-auto sm:ml-4 md:ml-4 py-3 items-center'>Notify me</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter