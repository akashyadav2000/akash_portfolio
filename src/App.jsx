// import About from "./component/About";
// import Hero from "./component/Hero";
// import Navbar from "./component/Navbar";
// import Services from "./component/Services";
// import Skills from "./component/Skills";
// import Portfolio from "./component/Portfolio";
// import Contact from "./component/Contact";
// import "./index.css";
// import "./App.css";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services />
//       <About />
//       <Skills />
//       <Portfolio />
//       <Contact />
//     </>
//   );
// }

import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AuroraBackground from "./component/AuroraBackground";
import LiquidCursor from "./component/LiquidCursor";
import "./index.css";

const Services = lazy(() => import("./component/Services"));
const About = lazy(() => import("./component/About"));
const Skills = lazy(() => import("./component/Skills"));
const Portfolio = lazy(() => import("./component/Portfolio"));
const Contact = lazy(() => import("./component/Contact"));

const Fallback = () => <div className="w-full min-h-[calc(100dvh-55px)]" />;

export default function App() {
  return (
    <ThemeProvider>
      <LiquidCursor />
      <AuroraBackground />
      <Navbar />
      <Hero />
      <Suspense fallback={<Fallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Contact />
      </Suspense>
    </ThemeProvider>
  );
}
