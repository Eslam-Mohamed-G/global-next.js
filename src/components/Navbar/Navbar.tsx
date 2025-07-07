'use client'
import React from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className="flex flex-row justify-between items-center text-white py-5 px-5 md:px-12 xl:px-20 relative z-50">
            {/* logo */}
            <div className="flex flex-row gap-2">
                <Image src="/img/logo.png" width={30} height={30} alt={"logo"} />
                <span className='uppercase font-bold text-white'>global</span>
            </div>
            
            <Link href="/hire" className={pathName === "/" || pathName === "/hire" ? 'hidden':'block bg-blueColor px-4 py-0.5 text-white uppercase font-bold'}>Hire us</Link>

            <button data-collapse-toggle="mega-menu-icons" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg cursor-pointer">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

        </nav>
    );
}

export default Navbar;
