import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OffeerSection';
import WhyChooseUsSection from './components/WhyChooseUsSection'



function App() {
  return (
    <div>
      <Navbar bg={'bg-zinc-800'} before={'bg-zinc-800'} border={''}/>
      <HeroSection />
      <OfferSection />
      <WhyChooseUsSection />

      
    </div>
  );
}

export default App;
