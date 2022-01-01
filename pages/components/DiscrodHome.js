import React from "react";

const DiscrodHome = () => {
  return (
    <div className="bg-blue-500 opacity-80">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1 uppercase">
              Want a Community ?
            </h2>
            <h1 className="md:text-3xl text-2xl font-medium title-font text-white">
              Stuck in Something, Need help?
            </h1>
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button className="bg-gray-50 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-100 focus:outline-none transition-all">
              <img src="/discord.svg" alt="" />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">JOIN NOW</span>
                <span className="title-font font-medium">Discord</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscrodHome;
