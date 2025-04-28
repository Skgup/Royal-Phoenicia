import { Crown } from 'lucide-react';
import React from 'react';
import { FaBars, FaCalendarAlt, FaRegStar, FaStar } from 'react-icons/fa'; // Added FaStar

function TopBar() {
    return (
        <>
            <div className="flex items-center justify-between p-4 md:p-10 border-b-2 relative z-50 backdrop-blur-md bg-white/5 border-b-gray-500">
              
                <div>
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-white hover:bg-white/10 transition">
                        <FaBars className="text-lg" />
                        <span className="hidden sm:inline">Menu</span>
                    </button>
                </div>
                <div>
                    <div className="flex items-center  justify-between w-48 md:w-80 bg-transparent">
                        <h1 className="text-white text-xl font-bold">2021</h1>
                       <div className='text-center border border-gray-400 rounded-full h-30 w-30 max-sm:h-20 max-md:w-20 flex justify-between items-center text-white font-bold font-[cursive]'><Crown className='text-center'/> <h1 className='text-center text-4xl max-md:text-2xl'>Royal</h1></div>
                      <div className='flex'>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        <FaRegStar/>
                        </div>
                    </div>
                </div>

            
                <div>
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-white hover:bg-white/10 transition">
                        <FaCalendarAlt className="text-lg" />
                        <span className="hidden sm:inline">Booking</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopBar;
