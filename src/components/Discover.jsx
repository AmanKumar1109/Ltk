import React from 'react'
import lg from '../assets/lg.webm'
import lg2 from '../assets/lg2.webm'
import lg3 from '../assets/lg3.webm'

const Discover = () => {
    return (
        <div className="w-full px-4 md:px-10 lg:px-[130px] py-10">
            {/* Heading */}
            <h1 className="text-[24px] md:text-[30px] mt-[15px] font-serif text-center md:text-left">
                Discover why 40 million people love LTK
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">

                {/* Card 1 */}
                <div className="bg-[#edeff1] rounded-[20px] overflow-hidden flex flex-col">
                    <video
                        src={lg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    />
                    <div className="bg-white py-[20px] flex flex-col flex-1">
                        <span className="text-[20px] font-semibold px-[15px]">
                            Connect with Creators you follow
                        </span>
                        <p className="text-[15px] px-[15px] mt-[15px] flex-1">
                            Stay up to date with the Creators you know and love — all in one place.
                        </p>
                        <button className="h-[50px] max-w-[250px] border border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 mt-[20px] mx-[15px]">
                            Check it out
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#edeff1] rounded-[20px] overflow-hidden flex flex-col">
                    <video
                        src={lg2}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    />
                    <div className="bg-white py-[20px] flex flex-col flex-1">
                        <span className="text-[20px] font-semibold px-[15px]">
                            Find products, brands, & Creators
                        </span>
                        <p className="text-[15px] px-[15px] mt-[15px] flex-1">
                            Browse over 450 million products, 8,000 brands, and hundreds of thousands of global Creators.
                        </p>
                        <button className="h-[50px] max-w-[250px] border border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 mt-[20px] mx-[15px]">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#edeff1] rounded-[20px] overflow-hidden flex flex-col">
                    <video
                        src={lg3}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    />
                    <div className="bg-white py-[20px] flex flex-col flex-1">
                        <span className="text-[20px] font-semibold px-[15px]">
                            Watch Creators near you
                        </span>
                        <p className="text-[15px] px-[15px] mt-[15px] flex-1">
                            Get your daily dose of videos from Creators near you, in major cities, or by interest.
                        </p>
                        <button className="h-[50px] max-w-[250px] border border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 mt-[20px] mx-[15px]">
                            Watch now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
