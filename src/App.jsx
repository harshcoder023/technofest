import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import CategoryEvents from "./components/CategoryEvents";
import Event from "./components/Event";
import MultiStepForm from "./components/MultiStepForm";

// import VerificationForm from "./components/VerificationForm";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registeration-form" element={<MultiStepForm />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/category/:category" element={<CategoryEvents />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
