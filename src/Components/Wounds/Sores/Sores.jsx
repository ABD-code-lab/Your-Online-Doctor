import React from 'react'
import { Link } from 'react-router-dom'

const Diseases = () => {
  return (
    <>
        <div className='w-full h-[100vh] bg-sky-500'>
        <h1 className='text-5xl py-4 font-bold text-center text-white'>Identify Your Sores</h1>
            <div className='grid grid-cols-3 mx-auto w-[1240px]'>
                    <Link to='Mouth_Sores'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Mouth Sores</div></Link>
                    
                    <Link to='Throat_Sores'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Throat Sores</div></Link>
                    
                    <Link to='Nose_Sores'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Nose Sores</div></Link>
            </div>   
        </div>
    </>
  )
}

export default Diseases