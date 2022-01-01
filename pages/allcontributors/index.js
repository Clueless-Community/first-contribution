import React from "react";
import ContributorCard from "../components/ContributorCard";
import contributors from "../../data/contributors";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-700">
        <section class="text-gray-600 dark:text-white body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
                Our Contributors
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div>

            <div class="flex -m-2 flex-wrap">
              {contributors.map((contributor) => {
                return (
                  <ContributorCard
                    name={contributor.name}
                    branch={contributor.branch}
                    roll={contributor.roll}
                    year={contributor.year}
                    linkedin={contributor.linkedin}
                    github={contributor.github}
                    gender={contributor.gender}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default index;
