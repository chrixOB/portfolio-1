import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <div className="bg-black">
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: Poppins, sans-serif;
        }
      `}</style>
      
      {/* <div>topnav</div> */}
      <HomeSection />
      
    </div>
  )
}
