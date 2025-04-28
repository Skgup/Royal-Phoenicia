import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from '../common/Button'
import Count from "../common/Count";
export default function HeroText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<>
    <Count count="I" />
    <div id="hero-section" className=" flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-center overflow-hidden"
        >
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-500 leading-relaxed px-4">
          The stay at Wellness & pool Hotel<br />
         RoyalPhoenicia means enjoying every moment. <br />
          Relax. Find inspiration. Be fascinated.
        </h1>
      </motion.div>
    </div>
       <Button  text="Hotel"/>
        </>
  );
}
