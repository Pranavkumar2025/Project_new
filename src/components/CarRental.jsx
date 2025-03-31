import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarRental = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  return (
    <div className="bg-[#0F0B0C] p-6 flex justify-center">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full">
        {/* 🔍 Search Section (Left Side) */}
        <div className="bg-[#1D0E11] p-6 rounded-2xl shadow-lg text-white w-full md:w-1/3 min-h-[400px] flex flex-col">
          <h2 className="text-xl mb-4">Enter city / region *</h2>
          <input
            type="text"
            placeholder="Search location"
            className="p-3 rounded-md bg-[#2B1E21] text-white w-full mb-4"
          />
          
          <div className="flex gap-4 mb-4">
            <DatePicker
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
              placeholderText="Arrival"
            />
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
              placeholderText="Departure"
            />
          </div>

          <button className="w-full bg-[#FF4D5A] text-white font-semibold py-3 rounded-lg hover:bg-[#E43E4E] transition-all duration-300">
            Find a car
          </button>
        </div>

        {/* 🚗 Car Rental Section (Right Side) */}
        <div className="flex flex-wrap gap-6 w-full md:w-2/3">
          {[ 
            {
              id: 1,
              title: "Special rates for camper fans",
              description: "Benefit from an unlimited weekly rate!",
              imageUrl: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_320,h_300/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/04/05/08/42/16/basel-panorama-at-dusk.jpg"
            },
            {
              id: 2,
              title: "E-Grand Tour",
              description: "Discover Switzerland in an electric vehicle!",
              imageUrl: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_460,h_320/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/06/27/06/25/55/amag-electromobility.jpg"
            }
          ].map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden border border-transparent transition-all duration-500 ease-in-out hover:shadow-2xl group cursor-pointer w-full sm:w-[48%] min-h-[400px] flex flex-col"
            >
              <div className="bg-[#1D0E11] flex flex-col flex-grow p-4">
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-white flex-grow flex flex-col justify-between group-hover:-translate-y-1 transition-all duration-500">
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF4D5A] transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-base mb-4 group-hover:opacity-90 transition-opacity duration-500">
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

export default CarRental;
