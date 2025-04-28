import { BrowserRouter } from "react-router-dom"
import HeroCarousel from "./components/HeroSection/HeroCarousel"
import HeroText from "./components/HeroSection/HeroText"
import HotelHero from "./components/HeroSection/HotelHero"
import Accommodation from "./components/Accommodation/Accommodation"
import { Package } from "lucide-react"
import StayPackage from "./components/Packages/StayPackage"
import SpaAndWellness from "./components/spa&wellness/SpaAndWellness"
import Footer from "./components/footer/Footer"
import About from "./components/About/About"
import Event from "./components/Event/Event"



function App() {


  return (
    <>
<BrowserRouter>


<HeroCarousel/>
<HeroText/>
<HotelHero/>
<Accommodation/>
<StayPackage/>
<SpaAndWellness/>
<About/>
<Event/>

<Footer/>
</BrowserRouter>
    </>
  )
}

export default App
