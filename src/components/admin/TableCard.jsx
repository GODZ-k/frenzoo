import React from "react";


const TableCard = ({tableNo}) => {
    return (
           <>
                <div className="shadow-md p-4 border-gray-200 flex flex-col md:gap-3 gap-2 rounded-2xl border">
                    <div className=" flex gap-2 items-center">
                    <p className="font-semibold">Table</p>
                    <h1 className=" font-bold">{tableNo}</h1>
                    </div>
                    <span className="inline-block px-2 w-fit text-sm py-1 text-green-600 bg-green-100 rounded-lg">
                        Vacant
                    </span>
                </div>
            </>
    );
};


export default TableCard;


