function HomePage() {
  return (
    <header className="shadow-lg">
      <div className="max-w-7xl mx-auto px-7 py-5 lg:flex items-center lg:px-7 lg:py-2 lg:pt-3 ">
        {/* Logo - left */}
        <div className="shrink-0  flex justify-center">
          <img
            src="icon.png"
            alt="Logo"
            className="h-14 md:h-16 lg:h-[55px] w-auto mb-2 md:mb-4"
          />
        </div>

        {/* Search group - pushed to right */}
        <div className="ml-auto flex items-center  space-x-3 ">
          <input
            type="text"
            placeholder="Search experiences"
            className="w-64 md:w-90  lg:w-[325px] py-2 px-3 md:py-3  md:px-6 rounded-sm 
  bg-[#efefef] border border-[#efefef] focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder:text-[#afafaf] text-[#727272]"
          />

          <button
            type="button"
            className="bg-[#ffd643] rounded-lg px-5 py-2 md:py-3  md:px-6  font-medium hover:bg-[#ffc107] hover:cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
export default HomePage;
