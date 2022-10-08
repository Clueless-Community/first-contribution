import React from "react";

const GitDiv = (props) => {
  return (
    <section class="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
      <div class=" container mx-auto  ">
        <div class="w-11/12 mx-auto flex flex-row-reverse flex-wrap-reverse">
          <div class="container mx-auto">
            <div class="mb-4 w-12/12 mx-auto flex flex-row-reverse flex-wrap-reverse">
              <div class="lg:w-full w-full lg:pl-11 mb-3 lg:mb-0 bg-gray-200 dark:bg-gray-800 rounded p-3 shadow-md hover:shadow-lg">
                {/* code tag differs code section from heading. */}
                <code class="text-gray-900 text-xl title-font font-medium mb-1 dark:text-gray-100 ">
                  {props.command}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitDiv;
