import React from 'react';
import heroVideo from './video.mp4';


const HeroArea = () => {
    return (
        <div className='container mx-auto px-[24px] sm:px-[0] '>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,_rgba(12,_12,_12,_0.08)_0%,_#0C0C0C_100%)] -z-[1]" />
            <div className="absolute top-0 left-0 w-full h-full -z-[3] bg-[linear-gradient(180deg, rgba(12, 12, 12, 0.08) 0%, #0C0C0C 100%)]">
                    <video
                src={heroVideo} // Use the imported video file
                className="size-full object-cover absolute top-0"
                autoPlay
                loop
                muted
                poster="./image2.png"
            />
            </div>

            <div className='mb-[40px] sm:mb-[50px] lg:mb-[70px] 2xl:mb-[100px]'>
                <h1 className='Construction'>No #1 3D Construction company</h1>
                <h2 className='Printing'>3D Construction Printing <div className='!leading-[116%] !font-[700]'> Sustainable Living</div></h2>
                <button className='buttonstli group'>Learn More
                    <svg className='w-[20px] lg:w-[24px] duration-300 ml-[-20px] lg:ml-[-24px] group-hover:ml-[0px] opacity-0 group-hover:opacity-100' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4302 5.92999L20.5002 12L14.4302 18.07" stroke="#0C0C0C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="#0C0C0C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default HeroArea;