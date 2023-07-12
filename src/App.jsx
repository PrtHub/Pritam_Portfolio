
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Project from "./page/Project";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <div className="w-full h-full bg-white font-open overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </>
  );
};

export default App;