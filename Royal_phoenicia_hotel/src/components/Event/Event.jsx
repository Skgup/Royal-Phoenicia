import React from 'react';
import Marquee from "react-fast-marquee";
import Button from '../common/Button';
import Count from '../common/Count';
function Event() {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100%',
    };

    return (<>
        <div style={backgroundImageStyle} className='relative w-full   overflow-y-auto'>
            <Count count="V"/>
            <Marquee className='text-gray-400 text-9xl   text-serif text-center absolute ' >
                <h1 className='px-36'>Corporate Events</h1>
                <h1 className='px-36'>Social Celebrations</h1>
             
            </Marquee>
            <div className="absolute  z-50 inset-0  flex items-center justify-center overflow-y-auto">
        <div className="   border border-gray-500  shadow-lg h-[400px] text-center w-[400px] ">
          <div className="bg-white p-8">
            <div className="border border-gray-500 p-13 ">
            <h2 className="text-lg text-gray-500 font-semibold mb-4">For Companies</h2>
          <p className=" font-semibold text-gray-500">Host your formal business meetings in a unique and refreshing setting.

Enjoy elegant venues, comfortable accommodations, and exceptional cuisine that elevate every professional gathering.</p>
<Button text="More"/>
         
            </div>
          </div>
        </div>
      </div>
            <div className="absolute  z-50 inset-0  flex items-center justify-center overflow-y-auto">
        <div className="   border border-gray-500  shadow-lg h-[400px] text-center w-[400px] ">
          <div className="bg-white p-8">
            <div className="border border-gray-500 p-13 ">
            <h2 className="text-lg text-gray-500 font-semibold mb-4">For Companies</h2>
          <p className=" font-semibold text-gray-500">Host your formal business meetings in a unique and refreshing setting.

Enjoy elegant venues, comfortable accommodations, and exceptional cuisine that elevate every professional gathering.</p>
<Button text="More"/>
         
            </div>
          </div>
        </div>
      </div>
        </div> 
       
      </>
    );
}

export default Event;
