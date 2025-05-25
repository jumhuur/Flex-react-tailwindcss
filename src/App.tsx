import HeroSection from "./components/Hero/Hero";
import Nav from "./components/Nav/nav";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-100 to-gray-200">
        <Nav />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
