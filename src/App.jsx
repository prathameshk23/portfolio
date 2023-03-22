import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stars from "./components/canvas/Stars";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Feedbacks from "./components/Feedbacks";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Tech />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Stars /> 
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
