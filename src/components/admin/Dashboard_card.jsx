import React from 'react'

function Dashboard_card({title ,  titleImg , children}) {
  return (
    <div className=" p-5 w-full rounded-xl shadow-md shadow-gray-200 border border-gray-200 ">
    {titleImg && (
        <div className=" py-5 flex gap-3 items-center">
        <img
          src={titleImg}
          alt=""
          className=" w-6 object-center object-cover h-6"
        />
        <h1 className=" font-semibold text-lg">
          {title}
        </h1>
      </div>
    )}

  {children}
  </div>
  )
}

export default Dashboard_card