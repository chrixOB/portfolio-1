import React from 'react'
import Slider from 'react-slick';

function Chuffs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='border bg-gray-900'>
            <Slider {...settings} autoplay arrows >
                <div>
                    <h1>swipedf</h1>
                </div>
                <div>
                    <h1>swipedf</h1>
                </div>
                <div>
                    <h1>swipedf</h1>
                </div>
                <div>
                    <h1>swipedf</h1>
                </div>
                <div>
                    <h1>swipedf</h1>
                </div>
                <div>
                    <h1>swipedf</h1>
                </div>
            </Slider>
        </div>
    )
}

export default Chuffs