import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tubing from "./pages/Tubing";
import Footer from "./components/Footer";
import Hotel from "./pages/Hotel";
import BBQ from "./pages/BBQ";
import Loading from "./components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      offset: 100, 
    });
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/tubing" element={<Tubing />} />
              <Route path="/hotel" element={<Hotel />} />
              <Route path="/bbq" element={<BBQ />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
