import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from"./components/Characters";
import Howtoplay from"./components/Howtoplay";
import Mechanics from "./components/Mechanics";
import Roadmaps from "./components/Roadmaps";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Characters />
      <Howtoplay />
      <Mechanics />
      <Roadmaps />
      <Footer />
    </div>
  );
}