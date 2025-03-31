import React from "react";

const data = [
  {
    id: 1,
    title: "Swiss International Air Lines",
    description: "To Switzerland and the rest of the world with SWISS",
    linkText: "Book now",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_480,h_320/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/partner%20section%20tabs/fourth%20tab/partner%20teaser%20home%20international%20swiss/image/32130_1000500_1.jpeg",
  },
  {
    id: 2,
    title: "Newsletter",
    description:
      "The monthly newsletter offers the best tips and key information about Switzerland as a travel destination, ensuring your perfect holiday.",
    linkText: "Subscribe now!",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_480,h_320/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/media%20image%20gallery%20man%20blickt%20aus%20dem%20zugfenster/gallery%20images/50675_22001400.jpeg",
  },
];

const Flight = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen flex justify-center items-center p-6">
      <div className="flex flex-col sm:flex-row gap-6 max-w-5xl w-full">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 transition-all duration-500 ease-in-out hover:shadow-2xl group cursor-pointer w-full sm:w-1/2 min-h-[420px]"
          >
            <div className="bg-white flex flex-col flex-grow p-4">
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-gray-800 flex-grow flex flex-col justify-between rounded-b-2xl group-hover:bg-[#f8c2c5] group-hover:text-gray-900 transition-colors duration-500">
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-base mb-4 group-hover:opacity-90 transition-opacity duration-500">
                    {item.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[#FF4D5A] text-lg font-semibold hover:underline transition-all duration-500 group-hover:text-[#D90429]"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flight;