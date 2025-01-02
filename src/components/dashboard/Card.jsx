import React from "react";

const Cards = () => {
  return (
    <>
      {/* Grid items inside the chart section */}

      <div className="bg-yellow-50 h-44 rounded-lg shadow-lg flex  relative flex-col justify-between p-4 ">
        <div className="flex">
          <img
            src="/public/image/Monthly_revenue.png"
            alt=""
            className="w-12"
          />
        </div>
        <div className="font-bold text-lg text-yellow-700 shadow-purple-700 ">
          Today Revenue
        </div>
        <div className="text-3xl font-bold text-yellow-900">1,200</div>
      </div>

      <div className="bg-purple-100 h-44 rounded-lg shadow-lg flex flex-col justify-between p-4">
        <div className="flex">
          <img src="/public/image/daily_load.png" alt="" className="w-20" />
        </div>
        <div className="font-bold text-lg text-purple-900 shadow-purple-700 ">
          Today Loaded
        </div>
        <div className="text-3xl font-bold text-purple-800">1,200</div>
      </div>

      <div className="bg-blue-100 h-44 rounded-lg shadow-lg flex flex-col justify-between p-4">
        <img src="/public/image/montly_revnue.png" alt="" className="w-20"/>
        <div className="font-bold text-lg text-blue-900">Monthly Revenue</div>
        <div className="text-3xl font-bold text-blue-800">1,200</div>
      </div>

      <div className="bg-pink-100 h-44 rounded-lg shadow-lg flex flex-col justify-between p-4">
        <img src="/public/image/monthly_stock.png" alt="" className="w-20 -mt-2"/>
        <div className="font-bold text-lg text-pink-900 -mt-2">Monthly Revenue</div>
        <div className="text-3xl font-bold text-pink-800">1,200</div>
      </div>
    </>
  );
};

export default Cards;
