import BackToTop from "../component/backToTop";
import NavBar from "../component/navBar";
import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
const Home = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <BackToTop />
    </>
  );
};

export default Home;
