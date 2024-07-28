import React from 'react'
import { Link } from 'react-router-dom'

const Diseases = () => {
  return (
    <>
        <div className='w-full h-[100vh] bg-sky-500'>
        <h1 className='text-5xl py-9 font-bold text-center text-white'>Identify Your Disease</h1>
            <div className='grid grid-cols-3'>
                    <Link to='Headache_types'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Headache</div></Link>
                    <Link to='Ear_Pain'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Ear Pain</div></Link>
                    <Link to='Teeth_Pain'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Teeth Pain</div></Link>
            </div>   
        </div>
    </>
  )
}

export default Diseases