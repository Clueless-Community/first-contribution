import React from "react";
import ContributorCard from "../components/ContributorCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Document from "../document";
import contributors from "../../data/contributors";
import Topfab from "../components/Topfab";


const index = () => {
  const totalContributor = contributors.length;
  return (
    <>
      <div className="dark:bg-gray-700">
      <Document />
      <Navbar />
        <section class="text-gray-600 dark:text-white body-font">
          <div class="container px-5 pt-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-5">
              <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 dark:text-white underline-offset-4">
                Our Contributors
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold mb-4">
                Total Contibutors : {totalContributor}
              </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Want to contribute and Have Your Own Contibutor Card on our Website? <br/><div className="text-lg">Click the Button Below!</div>
              </p>
            </div>
            <a href="https://github.com/HITK-2025/first-contribution" target="_blank">
              <button className="px-4 py-2 border-[#0061ff] border-4 text-[#0061ff] rounded-xl font-bold text-xl mb-10 hover:bg-blue-500 hover:text-white transition-all hover:border-blue-500 flex mx-auto dark:border-gray-50 dark:hover:text-white dark:text-gray-50 dark:hover:border-blue-500">Get Your Contributor Card !</button>
            </a>
            <div class="flex -m-2 flex-wrap mb-2">
              {contributors.map((contributor) => {
                return (
                  <ContributorCard
                    key={contributor.github}
                    name={contributor.name}
                    branch={contributor.branch}
                    college={contributor.college}
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
        <Topfab />
      </div>
    </>
  );
};

export default index;
