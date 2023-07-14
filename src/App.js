import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OffeerSection';



function App() {
  return (
    <div>
      <Navbar bg={'bg-zinc-800'} before={'bg-zinc-800'} border={''}/>
      <HeroSection />
      <OfferSection />
      
    </div>
  );
}

export default App;
