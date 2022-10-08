import React, { useState } from "react";
import ContributorCard from "../components/ContributorCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Document from "../document";
import contributors from "../../data/contributors";
import Topfab from "../components/Topfab";


const index = () => {
  const totalContributor = contributors.length;
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(contributors);

  const searchStyles = {
    width: '100%',
    margin: '30px 0',
    display: 'flex',
    height: 42,
    overflow:'hidden'
  }

  function searchCards(){
    let searchRes = contributors.filter(item =>item.name.includes(search));
    setSearchResult(searchRes);
    console.log(searchRes);
  }

  return (
    <>
      <Document />
      <Navbar />
      <div className="dark:bg-gray-700">
        <section class="text-gray-600 dark:text-white body-font">
          <div class="container px-5 pt-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-5">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white underline underline-offset-4">
                Our Contributors
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-lg font-semibold mb-4">
                Total Contibutors : {totalContributor}
              </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Want to contribute and Have Your Own Contibutor Card on our Website Then Click the Button Below.
              </p>
            </div>
            <a href="https://github.com/HITK-2025/first-contribution" target="_blank">
              <button className="px-4 py-2 border-[#0061ff] border-4 text-[#0061ff] rounded-xl font-bold text-xl mb-10 hover:bg-blue-500 hover:text-white transition-all hover:border-blue-500 flex mx-auto dark:border-gray-50 dark:hover:text-white dark:text-gray-50 dark:hover:border-blue-500">Get Your Contributor Card !</button>
            </a>
            <div style={searchStyles}>
              <input style={{ flex: 1, display: 'flex', paddingLeft: 12, border: '1px solid black', borderRadius: 4, color: 'black' }} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your card " />
              <button onClick={searchCards} className="bg-gray-800 w-full text-gray-200 rounded ml-4">Search</button>
            </div>
            <div class="flex -m-2 flex-wrap mb-2">
              {searchResult.map((contributor) => {
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