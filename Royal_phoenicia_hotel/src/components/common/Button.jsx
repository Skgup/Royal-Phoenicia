import React from 'react'
import { ArrowRight } from "lucide-react";

function Button({ text }) {
  return (
    <div className="flex justify-center h-20 items-center  overflow-hidden   pb-20 pt-20 hover:overflow-hidden"> 
      <button className="group relative px-6 py-2 border text-center hover:bg-gray-600  text-gray-500 border-gray-400 rounded-full  transition-all duration-1000 overflow-hidden w-auto hover:w-24 hover:h-24 hover:rounded-full flex items-center justify-center">
        <span className="transition-all text-2xl duration-200 group-hover:opacity-0 overflow-hidden">{text}</span>
        <ArrowRight  className="absolute hover:h-20 hover:w-20 text-gray-200  opacity-0 scale-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100  overflow-hidden" />
      </button>
    </div>
  )
}

export default Button;
