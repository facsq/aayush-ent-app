import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OffeerSection';
import WhyChooseUsSection from './components/WhyChooseUsSection'
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar bg={'bg-zinc-800'} before={'bg-zinc-800'} border={''}/>
      <HeroSection />
      <OfferSection />
      <WhyChooseUsSection />
      <GetInTouchSection />
      <Footer />

      
    </div>
  );
}

export default App;
