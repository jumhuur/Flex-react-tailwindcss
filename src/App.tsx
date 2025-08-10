import Careers from "./components/Careers/Careers";
import Getstart from "./components/CTA/Getstart";
import Faq from "./components/Faq/Faq";
import Features_web from "./components/Features/Features";
import HeroSection from "./components/Hero/Hero";
import Nav from "./components/Nav/nav";
import Pricing_cards from "./components/Pracing/Pricing";
import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <div className="dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-indigo-500">
        <Nav />
        <HeroSection />
        <Getstart />
        <Features_web />
        <Pricing_cards />
        <Team />
        <Careers />
        <Faq />
      </div>
    </>
  );
}

export default App;
