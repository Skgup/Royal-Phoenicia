import React, { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";

function Button({ text }) {
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setClicked(true);
      setTimeout(() => setClicked(false), 1000); 
    }
  };

  return (
    <div className="flex justify-center h-24 items-center overflow-hidden pb-20 pt-20">
      <button
        onClick={handleClick}
        className={`group relative px-6 py-2 border text-center text-gray-500 border-gray-400 rounded-full transition-all duration-1000 overflow-hidden w-auto flex items-center justify-center
          ${clicked ? 'w-20 h-20 rounded-full bg-gray-600' : ''}
          md:hover:bg-gray-600 md:hover:w-24 md:hover:h-24 md:hover:rounded-full
        `}
      >
        <span
          className={`transition-all text-2xl duration-200 overflow-hidden
            ${clicked ? 'opacity-0' : 'opacity-100'}
            md:group-hover:opacity-0
          `}
        >
          {text}
        </span>

        <ArrowRight
          className={`absolute text-gray-200 transition-all duration-1000 overflow-hidden
            ${clicked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            md:group-hover:opacity-100 md:group-hover:scale-100
          `}
        />
      </button>
    </div>
  );
}

export default Button;
