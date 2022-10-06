import React from "react"

const DiscrodHome = () => {
  return (
    <div>
      <div className='dark:bg-slate-800 bg-blue-500 opacity-90 sm:w-10/12 w-11/12 mx-auto rounded-2xl my-10'>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto flex items-center md:flex-row flex-col'>
            <div className='flex flex-col mx-auto md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center'>
              <h2 className='text-xs text-white tracking-widest font-medium title-font mb-1 uppercase'>
                Want a Community ?
              </h2>
              <h1 className='md:text-3xl text-2xl font-medium title-font text-white'>
                Why You Need A Community?
              </h1>
              <ul className='list-disc text-gray-50 text-xl my-5 text-left mx-auto px-2'>
                <li className='my-2 '>For support and motivation</li>
                <li className='my-2'>Knowledge sharing</li>
                <li className='my-2'>Networking opportunities</li>
                <li className='my-2'>Expand your areas of expertise</li>
                <li className='my-2'>It will challenge you</li>
              </ul>
            </div>
            <div className='flex md:ml-auto mx-auto items-center flex-shrink-0 space-x-4'>
              <a href='https://discord.gg/r5uKBGxT9T' target='_blank'>
                <button className='dark:bg-gray-600 bg-gray-50 sm:inline-flex flex-col sm:flex-row py-28 px-20 rounded-lg items-center justify-center hover:bg-gray-100 focus:outline-none transition-all'>
                  <img src='/discord.svg' alt='' />
                  <span className='ml-4 flex items-start flex-col leading-none'>
                    <span className='text-xs dark:text-white text-gray-600 mb-1 mt-5 sm:mt-auto'>
                      JOIN NOW
                    </span>
                    <span className='title-font font-medium dark:text-white text-gray-600'>
                      Discord
                    </span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DiscrodHome
