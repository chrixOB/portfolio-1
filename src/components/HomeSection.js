import Image from 'next/image'
import Typewriter from "typewriter-effect";
// import SocialMediaHandles from './SocialMediaHandles';

const HomeSection = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 min-h-[88vh]">
                <div className="min-h-full block sm:py-6 lg:flex justify-center items-center p-0 px-5 sm:p-11">
                    <div>
                        <p className=" text-gray-300 text-[25px]">Hello, It&apos;s Me</p>
                        <h4 className="text-[55px] text-white mb-4">Anang Christian Obodai</h4>       
                        
                        <p className="mr-2 mt-2 text-white text-[25px] block sm:hidden lg:hidden">And I&apos;m a</p>
                        <div className="flex">
                            <p className="mr-2 text-white text-[38px] hidden sm:block lg:block">And I&apos;m a</p>
                            <div className="text-cyan-300 text-[38px]">
                                <TypewriterComponent firstText={"Frontend Engineer"} secondText={"Web Developer </>"} 
                                 />
                            </div>
                        </div>
                        {/* <p className="text-white text-sm mt-2">
                        My name is Anang Christian Obodai, a Final Year Computer Science Student
                        at Kwame Nkrumah University of Science and Technology(KNUST). I am a web developer who is skilled in
                        HTML, CSS and JavaScript. Currently expanding my skill set with react.js
                        <br/>
                        My goal is to become a full-stack developer and use my skills to solve business and societal problems.
                        I am committed to ongoing learning and staying up-to-date with the latest trends &
                        technologies
                        </p>
                        <div className='pt-4'>
                            <a href="" className=""></a>
                            <SocialMediaHandles />
                        </div>
                        <div className=' mt-8 my-11'>
                            <div className="flex-1">
                                <a href="/images/cv.pdf"  target={'_blank'} download={"obodai_resume.pdf"} className="border-2 hover:bg-black hover:text-cyan-300 border-cyan-300 rounded-lg  text-black shadow-sm shadow-cyan-300 bg-cyan-300 mr-3 p-2">Download Resume</a>
                                <a href="tel: +233505699505" target={'_blank'}  className="border-2 hover:bg-cyan-300 hover:text-black border-cyan-300 text-cyan-300 rounded-lg p-2">Contact me</a>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
                <div className="min-h-full lg:flex justify-center items-center px-5 ">
                    <Image
                        src="/images/profile.jpg"
                        width={300}
                        height={300} 
                        className="bg-cover lg:w-[50%] lg:h-[70%] sm:h-full h-full w-[100%] md:w-full md:h-full rounded-[50px] border-2 shadow-lg border-cyan-300 shadow-cyan-400 animate-pulse"
                        alt="Picture of the author"
                    />
                </div>
            </div>
            
        </>
    )
}

export default HomeSection

const TypewriterComponent = ({firstText, secondText}) => {
    return (
        <Typewriter
            options={{
                loop: true
            }}
            onInit={(typewriter) => {
            
                typewriter
                    .typeString(firstText)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(secondText)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(firstText)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(secondText)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(firstText)
                    .start();

                
            }}
        />
    )
}