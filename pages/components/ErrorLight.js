import React from "react";
import Particles from "react-tsparticles";
import Link from "next/link";

const ErrorLight = () => {
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
      <div className="relative z-10 w-full h-[90vh] flex flex-col justify-center">
      <h1 className="text-center text-[11rem] font-sans font-extrabold text-blue-600 opacity-90 hover:animate-pulse">404</h1>
      <h1 className="text-center text-3xl font-sans font-bold text-blue-800  ">Not Found</h1>
      <div className="w-full justify-center flex">
      <Link href="/">
      <button className="px-4 py-2 bg-blue-600 opacity-90 rounded-xl font-bold text-white transition-all text-xl my-10 mx-5 hover:bg-blue-500 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg> Go back to Home</button>
      </Link>
      </div>
      </div>
      
    </div>
  );
};

export default ErrorLight;
