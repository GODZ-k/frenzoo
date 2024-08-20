import React from 'react'
import Dashboard from './Dashboard'
import {
    BusinessAnalyticsCard,
    DashboardTable,
    RecenetOrderComp,
  } from "../../components";

function Dashboard_page() {
    const business_analytics = [
      {
        image: "sales.png",
        title: "sales",
        value: `₹${0}`,
      },
      {
        image: "pending.png",
        title: "Pending",
        value: 0,
      },
      {
        image: "confirmed.png",
        title: "Confirmed",
        value: 0,
      },
      {
        image: "cooking.png",
        title: "Cooking",
        value: 0,
      },
    ];
  
  return (
   <Dashboard>
    <div className=" pr-6 pb-6 text-2xl text-[#ED4C79] font-semibold">
      <h1>Welcome QRDine-In</h1>
    </div>
    <div className=" rounded-xl shadow-md shadow-gray-200 border border-gray-200 ">
      <div className=" flex p-5 gap-3 items-center">
        <img
          src=" business_analytics.png "
          alt=""
          className=" w-6 object-center object-cover h-6"
        />
        <h1 className=" font-semibold text-lg">
          Business Analytics (Day to Day)
        </h1>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3 m-3">
        {business_analytics?.map((item, index) => (
          <BusinessAnalyticsCard
            key={index}
            image={item.image}
            title={item.title}
            value={item.value}
          />
        ))}

        <div></div>
      </div>
    </div>

   <div className=" w-full my-6 sm:my-8 items-start flex gap-6 flex-col sm:flex-row">
     {/* Dashoard table */}
     <DashboardTable />
    
    {/* //Recent Order */}
    <RecenetOrderComp />
   </div>
   </Dashboard>
  )
}

export default Dashboard_page