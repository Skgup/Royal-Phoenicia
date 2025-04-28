import React from 'react'
import Count from '../common/Count';
import Button from '../common/Button';

function Accommodation() {
  const card = [
    { id: 1, title: "Rooms", imageUrl: "https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=180" },
    { id: 2, title: "Pools", imageUrl: "https://up.yimg.com/ib/th?id=OIP.RBtkhh0GsHeOMB7OuNyhlQHaE8&pid=Api&rs=1&c=1&qlt=95&w=152&h=101" },
    { id: 3, title: "Dining", imageUrl: "https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=180" },
  ];

  return (
    <>
      <Count count="II" />

      <div className="flex justify-center gap-8 px-10 h-[80vh] max-md:flex-col">
        {card.map((card) => (
          <div
            key={card.id}
            className="relative border-2 hover:border-0 border-gray-500 w-full h-full bg-gray-100 overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            ></div>

            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl  font-bold text-gray-800 group-hover:text-4xl  group-hover:text-gray-700 transition-colors duration-500">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <Button text="Accommodation" />

    </>
  );
}

export default Accommodation;
