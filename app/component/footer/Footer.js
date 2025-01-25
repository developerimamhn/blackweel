import React from 'react';
import Image from 'next/image';
import image14 from "../image/image14.png";

const Footer = () => {
    return (
        <div className='bg-[#0C0C0C] pt-[40px] sm:pt-[50px] lg:pt-[70px] 2xl:pt-[93px]'>
            <div className='container mx-auto px-[24] md:px-[0]'>
                <div className='grid md:grid-cols-12 justify-between items-center gap-[30px] pb-[24px] border-b-[1px] border-[#141A24]'>
                    <div className='col-span-5 flex flex-col gap-[10px] md:gap-[25px] xl:gap-[32px]'>
                        <Image className='w-[70px] md:w-[80px] lg:w-[100px] xl:w-[110px] 2xl:w-[130.67px]' src={image14} alt=''/>
                        <p className='imailsection'>info@blackwell3d.com</p>
                    </div>
                    <div className='grid grid-cols-8 md:grid-cols-7 justify-center items-start col-span-7 gap-[15px]'>
                        <div className='col-span-2 flex items-start justify-center'>
                            <h3 className='footeraddres'>Address</h3>
                        </div>
                        <div className='col-span-3 flex items-start justify-center '>
                            <p className='imailsection'>701 South Carson Street <br className='md:block hidden'/> Suite 200 <br className='md:block hidden'/> Carson City, NV 89701</p>
                        </div>
                        <div className='col-span-3 md:col-span-2 flex items-start justify-center'>
                            <p className='imailsection'>1F/19, Albudoor Bldg <br className='md:block hidden'/> Naif Dubai 95905 <br className='md:block hidden'/> United Arab Emirates</p>
                        </div>
                    </div> 
                </div>
                <p className='copyriteblackwell'>© 2025 Blackwell 3D Construction Corp. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;