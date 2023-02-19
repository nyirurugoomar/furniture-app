import React from 'react'
import Fade from 'react-reveal/Fade';


function Hero() {
  return (
    <>
    <div id='home' className='w-full  h-screen text-center  md:bg-hero-bg   bg-cover pt-20 '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <Fade bottom>
                    <h1 className='text-[#F1C40F] md:text-[70px]  font-krona font-[400]'>Discover Beautiful and Affordable Furniture for Your Home</h1>
                </Fade>
                <button className='border-4 border-[#F1C40F] p-4 rounded-[80px] w-[160px] md:text-white cursor-pointer text-2xl hover:scale-110 ease-in duration-300'>Get More</button>
               
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero