import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="pb-[100px]">
      <Header />
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}
