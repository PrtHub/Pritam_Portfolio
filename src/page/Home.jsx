import { About, Contact, Hero, Navbar, Projects, Skills } from "../components";

const Home = () => {
  return (
    <>
      <div className="w-full h-full bg-white font-open">
      <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
