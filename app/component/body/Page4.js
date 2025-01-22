import React from 'react';
import image7 from "../image/image7.png";
import image8 from "../image/image8.png";
import Image from 'next/image';

const Page4 = () => {
    return (
        <div className='bg-[#F9F9F9]'>
            <div className='container mx-auto py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]'>
                <h2 className="flex-1 !text-[#0C0C0C] !text-center catagroyimage pb-[30px] sm:pb-[40px] lg:pb-[50px] 2xl:pb-[64px] !font-[600]">The Technology</h2>
                <div className='bg-[#FFF] flex-col md:flex-row flex jsutify-between items-center pl-[25px] md:pl-[30px] lg:pl-[35px] xl:pl-[40px] 2xl:pl-[48px] gap-[25px] md:gap-0'>
                    <div className='flex-1'>
                    <h2 className="flex-1 catagroyimage pb-[10px] lg:pb-[15px] 2xl:pb-[20px] !text-[#0C0C0C] text-[20px] sm:text-[22px] md:text-[22px] lg:text-[25px] xl:text-[30px] 2xl:text-[34px] !leading-[130%]">What is 3D concrete <div className='font-[600]'>Printing technology?</div></h2>
                    <p className='prointeradvaf'>A construction 3D printer builds homes by layering materials like concrete, using automation to create faster.</p>
                    </div>
                    <div className='flex-1'><Image src={image7} alt=""/></div>
                </div>

                <div className='bg-[#FFF] flex-col-reverse md:flex-row flex jsutify-between items-center px-[25px] md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[48px] py-[40px] md:py-[50px] lg:py-[65px] xl:py-[70px] 2xl:py-[84px] gap-[25px] md:gap-[30px] lg:gap-[35px] xl:gap-[40px] 2xl:gap-[48px] mt-[24px]'>
                    <div className='flex-1'><Image className='h-full object-cover' src={image8} alt=""/></div>
                    <div className='flex-1'>
                        <h2 className="catagroyimage pb-[8px] lg:pb-[10px] 2xl:pb-[15px] !text-[#0C0C0C] text-[20px] sm:text-[22px] md:text-[22px] lg:text-[25px] xl:text-[30px] 2xl:text-[34px] !leading-[130%]">The construction <div className='font-[600]'>Revolution has arrived</div></h2>
                        <p className='prointeradvaf'>❝3D printing, automation, and digitization are revolutionizing construction by enabling faster builds, innovative designs, and reduced material waste.❞</p>
                        <h3 className='kasperlas pt-[20px] md:pt-[25px] lg:pt-[30px] xl:pt-[35px] 2xl:pt-[40px]'>- Kasper Lynge, Ph.D</h3>
                        <p className='deputehof'>Deputy head of department at the department of construction and building design at aarhus university.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page4;