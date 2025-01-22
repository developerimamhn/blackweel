import React from 'react';
import Image from 'next/image';
import image6 from "../image/image6.png";

const Page2 = () => {
    return (
        <div className='bg-[#F9F9F9]'>
            <div className='container mx-auto py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]'>
                <h2 className="catagroyimage pb-[40px] sm:pb-[50px] lg:pb-[70px] 2xl:pb-[93px] !text-[#23201F]">Construction <span className='font-[600]'>& Technology</span></h2>
                <div className='sm:grid grid-cols-12 gap-[16px] mb-[40px] sm:mb-[35px] lg:mb-[48px]'>
                    <span className='aboutus col-span-2'>About us</span>
                    <p className="blackwell col-span-10 mt-[50px]">Blackwell holding is a modern construction company driven by technology that combines hardware, software, and instructional resources to help people live more sustainably and contribute to a better society.</p>
                </div>
                <Image className='w-full' src={image6} alt=""/>
                <div className="mt-[30px] sm:mt-[40px] lg:mt-[60px] 2xl:mt-[84px]">
                    <span className='aboutus '>How It Work</span>
                    <h2 className="catagroyimagess pb-[30px] sm:pb-[40px] lg:pb-[60px] 2xl:pb-[80px] !text-[#23201F] mt-[15px] sm:mt-[16px] lg:mt-[20px] 2xl:mt-[24px]">Transforming Construction <div className='font-[600]'>with 3D Printing</div></h2>
                </div>
                <div className="grid sm:grid-cols-3 justify-center items-center gap-[14px] md:gap-[15px] xl:gap-[18px]">
                    <div className="threeime w-full">
                        <span className=''>
                            <svg className='w-[25px] lg:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#F9F9F9"/>
                            <path d="M24 23.5C24.4955 23.5 24.9562 23.3015 25.8775 22.9045L26.5423 22.618C28.1808 21.912 29 21.559 29 21C29 20.441 28.1808 20.088 26.5423 19.382L25.8775 19.0955C24.9562 18.6985 24.4955 18.5 24 18.5C23.5045 18.5 23.0438 18.6985 22.1225 19.0955L21.4577 19.382C19.8192 20.088 19 20.441 19 21C19 21.559 19.8192 21.912 21.4577 22.618L22.1225 22.9045C23.0438 23.3015 23.5045 23.5 24 23.5ZM24 23.5V29.5" stroke="#EC784F" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M29 21V27C29 27.559 28.1808 27.912 26.5423 28.618L25.8775 28.9045C24.9562 29.3015 24.4955 29.5 24 29.5C23.5045 29.5 23.0438 29.3015 22.1225 28.9045L21.4577 28.618C19.8192 27.912 19 27.559 19 27V21" stroke="#EC784F" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M21.1443 14.5C18.4872 14.5608 16.9353 14.8146 15.8749 15.8749C14.8146 16.9353 14.5608 18.4872 14.5 21.1443M26.8557 14.5C29.5128 14.5608 31.0647 14.8146 32.1251 15.8749C33.1854 16.9353 33.4392 18.4872 33.5 21.1443M26.8557 33.5C29.5128 33.4392 31.0647 33.1854 32.1251 32.1251C33.1854 31.0647 33.4392 29.5128 33.5 26.8557M21.1443 33.5C18.4872 33.4392 16.9353 33.1854 15.8749 32.1251C14.8146 31.0647 14.5608 29.5128 14.5 26.8557" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <h3 className='contaienraas3d py-[8px] lg:py-[12px]'>3D Construction</h3>
                        <p className='buildp'>We use 3D printing and robotic construction to build durable homes in just a week.</p>
                    </div>
                    <div className="threeime w-full">
                        <span className=''>
                        <svg className='w-[25px] lg:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="#F9F9F9"/>
                        <path d="M25 14L14 19" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24 15V34H19C17.1144 34 16.1716 34 15.5858 33.4142C15 32.8284 15 31.8856 15 30V19"     stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24 19L34 24" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 33.9997H29C30.8856 33.9997 31.8284 33.9997 32.4142 33.4139C33 32.8281 33 31.8853 33 29.9997V23.5" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30 22V19" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 23H20M19 27H20" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28 26H29" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.5 34V30" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </span>
                        <h3 className='contaienraas3d py-[8px] lg:py-[12px]'>3D Construction</h3>
                        <p className='buildp'>We use 3D printing and robotic construction to build durable homes in just a week.</p>
                    </div>
                    <div className="threeime w-full">
                        <span className=''>
                        <svg className='w-[25px] lg:w-[35px] 2xl:w-[48px]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="#F9F9F9"/>
                        <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 32.5L19.9061 27.227C20.1916 26.1564 20.3344 25.621 20.7386 25.3105C21.1427 25 21.6968 25 22.8048 25H25.1952C26.3032 25 26.8573 25 27.2614 25.3105C27.6656 25.621 27.8084 26.1564 28.0939 27.227L29.5 32.5" stroke="#EC784F" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M21.5 25L23.0769 21.361C23.4701 20.4537 23.6667 20 24 20C24.3333 20 24.5299 20.4537 24.9231 21.361L26.5 25" stroke="#EC784F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </span>
                        <h3 className='contaienraas3d py-[8px] lg:py-[12px]'>3D Construction</h3>
                        <p className='buildp'>We use 3D printing and robotic construction to build durable homes in just a week.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Page2;