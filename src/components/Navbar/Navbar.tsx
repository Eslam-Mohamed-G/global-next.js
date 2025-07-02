import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center text-white py-5 px-5 md:px-12 xl:px-20">
            {/* logo */}
            <div className="flex flex-row gap-2">
                <Image src="/img/logo.png" width={30} height={30} alt={"logo"} />
                <span className='uppercase font-bold text-white'>global</span>
            </div>

            <button className='text-white'>5</button>
        </nav>
    );
}

export default Navbar;
