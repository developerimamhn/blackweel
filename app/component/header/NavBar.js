"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import logo1 from '../image/logo1.png';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='bg-[#fff] relative z-30'>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-[0]'>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-[#0C0C0C] text-[22px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-[#0C0C0C] text-[22px] absolute' />
                    </div>
                </div>
                <Link href="*" className='Froggo-Logo w-[44.926px] 2xl:w-[64.926px]'><Image src={logo1} alt=''/></Link>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-between items-start sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] sm:bg-transparent bg-[#FFFFFF] sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="#home">Home</Link>
                    <Link className={`Link-manu-bar`} href="#About">About</Link>
                    <Link className='Link-manu-bar' href="#Technology">Technology</Link>
                    <Link className='Link-manu-bar' href="#Team">Team</Link>
                    <Link className={`Link-manu-bar`} href="#Relations">Relations</Link>
                    <Link className={`Link-manu-bar`} href="#FAQs">FAQs</Link>
                    <Link className={`Link-manu-bar`} href="#More">More</Link>
                </nav>

                
                <ul className=' manu-sosul-area'>
                        <button className='contactusbtn'>Contact US</button>
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;