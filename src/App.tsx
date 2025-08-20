import Careers from "./components/Careers/Careers";
import Getstart from "./components/CTA/Getstart";
import Faq from "./components/Faq/Faq";
import Features_web from "./components/Features/Features";
import HeroSection from "./components/Hero/Hero";
import Pricing_cards from "./components/Pracing/Pricing";
import Team from "./components/Team/Team";
import MainTestimonial from "./components/Testimonial/Testimonialmain";
function App() {
  return (
    <>
      <div>
        <HeroSection />
        <Getstart />
        <Features_web />
        <Pricing_cards />
        <Team />
        <Careers />
        <Faq />
        <MainTestimonial />
      </div>
    </>
  );
}

export default App;
