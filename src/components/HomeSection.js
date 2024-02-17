import NavBar from "@/components/NavBar";
import Image from 'next/image'

const HomeSection = () => {
    return (
        <>
            <NavBar />
            <div id="Home" className="grid lg:grid-cols-2 sm:grid-cols-1 h-[88vh] bg-gray-50">
                <div className="h-full flex justify-center items-center ">
                    <div>
                        <small>Hello, I am</small>
                        <h4 className="text-[37px]">James Tetteh Totimeh</h4>
                        <p>Software Engineer & RPA Developer</p>
                        <div className="flex-1 mt-8">
                            <a href="#" className="border-2 border-black rounded-lg bg-black text-white mr-3 p-2">Resume</a>
                            <a href="#" className="border-2 rounded-lg p-2">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="h-full flex justify-center items-center">
                    <Image
                        src="/favicon.ico"
                        width={350}
                        height={350} 
                        style={{borderRadius: 50}}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            
        </>
    )
}

export default HomeSection