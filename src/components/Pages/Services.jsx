import React from 'react'
import servicesImage from './images/image_services.png'
import services_mini from './images/minImage_services.png'
function Services() {
  return (
    <>
        <div className='pt-20 bg-services-banner-bg bg-cover h-[232px] '>
        <h1 className='text-center pt-10 text-[30px] text-[#F1C40F] font-[700] tracking-widest'> Our<span className='text-white'> Service</span> </h1>
        </div>
        <div className='w-screen h-full '>
            <img src={servicesImage} alt="" />
        </div>

        <div className='w-full h-screen  flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>


        
         
           <div className='flex flex-col justify-center md:items-start w-full px-10 mb-[10rem] '>
                <h1 className='font-bold  text-[60px] '>Lorem Ipsum</h1>
                <p className=' font-light mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <p className=' font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
  
           </div>
          
       
           <div>
                <img className='w-[90] px-10 ' src={services_mini}alt='/'/>
        </div>
            
            
        </div>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-20 text-black '>
                  
              <div className=' '>
              
              <div className='p-1 group hover:bg-gradient-to-r from-[#120c0c] to-[#e4d458]'>
                 
                 <img src={services_mini} className='group-hover:opacity-10 rounded-xl' alt=''/>
                 
                 </div>
                  
                  
              </div>
              <div className=''>
             
              <div className='p-1 group hover:bg-gradient-to-r from-[#bcad0c] to-[#bcad0c]'>
                 
                 <img src={services_mini} className='group-hover:opacity-10 rounded-xl' alt=''/>
                 
                 </div>
                  
                  
              </div>
              <div className=''>
             
                  <div className='p-1 group hover:bg-gradient-to-r from-[#000000] to-[#e4d458]'>
                 
                  <img src={services_mini} className='group-hover:opacity-10 rounded-xl' alt=''/>
                  
                  </div>
                    
              </div>
              
         
          </div>
    </>
  )
}

export default Services