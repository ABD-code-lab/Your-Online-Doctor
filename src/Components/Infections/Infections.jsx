import React from 'react'
import { Link } from 'react-router-dom'

const Diseases = () => {
  return (
    <>
        <div className='w-full min-h-[100vh] bg-sky-500'>
        <h1 className='text-5xl py-9 font-bold text-center text-white'>Identify Your Infection</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    
                    <Link to='Digestive_System_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Digestive System Infection</div></Link>
                    
                    <Link to='Blood_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Infection In Blood Circulatory System</div></Link>
                    
                    <Link to='Urinary_Tract_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Urinary Tract Infections</div></Link>
                    
                    <Link to='Inhalatory_Tract_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Inhalatory Tract Infections</div></Link>

                    <Link to='Fingers_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Fingers Infections</div></Link>

                    <Link to='Surgical_Site_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Surgical Site Infections</div></Link>

                    <Link to='Skin_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Skin Infections</div></Link>

                    <Link to='Mouth_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Mouth Infections</div></Link>

                    <Link to='Kidney_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Kidney Infections</div></Link>

                    <Link to='Liver_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Liver Infections</div></Link>

                    <Link to='Spleen_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Spleen Infections</div></Link>

                    <Link to='Heart_Infections'><div className='border border-black text-center w-[300px] mb-4 h-[270px] text-3xl cursor-pointer font-semibold flex items-center justify-center mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded'>Heart Infections</div></Link>
            </div>   
        </div>
    </>
  )
}

export default Diseases