import React from 'react'
// eslint-disable-next-line 
import Single from '../Assets/single.png'
// eslint-disable-next-line 
import Double from '../Assets/double.png'
// eslint-disable-next-line 
import Triple from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
                <h2 className='text-2xl font-bold text-center py-4'>Single user</h2>
                <p className='text-center font-medium text-4xl'>$150</p>
                <div className='text-center py-4 font-medium'>
                    <p>800 GB storage</p>
                    <p className='py-3'>1 granted user</p>
                    <p>send up to 5GB</p>
                </div>
                <button className='font-bold bg-[#ff10f0] w-[200px] rounded-md mx-auto py-3 text-black hover:scale-105 duration-300'> Start trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4  bg-gray-100 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
                <h2 className='text-2xl font-bold text-center py-4'>Two users</h2>
                <p className='text-center font-medium text-4xl'>$199</p>
                <div className='text-center py-4 font-medium'>
                    <p>1 TB storage</p>
                    <p className='py-3'>2 granted users</p>
                    <p>send up to 10GB</p>
                </div>
                <button className='font-bold bg-black w-[200px] rounded-md mx-auto py-3 text-[#ff10f0] hover:scale-105 duration-300'> Start trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
                <h2 className='text-2xl font-bold text-center py-4'>Three users</h2>
                <p className='text-center font-medium text-4xl'>$250</p>
                <div className='text-center py-4 font-medium'>
                    <p>2 TB storage</p>
                    <p className='py-3'>3 granted users</p>
                    <p>send up to 20GB</p>
                </div>
                <button className='font-bold bg-[#ff10f0] w-[200px] rounded-md mx-auto py-3 text-black hover:scale-105 duration-300'> Start trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards