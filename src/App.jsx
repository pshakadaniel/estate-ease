import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
