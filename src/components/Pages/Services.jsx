import React from 'react'
import servicesImage from './images/image_services.png'
import services_mini from './images/minImage_services.png'


function Services() {
  return (
    <>
        <div className='pt-20 bg-services-banner-bg bg-cover h-[232px] '>
        <h1 className='text-center pt-10 text-[30px] text-[#F1C40F] font-[900] tracking-widest'> Our<span className='text-white font-[900]'> Services</span> </h1>
        </div>
        <div className='w-full h-full '>
            <img src={servicesImage} alt="" />
        </div>

        <div className='w-full h-screen  flex flex-col justify-between mb-12'>
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
              
              <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-28 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center py-3 px-4 rounded-3xl border-4 border-[#F1C40F] text-white font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300 '>More Info</p>
                 </div>
                 </div>
                 <h3 className='text-center font-[700] text-[20px] tracking-widest '>Lorem ipsum dolor</h3>  
              </div>

              <div className=' '>
              
              <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-28 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center py-3 px-4 rounded-3xl border-4 border-[#F1C40F] text-white font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300 '>More Info</p>
                 </div>
                 </div>
                 <h3 className='text-center font-[700] text-[20px] tracking-widest '>Lorem ipsum dolor</h3>
                  
                  
              </div>

              <div className=' '>
              
              <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-28 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center py-3 px-4 rounded-3xl border-4 border-[#F1C40F] text-white font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300 '>More Info</p>
                 </div>
                 </div>
                 <h3 className='text-center font-[700] text-[20px] tracking-widest '>Lorem ipsum dolor</h3>
                  
                  
              </div>

              

              
              
              
              
         
          </div>

          <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        
        
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full bg-[#F1C40F] rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              
              <div>
                
              </div>
              <div className=' text-start'>
                <p className=' pt-8 my-8 text-center text-[45px] font-[900] text-[#CA0000]'>Our Big Offer</p>
                <p className='my-4 text-[30px] font-[700]'>✅Delivery</p>
                <p className='my-4 text-[30px] font-[700]'>✅Technical Issue</p>
                <p className='my-4 text-[30px] font-[700]'>✅Shipping</p>
                <p className='my-4 text-[30px] font-[700]'>✅Support</p>
                
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto  lg:p-4'>
            <div className='p-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-x-8 gap-y-16 px-20'>

                <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-14 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center text-[0.8rem] px-4  border-2 rounded border-white text-white font-bold  cursor-pointer hover:scale-105 ease-in duration-300 '>Get</p>
                 </div>
                 </div>

                 <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-20 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center text-[0.8rem] px-4 border-2 rounded border-white text-white font-bold  cursor-pointer hover:scale-105 ease-in duration-300 '>Get</p>
                 </div>
                 </div>

                 <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-20 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center text-[0.8rem] px-4 border-2 rounded border-white text-white font-bold  cursor-pointer hover:scale-105 ease-in duration-300 '>Get</p>
                 </div>
                 </div>

                 <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-20 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center text-[0.8rem] px-4 border-2 rounded border-white text-white font-bold  cursor-pointer hover:scale-105 ease-in duration-300 '>Get</p>
                 </div>
                 </div>

                 <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-20 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center text-[0.8rem] px-4 border-2 rounded border-white text-white font-bold  cursor-pointer hover:scale-105 ease-in duration-300 '>Get</p>
                 </div>
                 </div>

                 <div className='relative flex items-center justify-center h-auto min-w-full  rounded-xl p-20 group hover:bg-gradient-to-r from-[rgb(40,40,40)] to-[#1f1e1e] bg-miniImage_services bg-cover '>
                 <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <p className='text-center text-[0.8rem] px-4 border-2 rounded border-white text-white font-bold  cursor-pointer hover:scale-105 ease-in duration-300 '>Get</p>
                 </div>
                 </div>
                        
                </div>
                
            </div>
          </div>
          
        </div>
        
      </div>
    </div>   
    <div className='w-full h-[168px] md:bg-banner-bg bg-cover md:mt-40 -mb-20   '>

            <form className='pt-10 justify-center flex flex-col-2 gap-10 '>
                     <input
                      className='border-2 rounded-3xl p-3 flex bg-[#c8c4c4] w-[463px] text-white font-[700]'
                      type='email'
                      name='mail'
                      placeholder='Email'
                    />
                    <button className='md:text-white border-2 p-4 rounded-2xl border-[#F1C40F] text-[20px] hover:bg-[#F1C40F] hover:text-black'>Subscribe</button>
            </form>

          </div>
    </>
  )
}

export default Services