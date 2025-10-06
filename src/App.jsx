import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/Feature";
import WhyInvest from "./components/WhyInvest";
import WealthSection from "./components/WealthSection";
import InvestmentPropertyTypes from "./components/InvestmentPropertyTypes";
import InvestmentForm from "./components/InvestmentForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <WhyInvest />
      <WealthSection />
      <InvestmentPropertyTypes />
      <InvestmentForm />
      <Footer />
    </>
  );
}

export default App;
