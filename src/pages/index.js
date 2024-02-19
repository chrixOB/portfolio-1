import HomeSection from "@/components/HomeSection";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div id="Home" className="bg-black text-white overflow-x-hidden">
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: Poppins, sans-serif;
        }
      `}</style>
      
      <Header />
      <HomeSection />
      <AboutSection />
      
    </div>
  )
}
