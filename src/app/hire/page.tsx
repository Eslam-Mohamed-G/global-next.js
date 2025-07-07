import React from 'react';

const Page = () => {
    return (
        <div className='border border-red-600 w-full flex flex-col items-center justify-center gap-20'>
            <h1 className='font-bold text-white text-3xl'>You wont us to do</h1>
            <div className="text-white flex flex-row md:flex-col gap-3 xsm:gap-6 md:gap-10 items-center justify-center">
                <div className='flex flex-col md:flex-row gap-3 xsm:gap-6 md:gap-10'>
                    <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-56 py-3'>app design</button>
                    <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-56 py-3'>graphic design</button>
                    <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-56 py-3'>motion design</button>
                </div>
                <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-3 xsm:gap-6 md:gap-10 max-w-2xl'>
                    <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-56 py-3'>ux design</button>
                    <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-56 py-3'>web design</button>
                    <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-56 py-3'>marketing</button>
                </div>
            </div>
        </div>
    );
}

export default Page;
