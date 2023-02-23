import React from 'react'
import {  FaFacebook, FaInstagram, FaTwitter,  } from 'react-icons/fa'

function Footer() {
  return (
    <>
       <div  className='w-full  h-screen   md:bg-footer-bg bg-cover mt-20 '>
        
            <div>
            <div className='max-w-[1240px] m-auto md:grid lg:grid-cols-3 md:text-center p-20 '>
                <div className='mr-[10rem]'>
                    <h1 className=' font-[700] text-[35px] tracking-widest'>Location</h1>
                    <p className='font-[400]'>kigali, Remera</p>
                </div>

                <div className='md:ml-[30rem]'>
                    <h1 className='font-[700] text-[35px] tracking-widest'>Contact</h1>
                    <p className='tracking-wider font-[400]'>Tel:0784444444</p>
                    <p className='tracking-wider font-[400]'>Email:mail@gmail.com</p>
                </div>

                
            
            </div>
               <div className='text-center mt-20'>
                  <h1 className='font-[700] text-[35px] tracking-widest'>Follow Us</h1>
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg bg-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        {/* <a href='#'> */}
                        <FaFacebook size={'28px'}/>
                        {/* </a> */}
                        
                    </div>

                    <div className='rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        
                          <FaTwitter size={'28px'}/>
                       
                    </div>

                    <div className='rounded-full shadow-lg bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaInstagram size={'28px'}/>
                    </div>

                    
                    
                </div>
               </div>     
               
            </div>

            <h1 className='text-white text-center mt-40 tracking-widest font-[700]'>Furniture 2023 All rights reserved</h1>
        </div>
    
    </>
  )
}

export default Footer