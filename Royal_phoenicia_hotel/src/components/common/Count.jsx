import React from 'react'

function Count({ count }) {
  return (
    <div className="flex justify-center items-center pt-20 pb-20 text-gray-500  "> 
      <div className="border border-gray-400 w-14 h-14 flex justify-center items-center">
        <div className="border-2 p-2 w-10 h-10 flex justify-center items-center border-gray-500">
          <span className=" font-serif text-2xl">{count}</span>
        </div>
      </div>
    </div>
  )
}

export default Count;
