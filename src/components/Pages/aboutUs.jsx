import React from 'react'
import aboutImage from '/Users/Omar/Desktop/react-projects/furniture/furniture/furniture-app/src/assets/photo-aboutus.png'

function aboutUs() {
  return (
    <>
    <div className='w-full md:h-full flex items-center py-20 '>
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

                <div className='flex  justify-between max-w-[330px]  py-4'>
                    <div className=' shadow-lg bg-white  p-6 cursor-pointer rounded'> 
                        <button>button 1</button>
                        
                    </div>

                    <div className='shadow-lg bg-white p-6 cursor-pointer rounded'> 
                      <button>button 1</button>
                    </div>

                    

                    
                    
                </div>
                
            </div>
            <div className='w-full m-auto flex items-center  justify-center '>
            <img src={aboutImage} height={50} alt="" />
            </div>
            
        </div>

    </div>
    
    
      
    </>
  )
}

export default aboutUs