import React, { useState, useEffect } from "react";
import Loader from "../Others/Loader";

const Catalogue = ({ data, playSong }) => {
  const [currentView, setCurrentView] = useState("collection");
  useEffect(()=>{
    window.scrollTo(0,0)
}, [])

  function viewComp(val){
    const element = val.map((col, index) => {
      return (
        <div
          key={index}
          className="group relative  rounded-2xl cursor-pointer w-full mx-auto h-[250px] mt-4 flex flex-col justify-end md:mt-8 md:mx-3 md:w-[230px]"
        >
          <div className="absolute w-full md:mb-6 h-full  top-0 left-0">
            <img
              src={col.image}
              alt="album cover"
              className="inline-block w-full h-full rounded-lg -z-[1000]  opacity-40 duration-500 group-hover:opacity-20 md:group-hover:scale-110 "
            />
          </div>
  
          <div className=" w-full static z-[1000] text-[#EFEEE0] mb-4 transition duration-300 translate-y-8 group-hover:translate-y-0">
            <h3 className="text-2xl px-4 font-light">{col.title}</h3>
            <p className="text-sm md:text-sm px-4 mt-1 font-light">
              {col.artist}
            </p>
          </div>
  
          <div className="flex text-[#EFEEE0] justify-between mt-4 px-3 static z-[700] transition duration-1000 translate-y-8 group-hover:translate-y-0 group-hover:h-fit">
            <p className="text-sm p-2 opacity-0  transition duration-300 delay-300 group-hover:opacity-100">
              {Math.floor((Math.random()) + 10) / 10}m likes
            </p>
            <div
              className="w-fit flex items-center opacity-0  transition duration-300 delay-300 group-hover:opacity-100"
              onClick={() => playSong(col.id)}
            >
              <svg
                width="15"
                height="18"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.506668 2.586V8.966C0.506668 10.2727 1.92667 11.0927 3.06 10.4393L5.82667 8.846L8.59334 7.246C9.72667 6.59266 9.72667 4.95933 8.59334 4.306L5.82667 2.706L3.06 1.11266C1.92667 0.459329 0.506668 1.27266 0.506668 2.586Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      );
    });

    return element;
  }
  const likeSkeleton = viewComp(data?.likes);
  const collectionSkeleton = viewComp(data?.collection);

  return (
    <section className="mt-12 px-6 md:ml-24 min-w-fit pb-20">
     {
      data.likes?.length > 0 ? <> <div className="flex flex-wrap justify-between md:justify-start">
      <button
        className={`rounded-full ${
          currentView === "collection"
            ? "bg-yellow-300"
            : "border-2 border-gray-600 text-gray-600"
        } p-3 text-sm w-[48%] max-w-[350px] md:p-2 md:w-32 md:mr-6 min-w-fit`}
        onClick={() => setCurrentView("collection")}
      >
        My collection
      </button>
      <button
        className={` ${
          currentView === "likes"
            ? "bg-yellow-300"
            : "border-2 border-gray-600 text-gray-600"
        } rounded-full p-3  text-sm w-[48%] max-w-[350px] md:p-2 min-w-fit md:w-32`}
        onClick={() => setCurrentView("likes")}
      >
        Likes
      </button>
    </div>

    <div className="md:flex md:flex-wrap">
    {data.collection.length > 0 && currentView === "collection"
        ? collectionSkeleton
        : currentView === "collection" && (
          <h2 className=" p-4 m-auto text-3xl text-white">
          Your collection is empty
        </h2>
          )}
       
    </div>

    <div className="md:flex md:flex-wrap">
      {data.likes.length > 0 && currentView === "likes"
        ? likeSkeleton
        : currentView === "likes" && (
            <h2 className=" p-4 m-auto text-3xl text-white">
              You haven't liked any music
            </h2>
          )}
    </div></> : <Loader/>
     }
    </section>
  );
};

export default Catalogue;
