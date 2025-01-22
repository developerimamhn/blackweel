import React from 'react';
import Image from 'next/image';
import image3 from "../image/image3.png";
import image4 from "../image/image4.png";
import image5 from "../image/image5.png";

const Page1 = () => {
    return (
        <div className=''>
            <div className='container mx-auto py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]'>
                <h2 className="catagroyimage">Construction <span className='font-[600]'>Revolution</span></h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 justify-center items-center mt-[20px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[48px] gap-[15px] sm:gap-[16px] md:gap-[18px] lg:gap-[20px] xl:gap-[22px] 2xl:gap-[24px]'>
                    <div className='relative h-[250px] md:h-[300px] lg:h-[350px] xl:h-[408px]'>
                        <Image className='w-full absolute top-0 -z-[1] h-full object-cover' src={image3} alt='' />
                        <div className='flex justify-between flex-col h-full p-[15px] sm:p-[16px] md:p-[18px] lg:p-[20px] xl:p-[22px] 2xl:p-[24px] grid-[50px]'>
                            <h3 className="revoluction">Revolutionizing the <br/> building sector</h3>
                            <p className='usingptag'>Using layer-by-layer concrete <br/> construction with us.</p>
                        </div>
                    </div>
                    <div className='relative h-[250px] md:h-[300px] lg:h-[350px] xl:h-[408px]'>
                        <Image className='w-full  absolute top-0 -z-[1] h-full object-cover' src={image4} alt='' />
                        <div className='flex justify-between flex-col h-full p-[15px] sm:p-[16px] md:p-[18px] lg:p-[20px] xl:p-[22px] 2xl:p-[24px]'>
                            <h3 className="revoluction">Reductng <br/> construction time</h3>
                            <p className='usingptag'>Up to 50-70% less construction <br/> time advanced technology</p>
                        </div>
                    </div>
                    <div className='relative h-[250px] md:h-[300px] lg:h-[350px] xl:h-[408px]'>
                        <Image className='w-full  absolute top-0 -z-[1] h-full object-cover' src={image5} alt='' />
                        <div className='flex justify-between flex-col h-full p-[15px] sm:p-[16px] md:p-[18px] lg:p-[20px] xl:p-[22px] 2xl:p-[24px]'>
                            <h3 className="revoluction">Reductng costs <br/> and waste</h3>
                            <p className='usingptag'>Lowering costs by as much as 35% and <br/> cutting waste by 60%</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
export default Page1;