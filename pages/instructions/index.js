import Image from "next/image";
import React from "react";
import Announcment from "../components/Announcment";
import GitCom from "../components/GitCom";
import GitDiv from "../components/GitDiv";
import Navbar from "../components/Navbar";
import PageContentWrapper from "../components/PageContentWrapper";
import Document from "../document";
import fork2 from "../../guide image/fork2.png";
import code_git from "../../guide image/code_git.png";
import code_copy from "../../guide image/code_copy.png";
import format from "../../guide image/format.png";
import pull1 from "../../guide image/pull1.png";
import pull2 from "../../guide image/pull2.png";
import pull3 from "../../guide image/pull3.png";
import pull4 from "../../guide image/pull4.png";
import pull5 from "../../guide image/pull5.png";
import Footer from "../components/Footer";
import Topfab from "../components/Topfab";

const index = () => {
	return (
		<>
			<Document />
			<Navbar />
			<PageContentWrapper>
				{/* Heading */}
				<div className=" dark:bg-gray-700 dark:text-gray-50 my-4">
					<h1 className="text-4xl text-center p-5 font-bold">
						Contributing Instructions
					</h1>
					<hr className="mx-auto w-2/5 pb-7 " />
					<p class="lg:w-2/5 mx-auto leading-relaxed text-base text-center">
						Contributing to an Open Source project can be scary, specially if
						it's your first time. Don't worry, we have your back! Just follow
						the instructions below and get started on your OpenSource journey
						today.
					</p>
				</div>
				{/* Main Content */}
				<section className="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
					{/* Initialize and Configure Git */}
					<div className="container px-5 py-12 mx-auto">
						<div className="lg:w-11/12 mx-auto">
							<h1 className="title-font mb-4 text-3xl font-semibold underline text-slate-900 dark:text-gray-50">
								Step 1. Initialize and Configure Git
							</h1>
							<p className=" text-md mb-4">
								The first thing to do is to initialize Git. Before proceeding,
								make sure you have GIT installed in your local machine. If you
								do not have GIT installed,{" "}
								<a
									href="https://github.com/HITK-2025/first-contribution/blob/main/installation.md"
									className="text-[#0061ff]"
								>
									refer to this tutorial
								</a>
							</p>
							<ul className=" list-disc my-5 text-md mx-auto ml-5">
								<li className="my-2">
									<p className=" text-md mb-4">To initialize Git, write:</p>
									<GitDiv command="git init" />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										To configure your local Git username
									</p>
									<GitDiv command="git config --global user.name &ldquo;github username&rdquo;" />
								</li>

								<li className="my-2">
									<p className=" text-md mb-4">
										To configure your local Git password
									</p>
									<GitDiv command="git config --global user.name &ldquo;github password&rdquo;" />
								</li>
							</ul>
						</div>
					</div>

					{/* Fork the repo */}
					<div className="container px-5 py-12 mx-auto">
						<div className="lg:w-11/12 mx-auto">
							<h1 className="title-font mb-4 text-3xl font-semibold underline text-slate-900 dark:text-gray-50">
								Step 2. Fork the Repository
							</h1>
							<p className=" text-md mb-4">
								A fork is a rough copy of a repository. Forking a repository
								allows you to freely test and debug with changes without
								affecting the original project. One of the excessive use of
								forking is to propose changes for bug fixing.
							</p>

							<ul className=" list-disc my-5 text-md mx-auto ml-5">
								<li className="my-2">
									<p className=" text-md mb-4">
										So go to the first-contributions repository and fork the
										repository by clicking on the 'Fork' button as show below.
									</p>

									<div className="my-8">
										<Image src={fork2} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Click on the 'Code' button and copy the URL of your forked
										Repository
									</p>
									<div className="my-8">
										<Image src={code_git} alt="forking" layout="responsive" />
									</div>
									<div className="my-8">
										<Image src={code_copy} alt="forking" layout="responsive" />
									</div>
								</li>
							</ul>
						</div>
					</div>

					{/* Clone the repo */}
					<div className="container px-5 py-12 mx-auto">
						<div className="lg:w-11/12 mx-auto">
							<h1 className="title-font mb-4 text-3xl font-semibold underline text-slate-900 dark:text-gray-50">
								Step 3. Clone the Repository
							</h1>
							<p className=" text-md mb-4">
								The next step is to clone the repository. When you clone a
								repository, you copy the repository from GitHub.com to your
								local machine. Cloning a repository pulls down a full copy of
								all the repository data that GitHub.com has at that point in
								time, including all versions of every file and folder for the
								project.
							</p>

							<ul className=" list-disc my-5 text-md mx-auto ml-5">
								<li className="my-2">
									<p className=" text-md mb-4">
										Open up Git bash on your local machine and enter the
										following command to clone the forked repository on your
										local system:
									</p>
									<GitDiv command="git clone https://github.com/HITK-2025/first-contribution.git" />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Enter the following command to change your directory:
									</p>
									<GitDiv command="cd first-contribution/data/" />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Open contributors.js in your favourite text editor and add a
										new object below the existing objects in the format given
										below.
									</p>
									<div className="my-8 w-full">
										<Image src={format} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Now open Contributors.md in a text editor and add your name
										and your github link below the exisiting one in given format
									</p>
									<GitDiv command="- [your_name](your Github url)" />
								</li>
							</ul>
						</div>
					</div>

					{/* Creating a pull request */}
					<div className="container px-5 py-12 mx-auto">
						<div className="lg:w-11/12 mx-auto">
							<h1 className="title-font mb-4 text-3xl font-semibold underline text-slate-900 dark:text-gray-50">
								Step 4. Create a Pull Request
							</h1>
							<p className=" text-md mb-4">
								The next step is to create a pull request. This is one of the
								most important steps. Follow the steps below to open up your
								first pull request
							</p>

							<ul className=" list-disc my-5 text-md mx-auto ml-5">
								<li className="my-2">
									<p className=" text-md mb-4">
										Create a branch. A branch is designed to encapsulate a group
										of changes. These changes might be thrown away, entirely
										rewritten or in the majority of cases they’ll be promoted
										into the main history of the codebase - via a merge. Create
										a branch using the following command.
									</p>
									<GitDiv command="git branch branch_name" />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Checkout to the created branch
									</p>
									<GitDiv command="git checkout branch_name" />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Now add the files using the git command
									</p>
									<GitDiv command="git add ." />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Commit the changes to the local project
									</p>
									<GitDiv command="git commit -m &ldquo;Added my data&rdquo;" />
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Push the changes to your forked github repo
									</p>
									<GitDiv command="git push origin branch_name" />
								</li>
							</ul>
						</div>
					</div>

					{/* Final Steps */}
					<div className="container px-5 py-12 mx-auto">
						<div className="lg:w-11/12 mx-auto">
							<h1 className="title-font mb-4 text-3xl font-semibold underline text-slate-900 dark:text-gray-50">
								Step 5. Final Steps
							</h1>
							<p className=" text-md mb-4">
								Open your forked git repository, you will get a message like as
								shown in the figure (if not then refresh the page).
							</p>

							<ul className=" list-disc my-5 text-md mx-auto ml-5">
								<li className="my-2">
									<p className=" text-md mb-4">Click on "Contribute"</p>
									<div className="my-8 w-full">
										<Image src={pull1} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Now click on "Open Pull Request"
									</p>
									<div className="my-8 w-full">
										<Image src={pull2} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">Click on "Create pull request</p>
									<div className="my-8 w-full">
										<Image src={pull3} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Add a meaningful title and comment and then click on "Create
										pull request
									</p>
									<div className="my-8 w-full">
										<Image src={pull4} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										You will get message similar to as shown below in the
										picture which means that you have sucessfully made a pull
										request !
									</p>
									<div className="my-8 w-full">
										<Image src={pull5} alt="forking" layout="responsive" />
									</div>
								</li>
								<li className="my-2">
									<p className=" text-md mb-4">
										Now, you can see your data into Contributors.md and
										contributors.js
									</p>
								</li>
							</ul>
						</div>
					</div>

					{/* Project Setup */}
					<div className="container px-5 py-12 mx-auto">
						<div className="lg:w-11/12 mx-auto">
							<h1 className="title-font mb-4 text-3xl font-semibold underline text-slate-900 dark:text-gray-50">
								Want to setup the this project locally?
							</h1>
							<p className=" text-md mb-4">
								If you want to setup this project locally, then{" "}
								<a
									href="https://github.com/Clueless-Community/first-contribution/blob/main/SetUp.md"
									className="text-[#0061ff]"
								>
									refer to this tutorial
								</a>
							</p>
						</div>
					</div>
				</section>
				<Announcment />
			</PageContentWrapper>
			<Footer />
			<Topfab />
		</>
	);
};

export default index;
