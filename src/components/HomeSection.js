import Image from 'next/image'
import Typewriter from "typewriter-effect";

const HomeSection = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 min-h-[88vh]">
                <div className="min-h-full block sm:py-6 lg:flex justify-center items-center p-0 px-5 sm:p-11">
                    <div>
                        <p className=" text-gray-300 text-[25px]">Hello, It&apos;s Me</p>
                        <h4 className="text-[45px] text-white">James Tetteh Totimeh</h4>       
                        
                        <p className="mr-2 text-white text-[25px] block sm:hidden lg:hidden">And I&apos;m a</p>
                        <div className="flex">
                            <p className="mr-2 text-white text-[25px] hidden sm:block lg:block">And I&apos;m a</p>
                            <div className="text-cyan-300 text-[25px]">
                                <TypewriterComponent firstText={"Software Engineer"} secondText={"Mobile App Developer"} thirdText={"Web App Developer"} fourthText={"AI/ML Engineer"} fifthText={"RPA Developer"} />
                            </div>
                        </div>
                        <p className="text-white text-sm mt-2">
                            I&apos;m a Software Engineer with strong proficiency in Python, Javascript & PHP. <br /> I develop both
                            mobile apps and web-apps. I&apos;m also an RPA developer with <br /> strong proficiency in Ui-Path and Automation anywhere.
                        </p>
                        <div>
                            <a href="" className=""></a>
                            
                        </div>
                        <div className=' mt-8 my-11'>
                            <div className="flex-1">
                                <a href="#" className="border-2 hover:bg-black hover:text-cyan-300 border-cyan-300 rounded-lg  text-black shadow-sm shadow-cyan-300 bg-cyan-300 mr-3 p-2">Download CV</a>
                                <a href="#" className="border-2 hover:bg-cyan-300 hover:text-black border-cyan-300 text-cyan-300 rounded-lg p-2">Contact me</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="min-h-full lg:flex justify-center items-center px-5 ">
                    <Image
                        src="/images/profile.jpg"
                        width={300}
                        height={300} 
                        className="bg-cover lg:w-[50%] lg:h-[70%] w-[100%] md:w-full md:h-full sm:h-[80%] rounded-[50px] border-2 shadow-lg border-cyan-300 shadow-cyan-400 animate-pulse"
                        alt="Picture of the author"
                    />
                </div>
            </div>
            
        </>
    )
}

export default HomeSection

const TypewriterComponent = ({firstText, secondText, thirdText, fourthText, fifthText}) => {
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
                    .typeString(thirdText)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(fourthText)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(fifthText)
                    .start();

                
            }}
        />
    )
}