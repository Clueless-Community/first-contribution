import React from "react";
import Particles from "react-tsparticles";
import Link from "next/link";

const HeroLight = () => {
  return (
    <div className="h-11/12">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#374151",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#40c9ff",
            },
            links: {
              color: "#40c9ff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 w-full h-[95vh] flex flex-col justify-center">
        <h1 className="text-center text-5xl font-sans font-bold text-gray-50 opacity-90">
          Welcome to ClueLess Community
        </h1>
        <h1 className="text-center text-7xl font-sans mt-8 font-bold text-gray-50 opacity-90 ">
          Learn. Grow.
        </h1>
        <div className="w-full justify-center flex">
          <Link href="/whattodo">
            <button className="px-4 py-2 bg-gray-600 rounded-xl font-bold text-white text-xl my-10 mx-5 hover:bg-blue-500">
              What to Do?
            </button>
          </Link>
          <a
            href="https://github.com/HITK-2025/first-contribution"
            target="_blank"
          >
            <button className="px-4 py-2 border-gray-50 border-4 text-gray-50 rounded-xl font-bold text-xl my-10 mx-5 hover:bg-blue-500 hover:text-white transition-all hover:border-blue-500">
              Contribute Now
            </button>
          </a>
        </div>
        <div className="flex justify-center pt-[20vh]">
          <div className="transition duration-1000 ease-linear animate-bounce bg-none p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 textblack"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
        <h1 className="transition duration-1000 ease-linear animate-bounce  pt-[2vh] text-center text-5xw font-sans font-bold text-[#f7e2e2]    opacity-90">
          Scroll Down
        </h1>
      </div>
    </div>
  );
};

export default HeroLight;
