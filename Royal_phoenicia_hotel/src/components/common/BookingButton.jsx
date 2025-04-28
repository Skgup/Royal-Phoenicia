import React from 'react'
import { Lock } from 'lucide-react'
function BookingButton( {text}) {
    return (
        <>
         <div className="flex justify-center h-20 items-center  overflow-hidden    pb-20 pt-20 hover:overflow-hidden"> 
      <button className="group relative px-6 py-2 border text-center backdrop-blur-md h-20 w-20 bg-white/4 rounded-full  hover:bg-gray-600  text-white border-gray-400  transition-all duration-1000 overflow-hidden  hover:w-24 hover:h-24 hover:rounded-full flex items-center justify-center">
        <span className=" absolute hover:h-20 hover:w-20 text-gray-200  opacity-0 scale-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100  overflow-hidden">{text}</span>
        <Lock className="transition-all text-2xl h-6 w-6 text-white duration-200 group-hover:opacity-0 overflow-hidden" />
      </button>
    </div>
        </>
    )
}

export default BookingButton
