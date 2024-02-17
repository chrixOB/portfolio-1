import HomeSection from "@/components/HomeSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-black">
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: Poppins, sans-serif;
        }
      `}</style>
      
      <Header />
      <HomeSection />
      
    </div>
  )
}
