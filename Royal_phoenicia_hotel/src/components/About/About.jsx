import React from 'react'
import Count from '../common/Count';
import Facilities from './Facilities';

function About() {
    const images = [
        'https://picsum.photos/id/1015/600/600',
        'https://picsum.photos/id/1016/600/600',
        'https://picsum.photos/id/1018/600/600',
        'https://picsum.photos/id/1020/600/600',
      ];
    return (
        <><Count count="IV"/>
                <div className='m-3 p-8 text-center'><h1 className='text-6xl text-serif max-md:text-3xl bold text-amber-950 '>Exceptional gastronomy served in elegant spaces.</h1></div>
 
        <div className='flex justify-between max-md:flex-col p-6 overflow-hidden'>
        <div className="flex w-1/2 max-md:w-full gap-9 py-16 justify-center items-center min-h-screen max-md:flex-col ">
      <div className="w-[600px] h-[600px] overflow-y-scroll  ">
        {images.map((imgSrc, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 ">
            <img
              src={imgSrc}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
            <div className='flex justify-center gap-3 flex-col w-[30%] pr-20 max-md:w-full  max-md:mx-10'>
                <h1 className='text-serif text-5xl relative'>About us</h1>
                <p className='text-left'>Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest. The hotel features a luxurious spa and wellness center, where guests can indulge in soothing treatments and rejuvenating massages. For those seeking to maintain their fitness routine, the fully equipped gym provides a space for exercise, while the outdoor pool offers a relaxing environment to unwind. Dining at the hotel is a pleasure, with an on-site restaurant offering a diverse selection of cuisines in an elegant atmosphere. Additionally, the hotel provides business facilities, including meeting rooms and event spaces, ideal for corporate travelers. With its comprehensive range of services.</p>
            </div>
        </div>
        <div className='border border-gray-500 my-10 max-md:m-16'></div>
<Facilities/>
        </>
    )
}

export default About
