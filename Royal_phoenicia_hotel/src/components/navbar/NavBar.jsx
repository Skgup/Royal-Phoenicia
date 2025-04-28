import React from 'react';

function NavBar() {
    return (
        <>
            <div className="bg-transparent">
                <nav className="flex flex-wrap justify-center items-center relative z-50 backdrop-blur-md bg-white/5 border-b-2 border-gray-500 p-4">
                    {["Rooms", "Wellness", "Gastro", "Hotel", "Events", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="mx-2 md:mx-6 font-bold tracking-wide uppercase text-xs md:text-sm py-2 md:py-6 hover:border-b-2 hover:border-white transition-colors duration-300 text-white"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default NavBar;
