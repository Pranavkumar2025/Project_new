import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const railwayData = [
  {
    id: 1,
    title: "Grand Train Tour of Switzerland",
    description:
      "On the Grand Train Tour of Switzerland, panoramic trains take you to all the highlights and sights in Switzerland, year-round.",
    linkText: "Discover",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_500,h_340/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/03/25/08/17/32/realp-glacier-express.jpg",
  },
  {
    id: 2,
    title: "Swiss francs for your shopping spree.",
    description:
      "At around 130 SBB Travel Centres, you can change currencies from over 100 countries into Swiss francs and vice versa – at competitive exchange rates.",
    linkText: "More information",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_500,h_340/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/images/strapa/sbb/202307_sbb_0087_changegr_2500x187592.jpg",
  },
];

const Railway = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="bg-[#0F0B0C] min-h-screen p-6">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* 📅 Timetable Section (Left Side) */}
        <div className="bg-[#1D0E11] p-6 rounded-2xl shadow-lg text-white w-full md:w-1/3 min-h-[400px]">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="From"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
            />
            <input
              type="text"
              placeholder="To"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
            />
          </div>

          {/* 📅 Date Picker */}
          <div className="mb-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <select className="p-3 rounded-md bg-[#2B1E21] text-white w-full">
              <option>Arrival</option>
              <option>Departure</option>
            </select>
            <input
              type="text"
              placeholder="HH:MM"
              className="p-3 rounded-md bg-[#2B1E21] text-white w-full"
            />
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <label className="flex items-center text-white">
              <input type="radio" name="trip" className="mr-2" />
              Departure
            </label>
            <label className="flex items-center text-white">
              <input type="radio" name="trip" className="mr-2" />
              Arrival
            </label>
          </div>

          {/* 🔎 Search Button */}
          <button className="w-full bg-[#FF4D5A] cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-[#E43E4E] transition-all duration-300">
            Looking for connection
          </button>
        </div>

        {/* 🏔 Railway Cards Section (Right Side) */}
        <div className="flex flex-wrap gap-6 w-full md:w-2/3">
          {railwayData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden border border-transparent transition-all duration-500 ease-in-out hover:shadow-2xl group cursor-pointer w-full sm:w-[48%] min-h-[400px] flex flex-col"
            >
              <div className="bg-[#1D0E11] flex flex-col flex-grow p-4">
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
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF4D5A] transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-base mb-4 group-hover:opacity-90 transition-opacity duration-500">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF4D5A] text-lg font-semibold hover:underline transition-all duration-500"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Railway;
