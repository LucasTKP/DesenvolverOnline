import About from "./components/About";
import Feedbacks from "./components/Feedbacks";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import OurNumbers from "./components/OurNumbers";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="pb-[100px]">
      <Header />
      <NavBar />
      <Hero />
      <About />
      <OurNumbers />
      <Services />
      <Feedbacks />
      <Forms />
    </main>
  );
}
