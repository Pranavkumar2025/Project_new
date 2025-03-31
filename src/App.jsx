import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header";
// import Flight from "./Flight";
// import Railway from "./Railway";
// import Hotel from "./Hotel";
// import Apartments from "./Apartments";
// import CarRental from "./CarRental";
import Header from "./components/Header";
import Flight from "./components/flight";
import Railway from "./components/Railway";
import Hotel from "./components/Hotel";
import Apartments from "./components/Apartment";
import CarRental from "./components/CarRental";

const App = () => {
  return (
    <Router>
      <div className="bg-[#0F0B0C] min-h-screen">
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Flight />} />
            <Route path="/railway" element={<Railway />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/car-rental" element={<CarRental />} />
            <Route
              path="/"
              element={<h2 className="text-white p-6">Welcome to Travel Hub!</h2>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
