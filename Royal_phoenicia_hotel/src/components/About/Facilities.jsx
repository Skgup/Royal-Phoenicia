import { Bell, DoorOpenIcon } from 'lucide-react'
import React from 'react'
import { FaRestroom, FaSwimmingPool } from 'react-icons/fa'

function Facilities() {
    return (
        <>
        <div className='flex justify-between  h-full w-full max-md:flex-col text-center p-20'>
            <div className='w-1/2 p-10 max-md:py-10 flex max-md:p-0 gap-4 justify-center flex-col items-center max-md:w-full'><Bell/>
            <h1 className='text-amber-950 text-4xl'>Restaurant</h1>
            <p className='text-gray-500  text-serif'>Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.</p></div>
            <div className='w-1/2 p-10  max-md:py-10 max-md:p-0 flex gap-4 justify-center flex-col items-center max-md:w-full'><FaSwimmingPool/>
            <h1 className='text-amber-950 text-4xl'>POOL</h1>
            <p className='text-gray-500  text-serif'>Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.</p></div>
            <div className='w-1/2 p-10 max-md:py-10 flex max-md:p-0 gap-4 justify-center flex-col items-center max-md:w-full'><DoorOpenIcon/>
            <h1 className='text-amber-950 text-4xl'>ROOM</h1>
            <p className='text-gray-500 text-serif'>Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and well-equipped rooms to suit diverse guest preferences.</p></div>
        </div>
        </>
    )
}

export default Facilities
