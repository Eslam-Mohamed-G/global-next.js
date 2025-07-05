"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className="flex flex-col gap-10 w-fit items-center justify-center text-white border border-red-400">
            <h1 className='font-bold text-4xl'>Selected work</h1>
            <div className="h-3/4 border w-80 xsm:w-96 sm:w-lg xmd:w-xl md:w-2xl xlg:w-4xl xl:w-5xl 2xl:w-6xl content-center">
                <Slider {...settings}>
                    <div className='h-full w-full border'>
                        <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
                            <div className='w-44 h-44 rounded-full overflow-hidden'>
                                <img src="/img/work-victory.jpg" alt="work-victory" className='w-full h-full' />
                            </div>

                            <div className='text-white'>
                                <h1 className='uppercase font-bold'>victory</h1>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-full border border-red-500'>
                        <div className="flex flex-col gap-5 h-full items-center justify-center">
                            <div className='w-44 h-44 rounded-full overflow-hidden'>
                                <img src="/img/work-metiew-smith.jpg" alt="work-metiew-smith" className='w-full h-full' />
                            </div>
                            <div className='text-white'>
                                <h1 className='uppercase font-bold'>metiew & smith</h1>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-full border'>
                        <div className="flex flex-col gap-5 h-full items-center justify-center">
                            <div className='w-44 h-44 rounded-full overflow-hidden'>
                                <img src="/img/work-alex-nowak.jpg" alt="work-alex-nowak" className='w-full h-full' />
                            </div>

                            <div className='text-white'>
                                <h1 className='uppercase font-bold'>alex nowax</h1>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* <div className="slider-container w-2xl">
                <Slider {...settings}>
                    <div className='h-96 w-1/3 border'>
                        <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
                            <div className='w-44 h-44 rounded-full overflow-hidden'>
                                <img src="/img/work-victory.jpg" alt="work-victory" className='w-full h-full' />
                            </div>

                            <div className='text-white'>
                                <h1 className='uppercase font-bold'>victory</h1>
                            </div>
                        </div>
                    </div>

                    <div className='h-96 w-1/3 border'>
                        <div className="flex flex-col gap-5 h-full items-center justify-center">
                            <div className='w-80 h-80 rounded-full overflow-hidden'>
                                <img src="/img/work-metiew-smith.jpg" alt="work-metiew-smith" className='w-full h-full' />
                            </div>
                            <div className='text-white'>
                                <h1 className='uppercase font-bold'>metiew & smith</h1>
                            </div>
                        </div>
                    </div>

                    <div className='h-96 w-1/3 border'>
                        <div className="flex flex-col gap-5 h-full items-center justify-center">
                            <div className='w-44 h-44 rounded-full overflow-hidden'>
                                <img src="/img/work-alex-nowak.jpg" alt="work-alex-nowak" className='w-full h-full' />
                            </div>

                            <div className='text-white'>
                                <h1 className='uppercase font-bold'>alex nowax</h1>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div> */}
        </div>
    );
}

export default Works;
