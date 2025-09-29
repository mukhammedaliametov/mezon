import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tubing from "./pages/Tubing";
import Footer from "./components/Footer";
import Hotel from './pages/Hotel';
import BBQ from "./pages/BBQ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/tubing" element={<Tubing />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path="/bbq" element={<BBQ />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
