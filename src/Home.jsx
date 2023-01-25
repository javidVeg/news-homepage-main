import React from 'react'
import img1 from "../assets/images/image-web-3-desktop.jpg"

const Home = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-4 gap-5 w-[80%]'>
      <div className=' grid col-span-2 row-span-2' >
        <img src={img1} alt="main image" />
      </div>
      <div className='grid bg-zinc-900 row-span-3 grid-rows-4 text-[#FFFDFA]'>
        <div className='  px-5 pt-5'>
          <h1 className=' text-[2.2rem] font-[700]  text-[#E9AB53]'>New</h1>
        </div>
        <div className='  px-5 '>
          <h2 className='font-[700]'>Hydrogen VS Electric Cars</h2>
          <p className=' text-[11px] text-[#C5C6CE]'>Will hydrogen fueled cars ever catch up to EV's?</p>
          <hr className="w-full h-[.5px] mt-3 bg-[#C5C6CE] border-0 rounded "></hr>
        </div>
        <div className='  px-5 '>
          <h2 className='font-[700]'>The Downside of AI Artistry</h2>
          <p className=' text-[11px] text-[#C5C6CE]'>What are the possible adverse effects of on-demand AI image generation?</p>
          <hr className="w-full h-[.5px] mt-3 bg-[#C5C6CE] bg-gray-100 border-0 rounded "></hr>
        </div>
        <div className='  px-5 '>
          <h2 className='font-[700]'>Is VC Funding Drying Up?</h2>
          <p className=' text-[11px] text-[#C5C6CE]'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>

      </div>
      <div className=' col-span-2 bg-slate-400'>

      </div>
      <div className='col-span-3 bg-yellow-400'>

      </div>
    </div>
  )
}

export default Home