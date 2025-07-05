"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={className}>
            <svg className="w-4 h-4 text-white relative z-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <svg className="w-4 h-4 text-white relative z-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
        </div>
    );
}

const Works = () => {
    const settings = {
        className: "center h-full content-center",
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
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="flex flex-col content-center items-center justify-center justify-items-center text-white">
            <h1 className='font-bold text-4xl'>Selected work</h1>
            <div className="h-full w-80 xsm:w-96 sm:w-lg xmd:w-xl md:w-2xl xlg:w-4xl xl:w-5xl 2xl:w-6xl content-center">
                <Slider {...settings}>
                    <div className='h-[500px] w-full slick-slide-content'>
                        <div className="flex flex-col gap-3 items-center justify-center h-full w-full text-center transition-all duration-300">
                            <div className='image-wrapper w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden transition-all duration-300'>
                                <img src="/img/work-victory.jpg" alt="work-victory" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='uppercase font-bold name-text'>vicory</h1>
                                <p className='description-text text-sm text-gray-300 mt-2 hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[500px] w-full slick-slide-content'>
                        <div className="flex flex-col gap-3 items-center justify-center h-full w-full text-center transition-all duration-300">
                            <div className='image-wrapper w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden transition-all duration-300'>
                                <img src="/img/work-metiew-smith.jpg" alt="work-metiew-smith" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='uppercase font-bold name-text'>metiew & smith</h1>
                                <p className='description-text text-sm text-gray-300 mt-2 hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[500px] w-full slick-slide-content'>
                        <div className="flex flex-col gap-3 items-center justify-center h-full w-full text-center transition-all duration-300">
                            <div className='image-wrapper w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden transition-all duration-300'>
                                <img src="/img/work-alex-nowak.jpg" alt="work-alex-nowak" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='uppercase font-bold name-text'>alex nowex</h1>
                                <p className='description-text text-sm text-gray-300 mt-2 hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='h-[500px] w-full slick-slide-content'>
                        <div className="flex flex-col gap-3 items-center justify-center h-full w-full text-center transition-all duration-300">
                            <div className='image-wrapper w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden transition-all duration-300'>
                                <img src="/img/work-victory.jpg" alt="work-victory" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='uppercase font-bold name-text'>vicory</h1>
                                <p className='description-text text-sm text-gray-300 mt-2 hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[500px] w-full slick-slide-content'>
                        <div className="flex flex-col gap-3 items-center justify-center h-full w-full text-center transition-all duration-300">
                            <div className='image-wrapper w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden transition-all duration-300'>
                                <img src="/img/work-metiew-smith.jpg" alt="work-metiew-smith" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='uppercase font-bold name-text'>metiew & smith</h1>
                                <p className='description-text text-sm text-gray-300 mt-2 hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[500px] w-full slick-slide-content'>
                        <div className="flex flex-col gap-3 items-center justify-center h-full w-full text-center transition-all duration-300">
                            <div className='image-wrapper w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden transition-all duration-300'>
                                <img src="/img/work-alex-nowak.jpg" alt="work-alex-nowak" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <h1 className='uppercase font-bold name-text'>alex nowex</h1>
                                <p className='description-text text-sm text-gray-300 mt-2 hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
}

export default Works;
