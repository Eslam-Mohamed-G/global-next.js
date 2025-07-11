'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';


const sidebarMenu = [
    {
        id: "01",
        name: "Home",
        link: "/pages",
    },
    {
        id: "02",
        name: "Works",
        link: "/pages/works",
    },
    {
        id: "03",
        name: "About",
        link: "/pages/about",
    },
    {
        id: "04",
        name: "Contact",
        link: "/pages/contact",
    },
    {
        id: "05",
        name: "Hire Us",
        link: "/pages/hire",
    },
]

const Sidbar = () => {

    const pathName = usePathname();
    const router = useRouter();
    const currentIndex = useRef(0);
    const canScroll = useRef(true);

    useEffect(() => {
        const index = sidebarMenu.findIndex( item => item.link === pathName);
        if ( index !== -1) {
            currentIndex.current = index;
        }

        const handleKeyDown = (e:KeyboardEvent) => {
            if( e.key === "ArrowUp") {
                currentIndex.current = 
                currentIndex.current <= 0 ? sidebarMenu.length -1 : currentIndex.current - 1 ;
                router.push(sidebarMenu[currentIndex.current].link);
                
            }else if ( e.key === "ArrowDown"){
                currentIndex.current = 
                currentIndex.current >= sidebarMenu.length -1 ? 0 : currentIndex.current + 1;
                router.push(sidebarMenu[currentIndex.current].link);
            }
        }

        const handleWheelMouse  = ( e:WheelEvent) => {
            if ( !canScroll.current) return;
            if (e.deltaY < 0) {
                currentIndex.current = 
                currentIndex.current <= 0 ? sidebarMenu.length -1 : currentIndex.current - 1 ;
            } else if ( e.deltaY > 0 ) {
                currentIndex.current = 
                currentIndex.current >= sidebarMenu.length -1 ? 0 : currentIndex.current + 1;
            }
            router.push(sidebarMenu[currentIndex.current].link);
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('wheel', handleWheelMouse)
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheelMouse);
        };
    }, [router]);

    return (
        <aside className="text-textGray pl-3 pt-10">
            <nav className="w-fit m-auto py-14 relative z-10 before:content-[''] before:absolute before:left-[.8px] before:top-0 before:h-full before:w-0.5 before:bg-textGray/40 before:z-0">
                <ul className='flex flex-col gap-14'>
                    {sidebarMenu.map((menu, i) => (
                        <li className="items-center align-middle justify-items-center h-10" key={menu.id}>
                            <Link href={menu.link} onClick={()=>{currentIndex.current = i}} className='items-center justify-items-center'>
                                <div className="flex flex-row justify-items-center items-center justify-center gap-2">
                                    {/* blue&gray circle */}
                                    <span className={`w-1 h-1 rounded-full transition-all delay-75 z-50 ${pathName === menu.link ? "bg-blueColor" : "bg-white"} `} />

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
