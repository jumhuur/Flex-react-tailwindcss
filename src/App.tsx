import HeroSection from "./components/Hero/Hero";
import Nav from "./components/Nav/nav";
function App() {
  return (
    <>
      <div className="dark:bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-500">
        <Nav />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
