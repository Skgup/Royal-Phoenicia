import React, { useState } from 'react';
import { Lock } from 'lucide-react';

function BookingButton({ text }) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-center h-20 items-center overflow-hidden pb-20 pt-20">
      <button
        onClick={handleToggle}
        className={`
          group relative px-6 py-2 border text-center backdrop-blur-md 
          h-20 w-20 rounded-full flex items-center justify-center
          transition-all duration-1000 overflow-hidden text-white border-gray-400 
          ${isActive ? 'bg-gray-600 w-24 h-24' : 'bg-white/4'} 
          hover:bg-gray-600 hover:w-24 hover:h-24 hover:rounded-full
        `}
      >
        <span
          className={`
            absolute text-gray-200 transition-all duration-1000
            ${isActive || 'group-hover:opacity-100 group-hover:scale-100'} 
            ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          `}
        >
          {text}
        </span>
        <Lock
          className={`
            transition-all text-2xl h-6 w-6 text-white duration-200
            ${isActive || 'opacity-0 group-hover:opacity-0 '}
             ${isActive ?  'opacity-0 scale-0' :'opacity-100 scale-100'}
          `}
        />
      </button>
    </div>
  );
}

export default BookingButton;
