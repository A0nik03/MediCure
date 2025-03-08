import ChooseUs from "../components/ChooseUs"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Insights from "../components/Insights"
import MedNews from "../components/MedNews"
import NavBar from "../components/NavBar"
import OurPartners from "../components/Partners"
import Testimonies from "../components/Testimonies"

const Home = () => {
  return (
    <div className="relative h-full w-screen bg-[#fafafa] font-[Work Sans] flex flex-col">
      <NavBar />
      <Header/>
      <div className="hidden sm:block">
      <ChooseUs/>
      </div>
      <Features/>
      <Insights/>
      <MedNews/>
      <Testimonies/>
      <OurPartners/>
      <Footer/>
    </div>
  )
}

export default Home