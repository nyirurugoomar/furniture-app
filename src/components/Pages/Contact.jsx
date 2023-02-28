import React from 'react'

function Contact() {
  return (
    <>
    <div className='w-full lg:h-screen mb-[30rem]'>
    <div className='max-w-[1240px] m-auto px-2 py-24 w-full '>
        <p className='md:text-[30px] tracking-widest uppercase  text-center text-black font-krona font-[700]'>
        Love to here from you 
        </p>
        
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-8 px-10'>
            
            <div className='p-20'>
            <h1 className='text-center text-[30px] font-[700] font-krona'>Contact US</h1>
                <form
                  action=""
                  method=""
                  enctype=""
                >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-[700] font-krona'>Name:</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      placeholder='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-[700] font-krona'>
                      Phone Number:
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='number'
                      name='phone'
                      placeholder='Tel'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 font-[700] font-krona'>Email:</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 font-[700] font-krona'>Subject:</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    placeholder='Subject'
                  />
                </div>
                <div className='flex flex-col py-2 '>
                  <label className='uppercase text-sm py-2 font-[700] font-krona'>Message:</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 '
                    rows='10'
                    name='message'
                    placeholder='Message'
                  ></textarea>
                </div>
                </div>
                <button type="submit" className='w-[150px] p-4 text-gray-100 mt-4 bg-black rounded-2xl hover:bg-[#F1C40F] hover:text-black font-[700] font-krona'>
                Submit
                </button>
                </form>
            </div>
          </div>
        
        </div>

        

    </div>
    </>
  )
}

export default Contact