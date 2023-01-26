import React from 'react'
import img1 from "../assets/images/image-web-3-desktop.jpg"
import img2 from "../assets/images/image-gaming-growth.jpg"
import img3 from "../assets/images/image-retro-pcs.jpg"
import img4 from "../assets/images/image-top-laptops.jpg"

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-3 grid-rows-7 gap-5 w-[80%]'>
      <div className=' grid col-span-2 row-span-3 ' >
        <img src={img1} alt="main image" />
      </div>
      <div className='grid bg-zinc-900 row-span-5 grid-rows-4 text-[#FFFDFA]'>
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
      <div className=' grid grid-cols-2 col-span-2 row-span-2'>
        <div className=''>
          <h3 className=' font-[800] text-[2.5rem] leading-10 w-[90%]'>The Bright Future of Web 3.0?</h3>
        </div>
        <div className='grid pl-2 grid-rows-6'>
          <p className=' pr-1  row-span-4 text-[11px]'>We dive into the next evolution of the web that claims to put the pow
            er of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <button className='w-1/2 row-span-3 row-start-4s bg-[#F15E50] text-[#FFFDFA] text-[11px] font-[700]'>R E A D &nbsp; M O R E</button>
        </div>

      </div>
      <div className=' grid grid-cols-3 gap-5 row-span-2 col-span-3 bg-yellow-400 '>
        <div className=''>
          <img width="28%" src={img2} alt="image two" />
        </div>
        <div className=''>
          <img width="28%"  src={img3} alt="image three" />
        </div>
        <div className=''>
          <img width="28%"  src={img4} alt="image four" />
        </div>

      </div>
    </div>
    </>
  )
}

export default Home