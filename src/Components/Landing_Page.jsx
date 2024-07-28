import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [toggle, settoggle] = useState(false)
  return (
    <>


    <div className='bg-sky-500 p-6'>
        <div className='flex justify-between items-center'>
            <div className='text-3xl font-bold text-black'>
                Pharmacy.pk
            </div>
                {
                    toggle ?
            <AiOutlineClose className='text-2xl text-black font-bold md:hidden block' onClick={()=>{settoggle(!toggle)}} />
                    :
            <AiOutlineMenu className='text-black font-bold text-2xl cursor-pointer md:hidden block' onClick={()=>{settoggle(!toggle)}} />
                }
            <ul className='md:flex gap-8 hidden'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Services
                </li>
                <li>
                    Feedback
                </li>
            </ul>

            {/* Responsive */}

            <ul className={` duration-500 block gap-8 md:hidden fixed top-[84px] bg-gray-400 w-full text-center h-screen 
                ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='py-4 px-5'>
                    Home
                </li>
                <li className='py-4 px-5'>
                    About
                </li>
                <li className='py-4 px-5'>
                    Contact
                </li>
                <li className='py-4 px-5'>
                    Services
                </li>
                <li className='py-4 px-5'>
                    Feedback
                </li>
            </ul>

        </div>
    </div>

    <div className='w-full h-[90vh] border border-red-500 flex flex-col items-center justify-center text-center px-2'>
                <h1 className='md:text-5xl font-bold py-2'>Pakistan's Most Trusted Online Doctor</h1>
                <p className='md:text-2xl py-2'>Get the best medical advice from the comfort of your home. Prescibtion is done </p>
                <p className='md:text-2xl'> by professional doctors</p>
                <Link to='Gender'><button className='bg-red-500 my-3 hover:bg-red-600 duration-75 text-white px-4 py-2 rounded-md'>Let's Start
                </button></Link>
    </div>

    <div className='w-full bg-sky-500 py-5 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
            <div className='h-[200px]'>
                <h1 className='text-3xl font-bold pb-3 text-black'>Pharmacy.pk</h1>
                <p className='pb-3 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                <div className='flex gap-7 text-2xl text-white'>
                <FaFacebookSquare />
                <FaTwitter />
                <FaSquareInstagram />
                <FaLinkedin />
                </div>
            </div>
            <div className='h-[200px] pl-6'>
                <p className='text-black font-bold py-3'>Solutions</p>
                <ul className='text-white'>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>
            <div className='h-[200px] pl-6'>
                <p className='text-black font-bold py-3'>Support</p>
                <ul className='text-white'>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API status</li>
                </ul>
            </div>
            <div className='h-[200px] pl-6'>
                <p className='text-black font-bold py-3'>Company</p>
                <ul className='text-white'>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Press</li>
                    <li>Feedback</li>
                </ul>
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar