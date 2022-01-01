import React from 'react'

const Announcment = () => {
    return (
        <div className=' dark:bg-gray-700 pt-10'>
        <div className='flex justify-between items-center bg-blue-500 py-10 w-10/12 mx-auto  rounded-2xl px-10'>
            <div className=''>
                <h1 className='text-2xl font-bold text-gray-50'>Contribute To Your First Project Now!</h1>
            </div>
            <button className='px-4 bg-gray-100 rounded-xl font-semibold text-xl py-2 hover:bg-gray-200 transition-all text-black'>
                Contribute
            </button>
        </div>
        </div>
    )
}

export default Announcment
