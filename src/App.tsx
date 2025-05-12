import Header from "./components/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
