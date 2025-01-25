import React from 'react';
import Image from 'next/image';
import image12 from "../image/image12.png";
import image13 from "../image/image13.png";

const Page6 = () => {
    return (
        <div className='bg-[#F9F9F9] py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]'>
            <div className='container mx-auto px-[24] md:px-[0]'>
                <h2 className="!text-center catagroyimage !text-[#000]  !leading-[130%] mb-[25px] md:mb-[33px] lg:mb-[44px] xl:mb-[55px] 2xl:mb-[64px]">Investor <span className='font-[600]'>Relations</span></h2>
                <div className='grid grid-cols-1 sm:grid-cols-12 justify-center items-center mt-[20px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[48px] gap-[15px] sm:gap-[16px] md:gap-[18px] lg:gap-[20px] xl:gap-[22px] 2xl:gap-[24px]'>
                <div className="col-span-2"></div>
                <div className='relative h-[250px] md:h-[300px] lg:h-[350px] xl:h-[408px] col-span-4'>
                    <Image className='w-full  absolute top-0 -z-[0] h-full object-cover' src={image12} alt='' />
                    <div className='flex justify-between relative z-[1] flex-col h-full p-[15px] sm:p-[16px] md:p-[18px] lg:p-[20px] xl:p-[22px] 2xl:p-[24px]'>
                    <h3 className="fortocinvester">For OTC investors</h3>
                    <button className='loweringcost'>Click Here</button>
                    </div>
                </div>
                <div className='relative h-[250px] md:h-[300px] lg:h-[350px] xl:h-[408px] col-span-4'>
                    <Image className='w-full  absolute top-0 -z-[0] h-full object-cover' src={image13} alt='' />
                    <div className='flex justify-between flex-col h-full p-[15px] sm:p-[16px] md:p-[18px] lg:p-[20px] xl:p-[22px] 2xl:p-[24px] relative z-[1]'>
                        <h3 className="fortocinvester">For NON-US investors</h3>
                        <button className='loweringcost'>Click Here</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Page6;