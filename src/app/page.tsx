import About from "./components/About";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import OurNumbers from "./components/OurNumbers";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <NavBar />
      <Hero />
      <About />
      <OurNumbers />
      <Services />
      <Feedbacks />
      <div className="bg-gradient-to-b from-white to-[#C5C5C5] max-sm:pb-[60px]">
        <Forms />
        <Footer />
      </div>
    </main>
  );
}
