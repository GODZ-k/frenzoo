

import React from "react";
import TableCard from './TableCard';
import { Dashboard_card } from "..";


const DashboardTable = () => {
    return (
      <Dashboard_card title={"Table Booking Today"}  titleImg={"business_analytics.png "}>
         <div className=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <TableCard tableNo={"1"} />
        <TableCard tableNo={"2"} />
        <TableCard tableNo={"3"} />
        <TableCard tableNo={"4"} />
        <TableCard tableNo={"5"} />
        <TableCard tableNo={"6"} />
        <TableCard tableNo={"7"} />
        <TableCard tableNo={"8"} />
        <TableCard tableNo={"9"} />
       
        </div>
      </Dashboard_card>
  
    );
}


export default DashboardTable;
