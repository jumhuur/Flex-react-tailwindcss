import Getstart from "./components/CTA/Getstart";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import HeroSection from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import MainTestimonial from "./components/Testimonial/Testimonialmain";
function App() {
  return (
    <>
      <div>
        <HeroSection />
        <Getstart />
        <Features />
        <Pricing />
        <Team />
        {/* <Careers /> */}
        <Faq />
        <MainTestimonial />
      </div>
    </>
  );
}

export default App;
