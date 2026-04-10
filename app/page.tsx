"use client";

import useHomeAnimations from "./hooks/useHomeAnimations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  useHomeAnimations();

  return (
    <div className="page-shell">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Showcase />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}