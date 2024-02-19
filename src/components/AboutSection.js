import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import SectionTitle from './SectionTitle';
import ButtonBackground from './ButtonBackground';

function AboutSection() {

    return (
        <div className='h-screen grid lg:grid-cols-2 sm:grid-cols-1' id='About'>
            <div className='h-full flex justify-center items-center '>
                <Image
                    src="/images/profile.jpg"
                    width={300}
                    height={300} 
                    className="bg-cover lg:w-[50%] lg:h-[70%] sm:w-[80%] sm:h-[80%] rounded-[50px] border-2 shadow-lg border-cyan-300 shadow-cyan-400 animate-pulse"
                    alt="Picture of the author"
                />
            </div>
            <div className='h-full flex items-center '>
                <div>
                    <SectionTitle firstText={'About'} secondText={'Me'}/>
                    <p>My name is James Tetteh Totimeh, a Final Year Student at Accra Technical University</p>

                    <ButtonBackground title={'See More'}/>
                </div>
            </div>
            
        </div>
    )
}

export default AboutSection