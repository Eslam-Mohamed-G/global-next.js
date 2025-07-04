import React from 'react';
import Slider from "react-slick";

const Works = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
    return (
        <div>
            <h1 className='text-white font-bold text-3xl'>Selected work</h1>
        </div>
    );
}

export default Works;
