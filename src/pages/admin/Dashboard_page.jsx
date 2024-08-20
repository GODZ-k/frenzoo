import React from "react";
import { Dashboard, DashboardHead } from "@/components";
import {
  BusinessAnalyticsCard,
  Dashboard_card,
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
      <DashboardHead>Welcome QRDine-In</DashboardHead>
      <Dashboard_card
        title={"Business Analytics (Day to Day)"}
        titleImg={"business_analytics.png "}
      >
        <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </Dashboard_card>

      <div className=" w-full my-6 sm:my-8 items-start flex gap-6 flex-col sm:flex-row">
        {/* Dashoard table */}
        <DashboardTable />

        {/* //Recent Order */}
        <RecenetOrderComp />
      </div>
    </Dashboard>
  );
}

export default Dashboard_page;
