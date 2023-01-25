import React from 'react'
import img1 from "../assets/images/image-web-3-desktop.jpg"

const Home = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-4 gap-5 w-[75%]'>
      <div className=' grid col-span-2 row-span-2' >
        <img src={img1} alt="main image" />
      </div>
      <div className='grid bg-zinc-900 row-span-3'>

      </div>
      <div className=' col-span-2 bg-slate-400'>

      </div>
      <div className='col-span-3 bg-yellow-400'>
        
      </div>
    </div>
  )
}

export default Home