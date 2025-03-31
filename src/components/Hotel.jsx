import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const hotelData = [
  {
    id: 1,
    title: "Wellness & Spa hotels",
    description:
      "Fresh air, pure water, lush alpine flora and magnificent views: the Swiss mountains have long given visitors a deep sense of wellbeing. Today, health specialists expertly combine nature’s treasures, traditional methods and modern knowledge for a beneficial, lasting effect.",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1080,h_520/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/12/05/14/45/31/sils-in-the-engadine-lake-sils.jpg",
  },
];

const Hotel = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);

  return (
    <div className="bg-[#0F0B0C] p-6 flex justify-center">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full">
        {/* 🔍 Search Section (Left Side) */}
        <div className="bg-[#1D0E11] p-6 rounded-2xl shadow-lg text-white w-full md:w-1/3 min-h-[400px] flex flex-col">
          <h2 className="text-xl mb-4">Enter location / region</h2>

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="text"
              placeholder="Search location"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
            />
          </div>

          {/* Date Pickers */}
          <div className="flex justify-between gap-4 mb-4">
            <DatePicker
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Arrival (optional)"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full cursor-pointer"
            />
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Departure (optional)"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full cursor-pointer"
            />
          </div>

          {/* Rooms & Adults Select */}
          <div className="flex justify-between gap-4 mb-4">
            <select
              className="p-3 rounded-md bg-[#2B1E21] text-white flex-1 cursor-pointer"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            >
              {[...Array(5)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Room{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>

            <select
              className="p-3 rounded-md bg-[#2B1E21] text-white flex-1 cursor-pointer"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Adult{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Find Accommodation Button with Gradient Hover Effect */}
          <button className="w-full bg-[#FF4D5A] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF4D5A] hover:via-[#E43E4E] hover:to-[#FF8C5A] cursor-pointer">
            Find accommodation
          </button>
        </div>

        {/* 🏨 Hotel Info Section (Right Side) */}
        <div className="flex flex-wrap gap-6 w-full md:w-2/3">
          {hotelData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden border border-transparent transition-all duration-500 ease-in-out hover:shadow-2xl group cursor-pointer w-full flex flex-col"
            >
              <div className="bg-[#1D0E11] flex flex-col flex-grow p-4 rounded-2xl">
                {/* Image with Hover Effect */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 text-white flex-grow flex flex-col justify-between group-hover:-translate-y-1 transition-all duration-500">
                  <div>
                    <h3 className="text-lg text-gray-400">
                      The best hotels of Switzerland
                    </h3>
                    <h2 className="text-2xl font-bold text-[#FF4D5A] mt-2 group-hover:text-[#E43E4E] transition-all duration-500">
                      {item.title}
                    </h2>
                    <p className="text-base text-gray-300 mt-2 group-hover:opacity-90 transition-opacity duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
