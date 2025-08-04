import Getstart from "./components/CTA/Getstart";
import Features_web from "./components/Features/Features";
import HeroSection from "./components/Hero/Hero";
import Nav from "./components/Nav/nav";
function App() {
  return (
    <>
      <div className="dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-indigo-500">
        <Nav />
        <HeroSection />
        <Getstart />
        <Features_web />
      </div>
    </>
  );
}

export default App;
