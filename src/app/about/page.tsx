import React from 'react';

const Page = () => {
    return (
        <div className='w-full h-full flex items-center justify-start'>
            <div className="flex flex-row w-full relative lg:pl-10 xl:pl-36">
                <div className="flex flex-col gap-14 lg:w-2xl relative z-10">
                    <div className="flex flex-col items-start gap-10">
                        <p className='text-white text-6xl sm:text-5xl md:text-7xl font-extrabold'>
                            <span className='relative before:absolute before:top-1 before:-right-20 md:before:-right-28 before:border-t-11 before:border-l-11 before:border-transparent before:border-l-blueColor before:rotate-[60deg]'>we</span> <br />
                            believe
                            <span className='relative before:absolute before:top-[9px] before:left-3.5 sm:before:top-0.5 sm:before:left-2 md:before:top-[12px] md:before:left-[17px] before:bg-blueColor before:w-6 before:h-6 md:before:w-7 md:before:h-7 before:rounded-full'> in</span><br />
                            <span className='relative before:absolute before:bottom-36 sm:before:bottom-32 md:before:bottom-44 before:-right-2 before:bg-blueColor before:w-3 before:h-3 before:rotate-45'>passionate</span><br />
                            <span className='relative before:absolute before:bottom-4 sm:before:bottom-2 md:before:bottom-4 before:-right-3 md:before:-right-4 before:bg-blueColor before:w-2 before:h-2 md:before:w-3 md:before:h-3'>people</span>
                        </p>
                        <button className='text-white font-bold uppercase flex gap-2 items-center content-center'>
                            career
                            <svg className="w-4 h-4 text-white relative z-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>

                    {/* there images */}
                    <div className="flex flex-row gap-5 md:gap-10 h-1/3">
                        <div className="w-1/3 h-2/3 flex justify-center items-center overflow-hidden text-white bg-blueColor group cursor-pointer">
                            <div className="w-full h-full relative">
                                <img src="/img/about-winners.jpg" alt="winners"  className='w-full h-full object-cover block transition-transform duration-300 ease-in-out scale-90 sm:scale-80 group-hover:scale-110'/>
                                <span className='uppercase text-blueColor font-bold absolute -bottom-5 right-2 transition-all delay-150 group-hover:-bottom-0'>winners</span>
                            </div>
                        </div>

                        <div className="w-1/3 h-2/3 box-border overflow-hidden text-white bg-blueColor group cursor-pointer">
                            <div className="w-full h-full relative">
                                <img src="/img/about-philosophy.jpg" alt="philosophy"  className='w-full h-full object-cover block transition-transform duration-300 ease-in-out  scale-90 sm:scale-80 group-hover:scale-110'/>
                                <span className='uppercase text-blueColor font-bold absolute -bottom-5 right-2 transition-all delay-150 group-hover:-bottom-0'>philosophy</span>
                            </div>
                        </div>

                        <div className="w-1/3 h-2/3 box-border overflow-hidden text-white bg-blueColor group cursor-pointer">
                            <div className="w-full h-full relative">
                                <img src="/img/about-history.jpg" alt="history"  className='w-full h-full object-cover block transition-transform duration-300 ease-in-out  scale-90 sm:scale-80 group-hover:scale-110'/>
                                <span className='uppercase text-blueColor font-bold absolute -bottom-5 right-0 sm:right-2 transition-all delay-150 group-hover:-bottom-0'>history</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right div for big img */}
                <div className="w-96 xlg:w-[450px] hidden sm:block absolute z-0 right-20 xlg:right-32 xlg:bottom-0 xl:right-40 sm:right-0 sm:bottom-5 md:bottom-10">
                    <img src="/img/about-visual.png" alt="visual" className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    );
}

export default Page;
