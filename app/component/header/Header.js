import React from 'react';
import NavBar from './NavBar';
import HeroArea from './HeroArea';

const Header = () => {
    return (
        <div className='h-[50vh] sm:h-screen flex flex-col justify-between relative'>
            <NavBar/>
            <HeroArea/>
        </div>
    );
};

export default Header;