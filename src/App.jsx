import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Tentang from "./components/Tentang.jsx";
import Proyek from "./components/Proyek.jsx";
import Tools from "./components/Tools.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <Tools/>
      <Proyek />
    </>
  );
}

export default App;
