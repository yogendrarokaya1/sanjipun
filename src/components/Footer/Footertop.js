import React from 'react'
import { SiTelegram, SiTwitter, SiDiscord } from 'react-icons/si'

export default function Footertop() {
  return (
    <div className="flex items-center justify-center">
      <div className=" p-8 max-w-screen-lg mx-auto">
        <div>
          <h2 className=" font-extrabold text-center mb-6 text-black text-[14px] ">Join Our Community</h2>

          <div className="flex flex-wrap justify-center gap-2">
            <button className=" p-2 text-5xl font-bold text-black inline-flex items-center space-x-2 rounded">
              <SiTelegram></SiTelegram>
            </button>
            <button className=" p-2 text-5xl font-bold text-black inline-flex items-center space-x-2 rounded">
              <SiTwitter></SiTwitter>
            </button>
            <button className=" p-2 text-5xl font-bold text-black inline-flex items-center space-x-2 rounded">
              <SiDiscord></SiDiscord>
            </button>
          </div>
          <h3 className="text-xs font-bold text-center m-6 text-red-500 tracking-[1.25em]">THE SCARF NINJA</h3>
          
        </div>
        <div className="text-center m-6 ">
            <img className='inline' src="./images/logoredsaint.png" alt="" />
          </div>
      </div>
    </div>

  )
}
