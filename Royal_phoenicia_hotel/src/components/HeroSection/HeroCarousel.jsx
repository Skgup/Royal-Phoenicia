import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from '../navbar/TopBar';
import NavBar from "../navbar/NavBar";

const images = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <TopBar />
        <NavBar />

   
        <div className="absolute inset-0">
          <AnimatePresence initial={true}>
            {images.map((img, index) => (
              index === current && (
                <motion.img
                  key={img}
                  src={`${img}?auto=format&fit=crop&w=1920&q=80`}
                  initial={{ x: "100%", opacity: 0, scale: 1 }}
                  animate={{ x: "0%", opacity: 1, scale: 1.1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{
                    x: { type: "tween", ease: "easeInOut", duration: 1.5 },
                    opacity: { duration: 1.5 },
                    scale: { duration: 5, ease: "easeInOut" },
                  }}
                  className="object-cover w-full h-full absolute top-0 left-0"
                />
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
