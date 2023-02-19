import React from 'react'
import card1 from '../assets/card_living room.png'
import card2 from '../assets/card_bedroom.png'
import card3 from '../assets/card_dining room.png'
import card4 from '../assets/card_homeoffice.png'


function Categories() {
  return (
    <>
    <div className='w-full lg:h-screen p-2 bg-[#F1C40F]'>
    
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h1 className='text-center font-krona text-[40px] mb-20'>Our Categories</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <img src={card1} className="hover:scale-110 ease-in duration-300" width='388' height='476px' alt="" />
          </div>
          <div>
            <img src={card2} className="hover:scale-110 ease-in duration-300" width='388' height='476px' alt="" />
          </div>
          <div>
            <img src={card3} className="hover:scale-110 ease-in duration-300" width='388' height='476px' alt="" />
          </div>
          <div>
            <img src={card4} className="hover:scale-110 ease-in duration-300" width='388' height='476px' alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Categories