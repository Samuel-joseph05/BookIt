function HomePage() {
  const experiences = [
    {
      image: "TajMahal.jpg",
      title: "TajMahal Tour",
      location: "Uttarkashi",
      description:
        "A thrilling snow trek through the Garhwal Himalayas with breathtaking views.",
      price: 5999,
    },
    {
      image: "Nandi-Hills.jpg",
      title: "Nandi Hills mornting trek",
      location: "Karnataka",
      description:
        "Walk through lush tea gardens and experience the art of tea making.",
      price: 2800,
    },
    {
      image: "pexels-sbsoneji-3581368.jpg",
      title: "Sundarbans Wildlife Tour",
      location: "Sundarbans",
      description:
        "Explore the world’s largest mangrove forest and spot the Royal Bengal Tiger.",
      price: 4800,
    },
    {
      image: "pexels-.jpg",
      title: "Rappelling at Panchgani",
      location: "Panchgani",
      description:
        "Experience adrenaline-pumping rappelling down scenic cliffs.",
      price: 1800,
    },
    {
      image: "Kruger National park.jpg",
      title: "Snow Trek to Kedarkantha",
      location: "Uttarkashi",
      description:
        "A thrilling snow trek through the Garhwal Himalayas with breathtaking views.",
      price: 5999,
    },
    {
      image: "pexels-sbsoneji-3581368.jpg",
      title: "Tea Estate Trail",
      location: "Munnar",
      description:
        "Walk through lush tea gardens and experience the art of tea making.",
      price: 2800,
    },
    {
      image: "pexels-sbsoneji-3581368.jpg",
      title: "Sundarbans Wildlife Tour",
      location: "Sundarbans",
      description:
        "Explore the world’s largest mangrove forest and spot the Royal Bengal Tiger.",
      price: 4800,
    },
    {
      image: "pexels-.jpg",
      title: "Rappelling at Panchgani",
      location: "Panchgani",
      description:
        "Experience adrenaline-pumping rappelling down scenic cliffs.",
      price: 1800,
    },
  ];
  return (
    <>
      <header className="shadow-md ">
        <div className="max-w-7xl mx-auto px-7 py-5 lg:flex items-center lg:px-7 lg:py-2 lg:pt-4 ">
          <div className="shrink-0  flex justify-center">
            <img
              src="icon.png"
              alt="Logo"
              className="h-14 md:h-16 lg:h-[55px] w-auto mb-2 md:mb-4"
            />
          </div>

          <div className="ml-auto flex items-center  space-x-3 ">
            <input
              type="text"
              placeholder="Search experiences"
              className="w-64 md:w-90  lg:w-[325px] py-2 px-3 md:py-3  md:px-6 rounded-sm lg:px-2 lg:py-2
  bg-[#efefef] border border-[#efefef] focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder:text-[#afafaf] text-[#727272]"
            />

            <button
              type="button"
              className="bg-[#ffd643] rounded-lg px-5 py-2 md:py-3  md:px-6 lg:px-4 lg:py-2  lg:font-normal font-medium hover:bg-[#ffc107] hover:cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </header>

      <div className="px-12 py-7 md:px-37 min-h-screen">
        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#f0f0f0] rounded-xl shadow   flex flex-col"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="rounded-t-lg h-48 w-full object-cover"
              />
              <div className="mt-3 flex-1 px-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-900  text-md truncate">
                    {exp.title}
                  </h3>
                  <span className="text-xs bg-[#d6d6d6] px-2 py-1 rounded-md text-black">
                    {exp.location}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                  {exp.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 mb-4  px-4 md:mb-2">
                <span className="text-lg font-semibold text-gray-800">
                 <span className="md:text-xs">From</span> ₹{exp.price}
                </span>
                <button className="bg-[#ffd643] text-black px-2 py-1 md:px-2 md:py-1 font-medium rounded-md text-sm font-sm hover:bg-[#ffc107] cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default HomePage;
