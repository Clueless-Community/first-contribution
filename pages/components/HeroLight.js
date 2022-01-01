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
            value: "",
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
              value: "#0000",
            },
            links: {
              color: "#0000",
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
      <h1 className="text-center text-5xl font-sans font-bold text-blue-600 opacity-90">Welcome to ClueLess Community</h1>
      <h1 className="text-center text-7xl font-sans mt-8 font-bold text-blue-600 opacity-90 ">Learn. Grow.</h1>
      <div className="w-full justify-center flex">
      <Link href="/whattodo">
      <button className="px-4 py-2 bg-blue-600 opacity-90 rounded-xl font-bold text-white text-xl my-10 mx-5 hover:bg-blue-500">What to Do?</button>
      </Link>
      <button className="px-4 py-2 border-[#0061ff] border-4 text-[#0061ff] rounded-xl font-bold text-xl my-10 mx-5 hover:bg-blue-500 hover:text-white transition-all hover:border-blue-500">Contribute Now</button>
      </div>
      </div>
      
    </div>
  );
};

export default HeroLight;
