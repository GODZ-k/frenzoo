import { Dashboard, Dashboard_card, DashboardHead } from "@/components";
import React from "react";

function CashPayment_page() {
  return (
    <Dashboard>
      <DashboardHead>
        <div className=" flex gap-3 items-center">
          <div className=" w-6">
            <img className=" w-full"
              src="https://frenzoo.qrdine-in.com/public/assets/admin/img/icons/all_orders.png"
              alt=""
            />
          </div>
          <div className=" text-black">Verify offline payments</div>
          <div className=" font-semibold text-sm bg-gray-200 text-black px-2 py-1 flex justify-center items-center rounded-2xl">108</div>
        </div>
      </DashboardHead>
      <Dashboard_card>
        <div>
            <input type="text" placeholder="Search by Order ID" className=" border-gray-200 border w-fit p-2 rounded-l-lg " />
            <button className=" bg-green-700 px-4  py-2 rounded-r-lg border border-green-700 text-white">Search</button>
        </div>
        <div>
          
        </div>
      </Dashboard_card>
    </Dashboard>
  );
}

export default CashPayment_page;
