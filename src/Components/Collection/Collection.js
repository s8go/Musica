import React from "react";
import Rectangle from "../../images/Rectangle 14.png";

const Collection = () => {
  return (
    <section className="mt-12 px-6 md:ml-24">
      <div className="flex flex-wrap justify-between md:justify-start">
        <button className="rounded-full bg-yellow-300 p-3 text-sm w-[48%] max-w-[350px] md:p-2 md:w-32 md:mr-6 ">
          My collection
        </button>
        <button className="border-2 border-gray-600 rounded-full p-3 text-gray-600 text-sm w-[48%] max-w-[350px] md:p-2 md:w-32">
          Likes
        </button>
      </div>

     <div className="md:flex md:flex-wrap">
     <div className="rounded-2xl bg-gray-300 p-2 h-[250px] mt-4 flex flex-col justify-end px-6 md:mt-8 mx-3 md:w-[230px]">
        <div className=" w-full md:mb-6">
          <h3 className="md:text-2xl">Limits</h3>
          <p className="text-xs text-gray-600 md:text-sm">John Watts</p>
        </div>

        <div className="flex justify-between mt-8 md:hidden">
          <p className="text-lg ">2.3m likes</p>
          <p>play</p>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-300 p-2 h-[250px] mt-4 flex flex-col justify-end px-6 md:mt-8 mx-3 md:w-[230px]">
        <div className=" w-full md:mb-6">
          <h3 className="md:text-2xl">Limits</h3>
          <p className="text-xs text-gray-600 md:text-sm">John Watts</p>
        </div>

        <div className="flex justify-between mt-8 md:hidden">
          <p className="text-lg ">2.3m likes</p>
          <p>play</p>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-300 p-2 h-[250px] mt-4 flex flex-col justify-end px-6 md:mt-8 mx-3 md:w-[230px]">
        <div className=" w-full md:mb-6">
          <h3 className="md:text-2xl">Limits</h3>
          <p className="text-xs text-gray-600 md:text-sm">John Watts</p>
        </div>

        <div className="flex justify-between mt-8 md:hidden">
          <p className="text-lg ">2.3m likes</p>
          <p>play</p>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Collection;
