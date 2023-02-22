import React from 'react'
import whoweare from '../assets/whoweare.png'

function Whoweare() {
  return (
    <>
    <div id='about' className='w-full md:h-[390px] flex items-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 mb-[50px]'>
            <div className='col-span-2'> 
                <h2 className='font-krona font-[400] text-[65px] tracking-wider'>Who We Are</h2>
                <p className='text-[20px] w-[511px] h-[144px] tracking-widest'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, velit eu semper vulputate, velit ante commodo turpis, at mattis nulla ex e
                </p>
            </div>
            <div className='w-full m-auto flex items-center  justify-center  hover:scale-105 ease-in duration-300'>
            <img src={whoweare} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Whoweare