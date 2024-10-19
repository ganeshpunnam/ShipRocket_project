import './App.css';
import CustomerExperienceCarousel from './componets/CustomerExperienceCarouse';
import DriveRepeatPurchases from './componets/DriveRepeatPurchases';
import Footer from './componets/Footer';
import FulfillmentService from './componets/FulfillmentService';
import ShippingOptions from './componets/FutureSection';
import ShiprocketCrossBorder from './componets/ExportsFutureSection2';
import Stats from './componets/Stats';
import BlogSection from './componets/BlogSection';
import Herosectionship from './componets/HeroSection';
import Header from './componets/Header';
import MarqueeSlider from './componets/MarqueeSlider';
import Testimonials from './componets/Testimonials';


function App() {
  return (
    <div className='w-full'>
        <div className='sticky top-0 z-50'>
          <Header />

        </div>
        <div className='skewed-gradient'>
        < Herosectionship />
        </div>
        <MarqueeSlider/>
      {/* <Testimonials/> */}
    
      <div className="max-w-[1050px] mx-auto">

        <Stats />
        <ShippingOptions />
        < ShiprocketCrossBorder />
        <CustomerExperienceCarousel />
        <FulfillmentService />
        </div>
        <DriveRepeatPurchases />
       
       
        <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
