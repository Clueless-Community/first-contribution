import React from "react";

const CreatorSection = () => {
  return (
    <>
      <div className=" dark:bg-slate-800 bg-gray-50 sm:w-10/12 w-11/12 mx-auto rounded-2xl my-10">
        <h1 className="text-3xl text-center p-10 font-semibold dark:text-gray-50">
          Our Team
        </h1>
        <section className="text-gray-600 body-font dark:text-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-center object-fit rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="/Roshan.jpeg"
                  />
                  <p className="leading-relaxed">
                    Hey there!! I'm Roshan Kumar | Currently doing app
                    developement using flutter framework | Interested in
                    developement and machine learning | Reach me at
                    roshan0902@pm.me
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-gray-50">
                    Roshan Kumar
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="Rajdeep.png"
                  />
                  <p className="leading-relaxed">
                    Young UI & UX Designer & Full Stack and Web Developer |
                    Loves to learn and share knowledge | Loves to Play Chess. | Reach me at rajdipgupta019@gmail.com
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-gray-50">
                    Rajdeep Sengupta
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="/Nikhil.jpeg"
                  />
                  <p className="leading-relaxed">
                    Hello there! I'm Nikhil Currently learning Django and Python
                    programming. I'm interested in Web Development and looking
                    for collaboration on Development Projects. You can reach me
                    through nikhil25803@gmail.com
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-gray-50">
                    Nikhil Raj
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="/Anubhab.jpg"
                  />
                  <p className="leading-relaxed">
                  Hey! I'm Anubhab from AI & ML. Here I am exploring technologies, surfing through life playing guitar and at your service ;) Reach me at: anubhabhalder7@gmail.com
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-gray-50">
                    Anubhab Halder
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreatorSection;
