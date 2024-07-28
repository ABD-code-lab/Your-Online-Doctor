import React from 'react'
import { Link } from 'react-router-dom'

const Gender = () => {
  return (
    <>
    <div className='bg-sky-500 w-full h-[100vh] text-center py-4'>
    <div className='mx-4'>
        <h1 className='text-5xl font-bold py-4'>Choose Headache Type</h1>
        <Link to='Headache_Migrine'><div className='border border-black w-full rounded p-3 font-semibold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer my-4'>Headache Migrine</div></Link>
        <Link to='Chronic_Headache_Pain'><div className='border border-black w-full rounded p-3 font-semibold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer my-4'>Chronic daily headaches</div></Link>
    </div>
    </div>
    </>
  )
}

export default Gender