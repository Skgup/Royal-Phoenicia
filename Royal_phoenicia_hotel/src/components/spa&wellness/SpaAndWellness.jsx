import React from "react";
import Button from "../common/Button";
import Count from "../common/Count";

function SpaAndWellness() {
  const cards = [
    {
      id: 1,
      title: ["Fitness", "Center"],
      subtitle: "For those looking to maintain their fitness routine while traveling, the hotel offers a well-equipped fitness center.",
    
      imageUrl:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: ["On-Site", "Dining"],
      subtitle: "The hotel features an on-site restaurant serving a variety of cuisines, diverse dining experiences without leaving the premises.",
 
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: ["Wellness Center", "& Spa"],
      subtitle: "Guests can unwind with various spa services, including full-body massages, steam rooms, and other spa facilities",
     
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=180",
    },
  ];

  return (<> 
  <div className=""><Count count="III"/></div>
    <div className="flex justify-center  h-[80vh] max-md:h-screen max-md:flex-col">
     
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative border-2 hover:border-0 border-gray-500 w-full h-full bg-gray-100 overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
          >
          
            <div
              className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            ></div>

           
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 ease-in-out"></div>

            
            <div className="absolute inset-0 top-1 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight space-y-2">
                {card.title.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </h2>
            </div>

    
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white  text-lg">{card.subtitle}</p>
            </div>

            {/* Bottom Button (Always visible) */}
            
          </div>
        ))}
 
    </div><div className="relative  top-0 bottom-0 left-1/2 transform -translate-x-1/2">
             
            <Button  text="Spa & Wellness"/>
            </div></>
  );
}

export default SpaAndWellness;
