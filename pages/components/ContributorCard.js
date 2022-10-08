import React from "react";
import { Avatar, ChakraProvider } from "@chakra-ui/react";

const ContributorCard = (props) => {
  return (
    <>

        <div className="p-2 lg:w-1/3 md:w-1/2 w-full  animate animate-3 hover:-skew-y-2 hover:origin-top hover:skew-x-2 hover:z-10  ">
          <div className="h-full flex md:flex-col xl:flex-row items-center hover:dark:bg-gray-800 border-gray-200 border p-4 rounded-lg dark:bg-gray-600  bg-gray-50">
              <div className="md:mb-3 xl:mb-0">
            <ChakraProvider>
                <Avatar size="xl" name={props.name} src={`https://avatars.dicebear.com/api/bottts/${props.name}.svg`}/>
            </ChakraProvider>
              </div>
            <div className="flex-grow ml-7 md:ml-0 lg:ml-7">
              <h2 className="text-gray-900 title-font font-medium text-lg dark:text-white">
                {props.name}
              </h2>
              <p className="text-gray-500  my-1 dark:text-slate-300">{props.branch}</p>
                <div>
                  <span className="text-gray-500 my-1 font-semibold dark:text-slate-200">
                    College :
                  </span>
                  <span className="text-gray-500 dark:text-slate-300"> {props.college}</span>
                </div>
                <div>
                  <span className="text-gray-500 my-1 font-semibold dark:text-slate-200">
                    Year :
                  </span>
                  <span className="text-gray-500 dark:text-slate-300"> {props.year}</span>
                </div>

              <div className="flex my-1">
                <a href={props.github} target="_blank">
                  <div className=" cursor-pointer hover:scale-105 transition-all mr-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="dark:fill-gray-50 fill-gray-600"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </div>
                </a>
                {props.linkedin ?(
                <a href={props.linkedin} target="_blank">
                  <div className=" cursor-pointer hover:scale-105 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </div>
                </a>
                )
                :
                (null)}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContributorCard;
