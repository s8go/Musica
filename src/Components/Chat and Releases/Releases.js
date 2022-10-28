import React from "react";
import Rectangle from "../../images/pop-songs.jpg";
import newrelease from "../../data/topchart.json"

const Releases = () => {
  return (
    <section className="px-6 mt-12 md:ml-24 md:-mt-6">
      <h5 className="text-white text-2xl">New releases</h5>

      <div className="overflow-x-scroll mt-6 ">
        <div className="flex w-full min-w-max ">
         {
          newrelease.map((release)=>{
            return  <div className=" mr-2 w-[200px] max-w-md p-0" key={release.id}>
            <div className="flex justify-between">
              <img
                src={release.image}
                alt="music artwork"
                className="block w-[150px]"
              />
            </div>

            <div className="mt-4">
              <h6 className="text-white text-xl font-thin mt-4">
               {release.title}
              </h6>
              <p className="text-gray-500 text-sm font-light">{release.artist}</p>
            </div>
          </div>

          })
         }
          {/*  <div className="rounded-3xl mr-2 w-[200px] max-w-md p-0">
            <div className="flex justify-between ">
              <img
                src={Rectangle}
                alt="music artwork"
                className="block w-[150px]"
              />
            </div>

            <div className="mt-4">
              <h6 className="text-white text-xl font-thin mt-4">
                Golden age of 80s
              </h6>
              <p className="text-gray-500 text-sm font-light">Sean swadder</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Releases;
