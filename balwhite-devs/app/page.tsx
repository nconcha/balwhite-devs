import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <Services />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </div>

        <Team />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </div>

        <Values />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </div>

        <Process />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        </div>

        <Stack />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
