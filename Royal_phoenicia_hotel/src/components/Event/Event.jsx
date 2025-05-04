import React from 'react';
import Marquee from "react-fast-marquee";
import Button from '../common/Button';
import Count from '../common/Count';

function Event() {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            style={backgroundImageStyle}
            className='relative w-full min-h-screen bg-cover bg-center'
        >
           <div className="pb-10"> <Count count="V" /></div>

            <Marquee className='text-gray-300 text-4xl sm:text-6xl pt-3 md:text-8xl lg:text-9xl font-serif absolute  z-10'>
                <h1 className='px-16'>Corporate Events</h1>
                <h1 className='px-16'>Social Celebrations</h1>
            </Marquee>

            <div className="absolute z-20 inset-0 flex items-center justify-center pt-10">
                <div className=" max-w-md max-md:w-[70%] border border-gray-500 shadow-lg bg-white p-6 sm:p-8">
                    <div className="border border-gray-500 p-4">
                        <h2 className="text-lg sm:text-xl text-center text-gray-600 font-semibold mb-4">For Companies</h2>
                        <p className="text-sm sm:text-base text-center font-medium text-gray-600 mb-4">
                            Host your formal business meetings in a unique and refreshing setting.
                            Enjoy elegant venues, comfortable accommodations, and exceptional cuisine
                            that elevate every professional gathering.
                        </p>
                        <Button text="More" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
