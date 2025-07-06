import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='w-1/2 flex items-center justify-center md:justify-end'>
            <img src="/img/contact-visual.png" alt="contact-visual"  className='w-full h-full object-cover absolute start-0 end-0 top-0 bottom-0 -z-10'/>
            <div className='bg-black/80 text-white max-w-2xs text-center flex flex-col items-center justify-center gap-4 p-10 shadow-2xl shadow-black'>
                <Link href="mailto:eslam.gomaa.3rb@gmail.com" target="_blank" className='font-bold'>eslam.gomaa.3rb@gmail.com</Link>
                <Link href="tel:+201021698146" className='font-bold'>+01021698146</Link>
                <Link href="https://github.com/Eslam-Mohamed-G" target="_blank" className='block bg-blueColor font-bold capitalize w-28 py-1'>github</Link>
                <Link href="https://www.linkedin.com/in/islam-mg" target="_blank" className='block bg-blueColor font-bold capitalize w-28 py-1'>linked in</Link>
            </div>
        </div>
    );
}

export default Page;
