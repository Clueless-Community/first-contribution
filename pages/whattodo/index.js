import React from "react";
import Navbar from "../components/Navbar";
import RightImgLeftText from "../components/RightImgLeftText";
import Footer from "../components/Footer";
import LeftImgRightText from "../components/LeftImgRightText";
import HeadingPoint from "../components/HeadingPoint";
import Announcment from "../components/Announcment";
import Document from "../document";


const index = () => {

  return (
    <div>
    <Document />
      <Navbar />
      <Announcment />
      <RightImgLeftText
        heading="What is Open Source ?"
        para="Open-source software (OSS) is computer software that is released
                under a license in which the copyright holder grants users the
                rights to use, study, change, and distribute the software and
                its source code to anyone and for any purpose. Open-source
                software may be developed in a collaborative public manner.
                Open-source software is a prominent example of open
                collaboration, meaning any capable user is able to participate
                online in development, making the number of possible
                contributors indefinite. The ability to examine the code
                facilitates public trust in the software.Open source code can be
                used for studying and allows capable end users to adapt software
                to their personal needs in a similar way user scripts and custom
                style sheets allow for web sites, and eventually publish the
                modification as a fork for users with similar preferences, and
                directly submit possible improvements as pull requests."
        img="/open-source.png"
      />

      {/* Bullted List */}
      <section class="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
        <div class="container px-5 py-12 mx-auto">
          <div class="lg:w-11/12 mx-auto">
            <h1 className="title-font mb-4 text-3xl font-medium text-slate-900 dark:text-gray-50">
              Why You Should Donate to Open-Source?
            </h1>
            <p className=" text-lg mb-2">
              Contributing to open source projects can be a rewarding way to
              learn, teach, share, and build experience.
            </p>
            <p className="font-semibold text-2xl underline">
              There are plenty of reasons why you should contribute to an open
              source project, such as:
            </p>
            <ul className=" list-disc my-5 text-xl mx-auto ml-5">
              <li className="my-2">
                To improve the software you rely on daily.
              </li>
              <li className="my-2">To find a mentor if you need one.</li>
              <li className="my-2">
                To learn new skills or improve on existing ones.
              </li>
              <li className="my-2">To share your skills.</li>
              <li className="my-2">
                To gain a much deeper knowledge about the software you're using.
              </li>
              <li className="my-2">
                To build up your reputation and help grow your career.
              </li>
              <li className="my-2">
                Plus, it's fun and gives you personal satisfaction and hey, you
                never know who is watching, maybe it's your next employer or
                partner.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <LeftImgRightText
        heading="Step by Step Guide on How to Contribute to Open Source"
        para="When we say contributing to open-source, it does not necesarilly mean that you need to know how to code. There are different ways in which you can contribute even if you are a non-coder – but having some coding skills will help you (and the projects) out a lot."
        img="/github.png"
      />
      {/* Bullted List */}
      <section class="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
        <div class="container px-5 py-12 mx-auto">
          <div class="lg:w-11/12 mx-auto">
            <p className="font-semibold text-3xl underline">
              Some common contributions can be through:
            </p>
            <ul className=" list-disc my-5 text-xl mx-auto ml-5">
              <li className="my-2">
                Adding a description to a project's documentation to elaborate
                on a certain point, mostly referred to as a README file.
              </li>
              <li className="my-2">
                Giving guidance on a specific project and how to use it.
              </li>
              <li className="my-2">
                Adding sample output to show how the code works.
              </li>
              <li className="my-2">
                Writing in-depth tutorials for the project.
              </li>
              <li className="my-2">Adding translation for a project.</li>
              <li className="my-2">
                Answering questions about a project (like on Stack Overflow or
                Reddit) You can offer to mentor another contributor.
              </li>
              <li className="my-2">
                You can fix typos and arrange the project's work folder
                correctly.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
        <div class="container px-5 py-5 mx-auto">
          <div class="lg:w-11/12 mx-auto">
            <h1 className="title-font mb-4 text-3xl font-medium text-slate-900 dark:text-gray-50">
              Roles in a typical OS Project In a typical OS project we will have
              the following people:
            </h1>
          </div>
        </div>
      </section>
      <HeadingPoint
        heading="Author"
        para="This is the person who created the project. They have the power to assign new roles to other members to help with the project's maintenance."
      />
      <HeadingPoint
        heading="Owner"
        para="The owner has administrative ownership of the project (and can be the same person as the author)"
      />
      <HeadingPoint
        heading="Maintainers"
        para="These people are responsible for driving the vision and goals of the project. They're usually people who feel responsible for the direction of the project and who are committed to improving it."
      />
      <HeadingPoint
        heading="Contributors "
        para="Contributors add to the project in one way or another. They follow the same code review process, are subject to the same requirements on code style, and so on."
      />
      <HeadingPoint
        heading="Community Members/Users"
        para=" These valuable members of the community can provide feedback about features, bug reports, and more."
      />
      <div className="pt-10 dark:bg-gray-700">
        <Footer />
      </div>
    </div>
  );
};

export default index;
