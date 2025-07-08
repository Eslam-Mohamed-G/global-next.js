import React from 'react';

const Page = () => {
    return (
        <div className='border border-red-600 w-full h-full flex flex-col items-center justify-center gap-10'>
            <h1 className='font-bold text-white text-3xl'>You wont us to do</h1>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="text-white flex flex-row md:flex-col gap-3 xsm:gap-6 md:gap-10 items-center justify-center border">
                    <div className='flex flex-col md:flex-row gap-3 xsm:gap-6 md:gap-10'>
                        <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-52 lg:w-56 py-3'>app design</button>
                        <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-52 lg:w-56 py-3'>graphic design</button>
                        <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-52 lg:w-56 py-3'>motion design</button>
                    </div>
                    <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-3 xsm:gap-6 md:gap-10 max-w-2xl'>
                        <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-52 lg:w-56 py-3'>ux design</button>
                        <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-52 lg:w-56 py-3'>web design</button>
                        <button className='font-bold xsm:text-[20px] capitalize border-2 hover:bg-blueColor transition-all delay-150 cursor-pointer w-40 xsm:w-48 md:w-52 lg:w-56 py-3'>marketing</button>
                    </div>
                </div>

                {/* form */}
                <div className="w-full">
                    <form action="" className=' flex flex-col justify-center gap-10'>
                        <div className="flex flex-col md:flex-row md:gap-10">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 capitalize">name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-xl text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 capitalize">email</label>
                            </div>
                        </div>
                        <button type="submit" className="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg w-full md:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase font-bold cursor-pointer">send request</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
