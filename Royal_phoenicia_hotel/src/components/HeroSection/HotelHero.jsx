import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  
  "https://images.unsplash.com/photo-1745173036546-c56551790fb8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1744762567611-dee68f42ecc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
];

export default function HotelHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={true}>
          {images.map((img, index) => (
            index === current && (
              <motion.img
                key={img}
                src={`${img}?auto=format&fit=crop&w=1920&q=80`}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{
                  x: { type: "tween", ease: "easeInOut", duration: 1.5 },
                  opacity: { duration: 1.5},
                }}
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Fixed Center Card */}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" p-4  border border-gray-500  shadow-lg text-center w-[400px] ">
          <div className="bg-white p-8">
            <div className="border border-gray-500 p-13 ">
            <h2 className="text-lg text-gray-500 font-semibold mb-4">Favorite hotel</h2>
          <p className="mb-2 font-semibold text-gray-500">Business and Event Spaces</p>
          <p className="mb-2 font-semibold text-gray-500">Diverse Dining Options</p>
          <p className="mb-2 font-semibold text-gray-500">Multiple Swimming Pools</p>
          <p className="mb-2 font-semibold text-gray-500">Family-Friendly Amenities</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
