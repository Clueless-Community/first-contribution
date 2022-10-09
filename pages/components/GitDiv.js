import React, {useState, useEffect} from "react";

const GitDiv = (props) => {
  const [copy,setCopy] = useState("copy");

  function handleCopy(){
     setCopy("copied");
     navigator.clipboard.writeText(props.command);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy("copy");
    }, 2000);
  
    return () => {
      clearTimeout(timeout);
    }
  }, [copy])
  

  return (
    <section className="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
      <div className=" container mx-auto  ">
        <div className="w-11/12 mx-auto flex flex-row-reverse flex-wrap-reverse">
          <div className="container mx-auto">
            <div className="mb-4 w-12/12 mx-auto flex flex-row-reverse flex-wrap-reverse">
              <div className="lg:w-full w-full lg:pl-11 mb-3 lg:mb-0 bg-gray-200 dark:bg-gray-800 rounded p-3 shadow-md hover:shadow-lg">
                {/* code tag differs code section from heading. */}
                <code className="text-gray-900 text-xl title-font font-medium mb-1 dark:text-gray-100 ">
                  {props.command}
                </code>
                <button onClick={handleCopy} style={{float: 'right'}}>{copy}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitDiv;
