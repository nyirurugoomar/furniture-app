import React from 'react'
import Zoom from 'react-reveal/Zoom';
import dinningroom from '../assets/dinningroom.png'
import livingroom from '../assets/living room-1.png'
import home_dinning from '../assets/home_dinning.png'

function DinningRoom() {
  return (
    <>
      <div  className='max-w-[1240px] mx-auto text-white'>
          {/* <h1 className='text-center text-black font-bold text-6xl'></h1> */}

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                     <div class=''>
                       <img src={livingroom}  alt='/'/>
                      </div>
                      
                  </div>
                  </Zoom>
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                      <div class='icons-services'>
                       <img src={dinningroom }  alt='/'/>
                      </div>
                      
                  </div>
                </Zoom>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                     <div class='icons-services'>
                       <img src={home_dinning}  alt='/'/>
                      </div>
                      
                  </div>
                  </Zoom>
                  
              </div>
             
              
              
          </div>
      </div>
    </>
    
  )
}

export default DinningRoom