import React from 'react'
import ProductContainer from '../ProductContainer'
import chair2 from './images/chair2.png'
import chair3 from './images/chair3.png'
import chaire30 from './images/chaire30.png'

function ProductPages() {
  return (
    <>
    <div className='h-full w-full'>
        <div className='pt-20 bg-product-hero-bg bg-cover h-[232px] '>
        <h1 className='text-center pt-10 text-[30px] text-[#F1C40F] font-[900] tracking-widest'> Our<span className='text-black font-[900]'> Products</span> </h1>
        </div>

        <div className=''>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h1 className='text-center font-krona text-[60px] mb-10'>Our Special <span className='text-[#CA0000]'>Offers</span></h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 p-20'>
          <div>
            
            <img src={chaire30} className="hover:scale-110 ease-in duration-300" width='' height='580px' alt="" />
            
          </div>
          <div>
           
            <img src={chair2} className="hover:scale-110 ease-in duration-300" width='388' height='476px' alt="" />
            
          </div>
          <div>
            
            <img src={chair3} className="hover:scale-110 ease-in duration-300" width='388' height='476px' alt="" />
            
          </div>
          <div>
            
          </div>
        </div>
      </div>

        </div>
        <ProductContainer/>
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
    </div>
    </>
  )
}

export default ProductPages