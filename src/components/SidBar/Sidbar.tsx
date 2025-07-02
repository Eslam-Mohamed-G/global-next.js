'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


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

const Sidbar = () => {

    const pathName = usePathname();

    return (
        <aside className="border border-red-500 text-gray-500 w-36 flex items-center content-center justify-items-center align-middle">
            <nav className="border-l-1 border-l-blue-500 w-fit m-auto">
                <ul className='flex flex-col gap-5'>
                    {sidebarMenu.map((menu) => (
                        <li className="items-center align-middle justify-items-center h-10" key={menu.id}>
                            <Link href={menu.link} className='items-center justify-items-center'>
                                <div className="flex flex-row justify-items-center items-center justify-center gap-2">
                                    {/* blue&gray circle */}
                                    <span className={`w-1 h-1 rounded-full transition-all delay-75 ${pathName === menu.link ? "bg-blue-500" : "bg-white"} `} />

                                    {/* text */}
                                    <div className="flex-1 relative flex gap-2 items-center">
                                        <span className={`absolute transition-all delay-75 ${pathName === menu.link ? '-left-9 text-white' : 'left-0'}`}>{menu.id}</span>
                                        <span className={`text-white transition-all delay-75 ${pathName === menu.link ? 'opacity-100' : 'opacity-0'}`}>{menu.name}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidbar;
