import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Apartments = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
//   const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);

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

          <div className="flex gap-4 mb-4">
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1} Adults</option>
              ))}
            </select>
          </div>

          <button className="w-full bg-[#FF4D5A] text-white font-semibold py-3 rounded-lg hover:bg-[#E43E4E] transition-all duration-300">
            Find apartment
          </button>
        </div>

        {/* 🏡 Apartments Section (Right Side) */}
        <div className="flex flex-wrap gap-6 w-full md:w-2/3">
          {[ 
            {
              id: 1,
              title: "Mountain Huts",
              description: "Alpine huts provide an opportunity to take a break from everyday life in untouched natural surroundings and live in the here and now.",
              imageUrl: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_340,h_340/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/resources/places/z/u/zurich/images%20summer/26937_32001800.jpeg"
            },
            {
              id: 2,
              title: "Camping",
              description: "Whether it's right by the water or up in the mountains: you're bound to find your favourite campsite here.",
              imageUrl: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/internet/myswitzerland/resources/calendars/inspirationcalendar/background%20image/33066_800600.jpeg"
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

export default Apartments;
