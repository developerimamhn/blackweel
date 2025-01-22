"use client";

import React, { useState } from 'react';


const Page3 = () => {
    const [toggleIndex, setToggleIndex] = useState(1);
    const handleToggle = (index) => {
        setToggleIndex(toggleIndex === index ? null : index);
    };
    return (
        <div>
            <div className='container mx-auto py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]'>
                <div className="flex justify-between items-center gap-[30px] 2xl:gap-[75px] flex-col 2xl:flex-row mb-[40px]  sm:mb-[50px] lg:mb-[70px] 2xl:mb-[93px]">
                    <h2 className="flex-1 catagroyimage  !leading-[130%]">Why is 3D Concrete <div className='font-[600]'>Printing Better?</div></h2>
                    <p className='conceoferes flex-1'>3D Concrete Printing offers numerous advantages over traditional construction methods.</p>
                </div>
                <div className='overflow-auto scrollbar-custom'>
                <div className="grid grid-cols-4 justify-center items-center  w-[700px] sm:w-full">

                    <div className="" onClick={() => handleToggle(1)}>
                        <span className={`flex justify-center items-center p-[10px] md:p-[15px] xl:p-[20px] adfeer border-b-[1px] border-[#3C3838] group duration-300 ${toggleIndex === 1 ? 'before:w-[100%]' : 'before:w-[0]'} transition-all`}>
                            <svg className='w-[25px] lg:w-[35px] 2xl:w-[45px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className={`duration-300 group-hover:fill-[#EC784F] ${toggleIndex === 1 ? 'fill-[#EC784F]' : 'fill-[#ffffff14]'}`} width="48" height="48" rx="24" />
                            <path d="M21 32C17.229 31.1318 15 27.6772 15 24.5102C15 20.7445 18.3702 17.0232 20.7357 14.875C22.0204 13.7083 23.9797 13.7083 25.2643 14.875C26.7712 16.2434 28.5749 18.2501 29.7511 20.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M29 27.5C27.5 28.5 25 30.5 23 34M25 31C22.3362 25.1407 27.8347 23.2355 31.9249 23.0158C32.4185 22.9893 32.6653 22.976 32.8425 23.147C33.0198 23.3179 33.0095 23.5616 32.9891 24.049C32.8194 28.1017 30.9947 33.6068 25 31Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3 className={`ecofir group-hover:text-[#EC784F] duration-300 ${toggleIndex === 1 ? 'text-[#EC784F]' : 'text-[#fff]'}`}>Eco Friendly</h3>
                            <svg className={`w-[18px] lg:w-[20px] 2xl:w-[25px] group-hover:stroke-[#EC784F] duration-300 ${toggleIndex === 1 ? 'stroke-[#EC784F]' : 'stroke-white'}`} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3335 14.0002L7.29181 14.0002" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5003 8.16634C17.5003 8.16634 23.3335 12.4625 23.3335 13.9997C23.3335 15.5369 17.5002 19.833 17.5002 19.833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className={`constructionparea pt-[15px] md:pt-[18px] xl:pt-[24px]  transition-opacity duration-300 ${toggleIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>3D Concrete Construction Printing offers scalability by automating repetitive tasks.</p>
                    </div>
                    <div className="" onClick={() => handleToggle(2)}>
                        <span className={`flex justify-center items-center p-[10px] md:p-[15px] xl:p-[20px] adfeer border-b-[1px] border-[#3C3838] group duration-300 ${toggleIndex === 2 ? 'before:w-[100%]' : 'before:w-[0]'} transition-all`}>
                            <svg className='w-[25px] lg:w-[35px] 2xl:w-[45px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" className={`duration-300 group-hover:fill-[#EC784F] ${toggleIndex === 2 ? 'fill-[#EC784F]' : 'fill-[#ffffff14]'}`}/>
                            <path d="M24 25L29 29.5M24 25L19 29.5M24 25V20" stroke="white" stroke-width="1.5"/>
                            <path d="M30.1915 28.4456C30.7081 28.1485 30.9664 28 31.25 28C31.5336 28 31.7919 28.1485 32.3085 28.4456L32.9415 28.8097C33.4581 29.1068 33.7164 29.2553 33.8582 29.5C34 29.7447 34 30.0418 34 30.6359V31.3641C34 31.9582 34 32.2553 33.8582 32.5C33.7164 32.7447 33.4581 32.8932 32.9415 33.1903L32.3085 33.5544C31.7919 33.8515 31.5336 34 31.25 34C30.9664 34 30.7081 33.8515 30.1915 33.5544L29.5585 33.1903C29.0419 32.8932 28.7836 32.7447 28.6418 32.5C28.5 32.2553 28.5 31.9582 28.5 31.3641V30.6359C28.5 30.0418 28.5 29.7447 28.6418 29.5C28.7836 29.2553 29.0419 29.1068 29.5585 28.8097L30.1915 28.4456Z" stroke="white" stroke-width="1.5"/>
                            <path d="M15.6915 28.4456C16.2081 28.1485 16.4664 28 16.75 28C17.0336 28 17.2919 28.1485 17.8085 28.4456L18.4415 28.8097C18.9581 29.1068 19.2164 29.2553 19.3582 29.5C19.5 29.7447 19.5 30.0418 19.5 30.6359V31.3641C19.5 31.9582 19.5 32.2553 19.3582 32.5C19.2164 32.7447 18.9581 32.8932 18.4415 33.1903L17.8085 33.5544C17.2919 33.8515 17.0336 34 16.75 34C16.4664 34 16.2081 33.8515 15.6915 33.5544L15.0585 33.1903C14.5419 32.8932 14.2836 32.7447 14.1418 32.5C14 32.2553 14 31.9582 14 31.3641V30.6359C14 30.0418 14 29.7447 14.1418 29.5C14.2836 29.2553 14.5419 29.1068 15.0585 28.8097L15.6915 28.4456Z" stroke="white" stroke-width="1.5"/>
                            <path d="M22.9415 14.4456C23.4581 14.1485 23.7164 14 24 14C24.2836 14 24.5419 14.1485 25.0585 14.4456L25.6915 14.8097C26.2081 15.1068 26.4664 15.2553 26.6082 15.5C26.75 15.7447 26.75 16.0418 26.75 16.6359V17.3641C26.75 17.9582 26.75 18.2553 26.6082 18.5C26.4664 18.7447 26.2081 18.8932 25.6915 19.1903L25.0585 19.5544C24.5419 19.8515 24.2836 20 24 20C23.7164 20 23.4581 19.8515 22.9415 19.5544L22.3085 19.1903C21.7919 18.8932 21.5336 18.7447 21.3918 18.5C21.25 18.2553 21.25 17.9582 21.25 17.3641V16.6359C21.25 16.0418 21.25 15.7447 21.3918 15.5C21.5336 15.2553 21.7919 15.1068 22.3085 14.8097L22.9415 14.4456Z" stroke="white" stroke-width="1.5"/>
                            </svg>
                            <h3 className={`ecofir group-hover:text-[#EC784F] duration-300 ${toggleIndex === 2 ? 'text-[#EC784F]' : 'text-[#fff]'}`}>Scalable</h3>
                            <svg className={`w-[18px] lg:w-[20px] 2xl:w-[25px] group-hover:stroke-[#EC784F] duration-300 ${toggleIndex === 2 ? 'stroke-[#EC784F]' : 'stroke-white'}`} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3335 14.0002L7.29181 14.0002"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5003 8.16634C17.5003 8.16634 23.3335 12.4625 23.3335 13.9997C23.3335 15.5369 17.5002 19.833 17.5002 19.833"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className={`constructionparea pt-[15px] md:pt-[18px] xl:pt-[24px]  transition-opacity duration-300 ${toggleIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>3D Concrete Construction Printing offers scalability by automating repetitive tasks.</p>
                    </div>
                    <div className="" onClick={() => handleToggle(3)}>
                        <span className={`flex justify-center items-center p-[10px] md:p-[15px] xl:p-[20px] adfeer border-b-[1px] border-[#3C3838] group duration-300 ${toggleIndex === 3 ? 'before:w-[100%]' : 'before:w-[0]'} transition-all`}>
                            <svg className='w-[25px] lg:w-[35px] 2xl:w-[45px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" className={`duration-300 group-hover:fill-[#EC784F] ${toggleIndex === 3 ? 'fill-[#EC784F]' : 'fill-[#ffffff14]'}`}/>
                            <path d="M21 32C17.229 31.1318 15 27.6772 15 24.5102C15 20.7445 18.3702 17.0232 20.7357 14.875C22.0204 13.7083 23.9797 13.7083 25.2643 14.875C26.7712 16.2434 28.5749 18.2501 29.7511 20.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M29 27.5C27.5 28.5 25 30.5 23 34M25 31C22.3362 25.1407 27.8347 23.2355 31.9249 23.0158C32.4185 22.9893 32.6653 22.976 32.8425 23.147C33.0198 23.3179 33.0095 23.5616 32.9891 24.049C32.8194 28.1017 30.9947 33.6068 25 31Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3 className={`ecofir group-hover:text-[#EC784F] duration-300 ${toggleIndex === 3 ? 'text-[#EC784F]' : 'text-[#fff]'}`}>Efficient</h3>
                            <svg className={`w-[18px] lg:w-[20px] 2xl:w-[25px] group-hover:stroke-[#EC784F] duration-300 ${toggleIndex === 3 ? 'stroke-[#EC784F]' : 'stroke-white'}`} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3335 14.0002L7.29181 14.0002"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5003 8.16634C17.5003 8.16634 23.3335 12.4625 23.3335 13.9997C23.3335 15.5369 17.5002 19.833 17.5002 19.833"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className={`constructionparea pt-[15px] md:pt-[18px] xl:pt-[24px]  transition-opacity duration-300 ${toggleIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>3D Concrete Construction Printing offers scalability by automating repetitive tasks.</p>
                    </div>
                    <div className="" onClick={() => handleToggle(4)}>
                        <span className={`flex justify-center items-center p-[10px] md:p-[15px] xl:p-[20px] adfeer border-b-[1px] border-[#3C3838] group duration-300 ${toggleIndex === 4 ? 'before:w-[100%]' : 'before:w-[0]'} transition-all`}>
                        <svg  className='w-[25px] lg:w-[35px] 2xl:w-[45px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" className={`duration-300 group-hover:fill-[#EC784F] ${toggleIndex === 4 ? 'fill-[#EC784F]' : 'fill-[#ffffff14]'}`}/>
                            <path d="M16 20C16 17.1716 16 15.7574 17.0042 14.8787C18.0084 14 19.6246 14 22.8571 14H25.1429C28.3753 14 29.9916 14 30.9958 14.8787C32 15.7574 32 17.1716 32 20V29H16V20Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M15 29H33" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M22.6987 17.5659C23.9289 17.3896 25.9674 17.4601 24.2803 19.1527C22.1715 21.2684 19.0084 26.0289 22.6987 24.4421C26.3891 22.8554 27.9709 23.9132 26.3893 25.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24 29V33" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M17 34L20 29" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M31 34L28 29" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <h3 className={`ecofir group-hover:text-[#EC784F] duration-300 ${toggleIndex === 4 ? 'text-[#EC784F]' : 'text-[#fff]'}`}>Design </h3>
                            <svg className={`w-[18px] lg:w-[20px] group-hover:stroke-[#EC784F] 2xl:w-[25px] duration-300 ${toggleIndex === 4 ? 'stroke-[#EC784F]' : 'stroke-white'}`} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3335 14.0002L7.29181 14.0002"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5003 8.16634C17.5003 8.16634 23.3335 12.4625 23.3335 13.9997C23.3335 15.5369 17.5002 19.833 17.5002 19.833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    <p className={`constructionparea pt-[15px] md:pt-[18px] xl:pt-[24px]  transition-opacity duration-300 ${toggleIndex === 4 ? 'opacity-100' : 'opacity-0'}`}>3D Concrete Construction Printing offers scalability by automating repetitive tasks.</p>
                    </div>
                
                </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;