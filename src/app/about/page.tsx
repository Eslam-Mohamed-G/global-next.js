import React from 'react';

const Page = () => {
    return (
        <div className=' border w-full h-full flex items-center justify-center'>
            <div className="flex flex-row">
                <div className="">
                    <div className="">
                        <p className='text-white text-6xl sm:text-5xl md:text-7xl font-extrabold'>
                            <span className='relative before:absolute before:top-1 before:-right-20 md:before:-right-28 before:border-t-11 before:border-l-11 before:border-transparent before:border-l-blueColor before:rotate-[60deg]'>we</span> <br />
                            believe 
                            <span className='relative before:absolute before:top-[9px] before:left-3.5 sm:before:top-0.5 sm:before:left-2 md:before:top-[12px] md:before:left-[17px] before:bg-blueColor before:w-6 before:h-6 md:before:w-7 md:before:h-7 before:rounded-full'> in</span><br />
                            <span className='relative before:absolute before:bottom-36 sm:before:bottom-32 md:before:bottom-44 before:-right-2 before:bg-blueColor before:w-3 before:h-3 before:rotate-45'>passionate</span><br />
                            <span className='relative before:absolute before:bottom-4 sm:before:bottom-2 md:before:bottom-4 before:-right-3 md:before:-right-4 before:bg-blueColor before:w-2 before:h-2 md:before:w-3 md:before:h-3'>people</span>
                        </p>
                    </div>
                </div>

                {/* right div for image */}
                <div className=""></div>
            </div>
        </div>
    );
}

export default Page;
