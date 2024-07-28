import React from 'react'
import { Link } from 'react-router-dom'

const Diseases = () => {
  return (
    <>
        <div className='w-full min-h-[100vh] bg-sky-500'>
        <h1 className='text-5xl py-4 font-bold text-center text-white'>Identify Your Disease</h1>
            <div className='grid grid-cols-4'>
                    <Link to='Pain_Parts'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Pain</div></Link>
                    
                    <Link to='Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Infections</div></Link>
                    
                    <Link to='Wounds_File'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Wounds</div></Link>
                    
                    <Link to='Acne_File'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Acne</div></Link>
                    
            </div>   
        </div>
    </>
  )
}

export default Diseases