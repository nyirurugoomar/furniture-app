import React from 'react'
import aboutImage from '/Users/Omar/Desktop/react-projects/furniture/furniture/furniture-app/src/assets/photo-aboutus.png'
import usericon from './images/userIcon.png'
import smileEmoji from './images/smileEmoji.png'
import team1 from './images/team1.png'
import team2 from './images/team2.png'



function aboutUs() {
  return (
    <>
    <div className='pt-20 bg-about-banner-bg bg-cover h-[232px] '>
    
    <h1 className='text-center pt-10 text-[30px] text-white font-[700] tracking-widest'> About<span className='text-[#F1C40F]'> US</span> </h1>
    </div>
    
    <div className='w-full md:h-full flex items-center py-20 md:px-20 '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 mb-[90px]'>
            
            <div className='col-span-2'> 
            
                <h2 className='font-krona font-[400] text-[65px] tracking-wider mt-20'>What We  Do</h2>
                <p className='text-[15px] w-[511px] h-[144px] tracking-widest'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, metus vitae malesuada blandit, lacus purus dignissim nisl, ac tincidunt velit risus ac enim. 
                Curabitur laoreet erat vel turpis gravida, in pellentesque ante consectetur. Integer
                </p>
                <p className='text-[15px] w-[511px] h-[144px] tracking-widest'>
                bibendum suscipit ultrices. Integer sed erat semper dolor sodales laoreet. Etiam interdum eros ut dui fermentum sollicitudin. Maecenas aliquet, purus eu elementum 
                </p>

                <div className='flex  justify-between max-w-[340px]  py-4'>
                    <div className=' shadow-lg bg-black  p-6 cursor-pointer rounded-3xl flex gap-4'> 
                        <img src={usericon} width={35} height={35} alt="" />
                        <button className='text-white text-[20px]'>+1000</button>
                    </div>

                    <div className=' shadow-2xl bg-white  p-6 cursor-pointer rounded-3xl flex gap-4'> 
                        <img src={smileEmoji} width={35} height={35} alt="" />
                        <button className='text-black text-[20px]'>+1000</button>
                    </div>    
                </div>
                
            </div>
            <div className='w-full m-auto flex items-center  justify-center '>
            <img src={aboutImage} height={50} alt="" />
            </div>
        </div>

        

    </div>
    
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 mx-10'>
          <div>
          <div className='bg-white rounded-xl shadow-2xl py-10 border-b-8 border-[#F1C40F]   '>
              <h1 className='text-center text-[20px] font-[700]'>Our Vision</h1>
              <p className='text-center px-10'>Curabitur laoreet erat vel turpis gravida</p>
                  
            </div>
            
          </div>
          <div>
            
          <div>
          <div className='bg-white rounded-xl shadow-2xl py-10 border-b-8 border-[#F1C40F]   '>
              <h1 className='text-center text-[20px] font-[700]'>Our Vision</h1>
              <p className='text-center px-10'>Curabitur laoreet erat vel turpis gravida</p>
                  
            </div>
            
          </div>           
          </div>
          <div>
            
          <div>
          <div className='bg-white rounded-xl shadow-2xl py-10  border-b-8 border-[#F1C40F]  '>
              <h1 className='text-center text-[20px] font-[700]'>Our Vision</h1>
              <p className='text-center px-10'>Curabitur laoreet erat vel turpis gravida</p>
                  
            </div>
            
          </div>            
          </div>
          
        </div>


        <h1 className='text-black font-bold text-center text-3xl mt-10'>Our Team</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-20 sm:pt-20 text-black mb-20'>
                  
              <div className=' '>
              
                  <div className='p-1 '>
                      <img src={team1} alt=''/>
                      
                  </div>
                  
                  
              </div>
              <div className=''>
             
                  <div className='p-1'>
                     
                  <img src={team2} alt=''/>
                  

                  </div>
                  
                  
              </div>
              <div className=''>
             
                  <div className='p-1 group hover:bg-gradient-to-r from-[#F1C40F] to-[#e4d458]'>
                 
                  <img src={team1} className='group-hover:opacity-10 rounded-xl' alt=''/>
                  
                  </div>
                    
              </div>
              
         
          </div>
 
          <div className='w-full h-[168px] md:bg-banner-bg bg-cover -mb-20 '>

            <form className='pt-10 justify-center flex flex-col-2 gap-10'>
                     <input
                      className='border-2 rounded-3xl p-3 flex bg-[#c8c4c4] w-[463px] text-white font-[700]'
                      type='email'
                      name='mail'
                      placeholder='Email'
                    />
                    <button className='md:text-white border-2 p-4 rounded-2xl border-[#F1C40F] text-[20px]'>Subscribe</button>
            </form>

          </div>

      
    </>
  )
}

export default aboutUs