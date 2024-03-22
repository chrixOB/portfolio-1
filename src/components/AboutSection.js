import Image from 'next/image';
import React from 'react'
import SectionTitle from './SectionTitle';
import ButtonBackground from './ButtonBackground';

function AboutSection() {

    return (
        <div className='min-h-screen grid lg:grid-cols-2 sm:grid-cols-1' id='About'>
            <div className='h-full hidden lg:flex justify-center items-center'>
                <Image
                    src="/images/profile.jpg"
                    width={300}
                    height={300} 
                    className="bg-cover lg:w-[50%] lg:h-[70%] sm:w-[80%] sm:h-[80%] rounded-[50px] border-2 shadow-lg border-cyan-300 shadow-cyan-400 animate-pulse"
                    alt="Picture of the author"
                />
            </div>

            <div className='h-full flex items-center'>
                <div className='p-6'>
                    <SectionTitle firstText={'About'} secondText={'Me'} />
                    <p className='w-full lg:w-10/12'>
                        My name is James Tetteh Totimeh, a Final Year Computer Science Student
                        at Accra Technical University. I am a Software Engineer who is skilled
                        at Mobile App Development and Web App Development, AI and ML.
                        I am also an RPA Developer who is skilled at developing Software Bots
                        to help automate repetitive tasks.
                        My goal is to help businesses and organizations with problems solving and analysis.
                        I am committed to ongoing learning and staying up-to-date with the latest trends &
                        technologies
                    </p>

                    <div className='mt-6'>
                        <ButtonBackground title={'See More'} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutSection