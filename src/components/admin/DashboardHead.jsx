import React from 'react'

function DashboardHead({children }) {
  return (
    <div className=" px-5 pb-5 text-2xl text-[#ED4C79] font-semibold">
      <div>{children}</div>
    </div>
  )
}

export default DashboardHead