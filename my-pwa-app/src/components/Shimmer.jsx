import React from 'react'

export const Shimmer = () => {
  return (
    <div className=" h-screen w-full  mx-auto">
      <div className="grid grid-cols-4 justify-center justify-items-center h-full  w-full gap-3 p-4  ">
        <div className="h-18  bg-gray-600 w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600   w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600  w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600 w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600 w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600   w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600  w-full shadow-md shimmer rounded"></div>
        <div className="h-18 bg-gray-600 w-full shadow-md shimmer rounded"></div>
      </div>
    </div>
  )
}
