'use client'
import React from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSidebar } from "@/context/SidebarContext";

const Navbar = () => {
    const pathName = usePathname();
    const {isOpen, setIsOpen} = useSidebar();

    const handleMenu = ()=>{setIsOpen(!isOpen)}
    
    return (
        <nav className="flex flex-row justify-between items-center text-white py-5 px-5 md:px-12 xl:px-20 relative z-50">
            {/* logo */}
            <div className="flex flex-row gap-2">
                <Image src="/img/logo.png" width={30} height={30} alt={"logo"} />
                <span className='uppercase font-bold text-white'>global</span>
            </div>
            
            <Link href="/hire" className={pathName === "/" || pathName === "/hire" ? 'hidden':'block bg-blueColor px-4 py-0.5 text-white uppercase font-bold'}>Hire us</Link>

            <button onClick={handleMenu} type="button" className="inline-flex items-center w-5 h-4 justify-center text-sm text-white cursor-pointer border-y-2 border-white">
                <span className='bg-white w-3 h-0.5 rounded-2xl'></span>
            </button>
        </nav>
    );
}

export default Navbar;
