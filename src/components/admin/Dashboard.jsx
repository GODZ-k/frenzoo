import React, { useContext } from "react";
import {
  Sidebarmenu,
} from "..";

function Dashboard({ children }) {


  return (
    <div className=" w-full h-screen flex">
      <Sidebarmenu />
      <div className={`  w-full  p-5 overflow-y-scroll`}>
        {children}
        </div>
    </div>
  );
}

export default Dashboard;
