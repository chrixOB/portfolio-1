import Image from 'next/image';
import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import ButtonBackground from './ButtonBackground';
import SocialMediaHandles from './SocialMediaHandles';

function AboutSection() {

    const [isFullText, setIsFullText] = useState(false)

    const text = `My name is Anang Christian Obodai, a Final Year Computer Science Student
        at Kwame Nkrumah University of Science and Technology(KNUST).I am a web developer who is skilled in
        HTML, CSS and JavaScript. Currently expanding my skill set with react.js
        I am also an RPA Developer who is skilled at developing Software Bots
        to help automate repetitive tasks.
        My goal is to help solve business and societal problems using my skills in IT.
        I am committed to ongoing learning and staying up-to-date with the latest trends &
        technologies`

    const showFullText = () => {
        setIsFullText(!isFullText)
    }

    return (
        <div className='lg:min-h-screen sm:h-auto grid lg:grid-cols-2 sm:grid-cols-1 lg:py-0 py-11' id='About'>
            {/* <p className="text-white text-sm mt-2">
                        My name is Anang Christian Obodai, a Final Year Computer Science Student
                        at Kwame Nkrumah University of Science and Technology(KNUST). I am a web developer who is skilled in
                        HTML, CSS and JavaScript. Currently expanding my skill set with react.js
                        <br/>
                        My goal is to become a full-stack developer and use my skills to solve business and societal problems.
                        I am committed to ongoing learning and staying up-to-date with the latest trends &
                        technologies
                        </p> */}
                        
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
                    <div className='text-center lg:text-left'>
                        <SectionTitle firstText={'About'} secondText={'Me'} />
                    </div>
                    <p className={`w-full lg:w-10/12 transition-transform duration-500 ease-in-out ${isFullText ? 'translate-y-2 ' : 'translate-y-1'}`}>
                        {isFullText ? text : `${text.slice(0, 400)}...`}
                        <div className={`mt-6 ${isFullText && 'pb-4'}`}>
                        <ButtonBackground title={isFullText ? 'See Less' : 'See More'} onPress={() => showFullText()}/>
                    </div>
                        <div className='pt-4'>
                            <a href="" className=""></a>
                            <SocialMediaHandles />
                        </div>
                        <div className=' mt-8 my-11'>
                            <div className="flex-1">
                                <a href="/images/cv.pdf"  target={'_blank'} download={"obodai_resume.pdf"} className="border-2 hover:bg-black hover:text-cyan-300 border-cyan-300 rounded-lg  text-black shadow-sm shadow-cyan-300 bg-cyan-300 mr-3 p-2">Download Resume</a>
                                <a href="tel: +233505699505" target={'_blank'}  className="border-2 hover:bg-cyan-300 hover:text-black border-cyan-300 text-cyan-300 rounded-lg p-2">Contact me</a>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutSection