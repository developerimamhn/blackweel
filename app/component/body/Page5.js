"use client";

import React ,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Autoplay,Navigation } from 'swiper/modules';
import Image from 'next/image';
import image9 from "../image/image9.png";
import image10 from "../image/image10.png";
import image11 from "../image/image11.png";

const Page5 = () => {
    const [activeButton, setActiveButton] = useState(null); // Track active button

    const handleToggle = (buttonId) => {
      setActiveButton(buttonId); // Set the active button ID
      // Slider navigation logic can go here
    };
    return (
        <div className='bg-[#F9F9F9] py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]'>
            <div className='container mx-auto px-[24] md:px-[0]'>
            <div className="flex justify-between items-center flex-col lg:flex-row gap-[30px] 2xl:gap-[75px]  mb-[33px]  sm:mb-[44px] lg:mb-[55px] 2xl:mb-[62px]">
                    <h2 className="catagroyimage pb-[8px] lg:pb-[10px] 2xl:pb-[15px] !text-[#0C0C0C] text-[25px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[44px] 2xl:text-[34px] !leading-[130%] lg:w-[300px] xl:w-[400px] 2xl:w-[500px]">Our <span className='font-[600]'>Team</span></h2>
                    <p className='customaioruteam text-center lg:text-left'>Our team is a dynamic group of professionals with diverse expertise in construction, 3D printing, engineering, and design.</p>
                </div>
                
            </div>
            <div className='relative'>
                <Swiper
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                      }}
                    modules={[Autoplay,Navigation]}
                    centeredSlides={true}
                    breakpoints={{
                        40: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                          },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 25,
                        },
                        1024: {
                            
                          slidesPerView: 5,
                          spaceBetween: 16,
                        },
                      }} 
                    loop={true}
                    // autoplay={{
                    //     delay: 1000,
                    //     disableOnInteraction: false,
                    // }}
                    className="mySwiper cursor-pointer "
                    >
                    <SwiperSlide>
                        <div className="relative">
                            <Image className='w-full' src={image9} alt="Image 9" />
                            <div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] z-2 flex flex-col justify-center items-center gap-[clamp(10px, 2vw, 16px)]'>
                                <h3 className='sailfzsodnd'>Mitesh Rasaikar</h3>
                                <p className='fucdercdd'>FOUNDER & CTO</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <Image className='w-full' src={image10} alt="Image 9" />
                            <div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] z-2 flex flex-col justify-center items-center gap-[clamp(10px, 2vw, 16px)]'>
                                <h3 className='sailfzsodnd'>Saif Zaveri</h3>
                                <p className='fucdercdd'>FOUNDER & CEO</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <Image className='w-full' src={image11} alt="Image 9" />
                            <div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] z-2 flex flex-col justify-center items-center gap-[clamp(10px, 2vw, 16px)]'>
                                <h3 className='sailfzsodnd'>Ali Khan</h3>
                                <p className='fucdercdd'>ADVISOR</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <Image className='w-full' src={image9} alt="Image 9" />
                            <div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] z-2 flex flex-col justify-center items-center gap-[clamp(10px, 2vw, 16px)]'>
                                <h3 className='sailfzsodnd'>Saif Zaveri</h3>
                                <p className='fucdercdd'>FOUNDER & CEO</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <Image className='w-full' src={image10} alt="Image 9" />
                            <div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] z-2 flex flex-col justify-center items-center gap-[clamp(10px, 2vw, 16px)]'>
                                <h3 className='sailfzsodnd'>Ali Khan</h3>
                                <p className='fucdercdd'>ADVISOR</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative w-full">
                            <Image className='w-full' src={image11} alt="Image 9" />
                            <div className='absolute bottom-[32px] left-[50%] translate-x-[-50%] z-2 flex flex-col justify-center items-center gap-[clamp(10px, 2vw, 16px)] w-full'>
                                <h3 className='sailfzsodnd'>Murali Krishna V</h3>
                                <p className='fucdercdd w-full'>INDEPENDENT DIRECTOR</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    
            </div>
            <div className='flex justify-center items-center gap-[12px] lg:gap-[16px] mx-auto pt-[25px] lg:pt-[35px] xl:pt-[40px] 2xl:pt-[50px]'>
                    <button
                        className={`flex justify-center items-center gap-[8px] sliderButton duration-300 prev ${
                        activeButton === 1 ? "!bg-[#EC784F] !px-[16px]" : "!bg-white px-auto"
                        }`}
                        onClick={() => handleToggle(1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all ${
                            activeButton === 1 ? "!stroke-[#fff]" : "!stroke-[#0C0C0C]"
                            }`} style={{
                            width: "clamp(12px, 2vw, 20px)",
                            }} viewBox="0 0 24 24" fill="none">
                        <path d="M3.99982 12H19.9998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.9996 17C8.9996 17 3.99965 13.3176 3.99963 12C3.99962 10.6824 8.99963 7 8.99963 7"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {activeButton === 1 && <span className="duration-300">Prev</span>}
                    </button>
                    <button
                        className={`flex justify-center items-center gap-[8px] sliderButton duration-300 next ${
                        activeButton === 2 ? "!bg-[#EC784F]" : "!bg-white"
                        }`}
                        onClick={() => handleToggle(2)}
                    >
                    {activeButton === 2 && <span className="duration-300">Next</span>}
                        <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all ${
                            activeButton === 2 ? "!stroke-[#fff]" : "!stroke-[#0C0C0C]"
                            }`} style={{
                            width: "clamp(12px, 2vw, 20px)",
                            }} viewBox="0 0 24 24" fill="none">
                        <path d="M20.0002 12H4.0002" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.0004 17C15.0004 17 20.0003 13.3176 20.0004 12C20.0004 10.6824 15.0004 7 15.0004 7"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
        </div>
    );
};

export default Page5;