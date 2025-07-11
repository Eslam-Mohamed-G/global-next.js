'use client'
import { useSidebar } from '@/context/SidebarContext';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const sidebarMenu = [
    {
        id: "01",
        name: "Home",
        link: "/",
    },
    {
        id: "02",
        name: "Works",
        link: "/works",
    },
    {
        id: "03",
        name: "About",
        link: "/about",
    },
    {
        id: "04",
        name: "Contact",
        link: "/contact",
    },
    {
        id: "05",
        name: "Hire Us",
        link: "/hire",
    },
]

type Props = {
    children: ReactNode;
}

const TransformLayout = ({ children }: Props) => {
    const { isOpen, setIsOpen } = useSidebar();

    const handleMenu = () => {
        if (isOpen) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <>
            <div className={`h-screen ${isOpen ? 'custom-3d-transform cursor-pointer' : 'remove-3d-transform'}`} onClick={handleMenu}>
                {children}
            </div>
            {/* navbar */}
            <aside className={`text-white ${isOpen ? 'outer-nav' : 'return' }`}>
                <ul className='flex flex-col gap-5 md:gap-10 text-4xl sm:text-5xl md:text-6xl font-extrabold'>
                    {sidebarMenu.map((menu, i) => (
                        <li key={menu.id} onClick={handleMenu}>
                            <Link href={menu.link}>{menu.name}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default TransformLayout;
