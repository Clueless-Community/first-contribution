import React from 'react'

const HeadingPoint = (props) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
        <div className="container mx-auto">
          <div className="w-11/12 mx-auto flex flex-row-reverse flex-wrap-reverse">
            <div className="lg:w-full w-full lg:pl-10 mb-3 lg:mb-0">
              <h1 className="text-gray-900 text-xl title-font font-medium mb-1 dark:text-gray-50">
                {props.heading} :
              </h1>
              <p className="leading-relaxed mb-4 text-justify text-md">
                {props.para}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeadingPoint
