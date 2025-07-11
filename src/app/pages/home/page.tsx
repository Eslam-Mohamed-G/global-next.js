import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className="bg-black w-full mx-auto flex flex-col md:items-center gap-7 sm:gap-10">
            <div className="flex sm:items-center pb-10 sm:pb-0 justify-between relative before:content-[''] before:absolute before:bottom-0 before:h-0.5 before:start-0 before:end-2.5 sm:before:end-3.5 before:bg-borderGray before:z-0">
                {/* text */}
                <div className="flex flex-col md:justify-center text-white gap-10">
                    {/* there words */}
                    <div className="flex flex-col text-5xl md:text-6xl xl:text-[74px] font-extrabold">
                        <span>Your next</span>
                        <span>interactive</span>
                        <span>experience</span>
                    </div>

                    {/* link to hire us */}
                    <Link href="/pages/hire" className="relative group cursor-pointer w-fit px-3 py-1 flex items-center content-center gap-2">
                        <div className="bg-blueColor w-20 group-hover:w-full h-full absolute top-0 right-0 z-10 transition-all delay-75" />
                        <span className="w-fit uppercase font-bold relative z-50">Hire us</span>

                        <svg className="w-4 h-4 text-white relative z-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>

                {/* introduction image */}
                <img src="/img/introduction.png" alt="introduction" className="hidden sm:block w-80 md:w-full m-0 p-0" />
            </div>

            <div className="flex-1 flex flex-col md:flex-row md:justify-around md:mx-auto text-white relative before:content-[''] before:absolute before:-top-[31px] sm:before:-top-[43px] before:w-7 before:h-1 before:start-5 before:bg-blueColor before:z-0">
                <div className="flex flex-col gap-1 sm:gap-4 md:max-w-3xs text-start cursor-pointer opacity-15 hover:opacity-100 transition-all delay-100">
                    <h1 className="uppercase font-bold">metiew & smith</h1>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-4 md:max-w-3xs md:mx-6 lg:mx-14 my-6 md:my-0 text-start cursor-pointer opacity-15 hover:opacity-100 transition-all delay-100">
                    <h1 className="uppercase font-bold">fantasy interactive</h1>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-4 md:max-w-3xs text-start cursor-pointer opacity-15 hover:opacity-100 transition-all delay-100">
                    <h1 className="uppercase font-bold">paul & shark</h1>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia</span>
                </div>
            </div>
        </div>
    );
}

export default Page;
