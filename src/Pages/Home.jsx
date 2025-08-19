import React from 'react'
import logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import banner from '../assets/banner.png'
import download from '../assets/download.png'
import { CgDetailsMore } from "react-icons/cg";
import Discover from '../components/Discover';
import { ImCross } from "react-icons/im";

const Home = () => {
    const [moreMenu, setMoreMenu] = React.useState(false)
    const [showSearch, setShowSearch] = React.useState(false)
    return (
        <div className='relative'>
            <div className='h-[70px] w-full bg-white flex items-center justify-between px-[20px] lg:justify-evenly'>
                <div><img src={logo} alt="" /></div>
                <div className='hidden lg:flex items-center gap-[15px]'>
                    <span className='text-[20px] font-semibold text-gray-500 hover:text-black '>Discover</span>
                    <span className='text-[20px] font-semibold text-gray-500 hover:text-black'>shop</span>
                    <span className='text-[20px] font-semibold text-gray-500 hover:text-black'>Deals</span>
                </div>
                <div className='h-[30px] rounded-full border-[1px] border-gray-800 px-[20px]  py-[20px] lg:flex items-center gap-[10px] hidden '>
                    <span><IoSearch className='text-[20px] font-semibold' /></span>
                    <input type="text" className=' w-[380px] border-0 outline-none ' placeholder='Search ,Fashion ,Home & more' />
                </div>
                <div className='hidden lg:flex items-center gap-[20px]'>
                    <button className='h-[50px] max-w-[150px] border-[1px] border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105'>
                        Login
                    </button>

                    <button className='h-[50px] w-[80px] lg:w-[150px] border-[1px] border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center bg-black text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105'>
                        Signup
                    </button>
                </div>
                <div className='flex items-center gap-[10px] lg:hidden relative'>
                    <span onClick={() => {
                        if (showSearch) {
                            //sochhenge hum 
                        } else {
                            setShowSearch(true)
                        }
                    }}><IoSearch className='text-[20px] font-semibold' /></span>

                    <div className={`h-[30px] rounded-full border-[1px] border-gray-800 px-[20px]  py-[20px] flex items-center gap-[10px] absolute transform transition-all duration-300 ${showSearch ? 'right-[75px]' : 'right-[-300px]'} `}>
                        <input type="text" className=' w-[150px] border-0 outline-none ' placeholder='Search ,Fashion ,Home & more' />
                        <span className='cursor-pointer' onClick={() => setShowSearch(false)} ><ImCross className='text-[10px] ' /></span>
                    </div>

                    <span className='border-[1px] border-gray-800 rounded-2xl px-[10px] py-[10px]' onClick={() => setMoreMenu(!moreMenu)}><CgDetailsMore className='text-[20px] font-semibold' /></span>

                </div>
            </div>

            <div className={`lg:hidden absolute h-[270px] w-full bg-white transform transition-all flex flex-col items-center  gap-[20px] duration-300 ${moreMenu ? 'top-[70px]' : 'top-[-270px]'}`} >
                <div className='flex flex-col justify-center items-center gap-[15px]'>
                    <span className='text-[20px] font-semibold text-gray-500 hover:text-black '>Discover</span>
                    <span className='text-[20px] font-semibold text-gray-500 hover:text-black'>shop</span>
                    <span className='text-[20px] font-semibold text-gray-500 hover:text-black'>Deals</span>
                </div>

                <div className='flex items-center gap-[20px]'>
                    <button className='h-[50px] max-w-[150px] border-[1px] border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105'>
                        Login
                    </button>

                    <button className='h-[50px] w-[80px] lg:w-[150px] border-[1px] border-gray-800 px-[20px] rounded-full font-semibold text-[18px] cursor-pointer flex items-center justify-center bg-black text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105'>
                        Signup
                    </button>
                </div>

            </div>

            <div className="w-full bg-[#f0f9fe] flex flex-col md:flex-row items-center justify-center gap-[30px] px-[15px] py-[60px] lg:h-[500px] ">
                <div className="w-full md:w-[50%] lg:w-[370px] px-[15px]">
                    <span className="text-[32px] md:text-[45px] lg:text-[50px] leading-tight tracking-[-0.03em] font-serif">
                        Watch Creators near you & around the world
                    </span>
                    <br /><br />
                    <span className="text-[14px] md:text-[16px] font-semibold">
                        Your feed, your way. Download the all-new LTK experience to watch your Creators, your city, and your trends.
                    </span>
                    <br /><br />
                    <img src={download} alt="" className="cursor-pointer ml-[5px] md:ml-0" />
                </div>

                <div className="w-full md:w-[50%] flex justify-center">
                    <img src={banner} alt="" className="max-w-full h-auto" />
                </div>
            </div>

            <Discover />


        </div>
    )
}

export default Home