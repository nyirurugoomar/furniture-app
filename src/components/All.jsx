import React from 'react'
import Zoom from 'react-reveal/Zoom';
import chair from '../assets/chair.png'
import redchair from '../assets/red chair.png'
import chairall from '../assets/c1.png'
import officechair from '../assets/officechair.png'

function All() {
  return (
    <>
    <div name='' className='max-w-[1240px] mx-auto text-white'>
          {/* <h1 className='text-center text-black font-bold text-6xl'></h1> */}

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                     <div class=''>
                       <img src={chair}  alt='/'/>
                      </div>
                      
                  </div>
                  </Zoom>
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                      <div class='icons-services'>
                       <img src={redchair}  alt='/'/>
                      </div>
                      
                  </div>
                </Zoom>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                     <div class='icons-services'>
                       <img src={chairall}  alt='/'/>
                      </div>
                      
                  </div>
                  </Zoom>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                  <div class='icons-services'>
                       <img src={officechair}  alt='/'/>
                      </div>
                      
                  </div>
                  </Zoom> 
              </div>
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                  <div class='icons-services'>
                       <img src={chair}  alt='/'/>
                      </div>
                      
                  </div>
                  </Zoom>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl border-[3px] border-black'>
              <Zoom>
                  <div className='p-20'>
                  <div class='icons-services'>
                       <img src={chair}  alt='/'/>
                      </div>
                       
                  </div>
                  </Zoom>
                  
              </div>
          </div>
      </div>
    </>
  )
}

export default All