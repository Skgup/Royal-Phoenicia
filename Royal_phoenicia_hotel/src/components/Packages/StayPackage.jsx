import React from 'react';
import { Lock } from 'lucide-react'; 
import Button from '../common/Button';
import BookingButton from '../common/BookingButton';

function StayPackage() {
  const card = [
    {
      id: 1,
      title: "Royal Weekend Escape Package",
      subtitle: "From BHD 250 / Per person / 3 Night",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Family Fun Staycation",
      subtitle: "From BHD 150 / 4 person / 2 Night",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Dining Delight Package",
      subtitle: "From BHD 180 / 2 person / 2 Night",
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Relax and Recharge Package",
      subtitle: "From BHD 200 / 2 person / 3 Night",
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=180",
    },
  ];

  return (<>
    <div className="bg-orange-50 min-h-screen w-screen flex items-center justify-center flex-col ">
        <div className='m-3 p-8'><h1 className='text-7xl max-md:text-3xl text-amber-950 '>Stay Packages</h1></div>
      <div className="flex gap-8 px-10 overflow-x-auto w-full max-md:flex-col scrollbar-hiden">
        {card.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[50%] max-md:w-full h-[80vh] relative group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="text-sm text-white text-center tracking-widest">All season</div>
              <div className="text-center text-white">
                <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
                <p className="text-sm">{card.subtitle}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <Button className="text-white"  text="More" />
                <div className="">
                  <BookingButton text="Booking" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div> <div className='border border-gray-500 m-30 max-md:m-16'></div></>
  );
}

export default StayPackage;
