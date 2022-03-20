import React, {useEffect, useState} from "react";
import ContributorCard from "../components/ContributorCard";
import contributors from "../../data/contributors";

const RecentContributors = () => {

  function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

  const recentContributors = reverseArr(contributors)
  const topRecentContributors = recentContributors.slice(0, 3)

  return (
    <div>
      <div className="dark:bg-slate-800 bg-gray-100 sm:w-10/12 w-11/12 mx-auto rounded-2xl" >
        <section class="text-gray-600 dark:text-white body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white ">
                Our Recent Contributors
              </h1>
            </div>
            <div class="flex -m-2 flex-wrap">
              {topRecentContributors.map((contributor) => {
                return (
                  <ContributorCard
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
      </div>
    </div>
  );
};

export default RecentContributors;
