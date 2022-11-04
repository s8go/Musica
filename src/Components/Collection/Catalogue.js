import React, {useState} from "react";
import Rectangle from "../../images/Rectangle 14.png";

const Catalogue = ({ data }) => {

  const [currentView, setCurrentView] = useState("collection");

  const collectionSkeleton = data.collection.map((col, index) => {
    return (
      <div
        key={index}
        className="rounded-2xl cursor-pointer bg-gray-300 w-[200px] mx-auto h-fit mt-4 flex flex-col justify-end md:mt-8 md:mx-3 md:w-[230px]"
      >
        <div className=" w-full md:mb-6 ">
          <img src={col.image} alt="album cover" className="inline-block h-[150px] w-full rounded-t-2xl"/>
          <h3 className="md:text-2xl px-4">{col.title}</h3>
          <p className="text-xs text-gray-600 md:text-sm px-4">{col.artist}</p>
        </div>

        <div className="flex justify-between mt-4 px-4">
          <p className="text-sm p-2">{col.likes}</p>
         <div className="w-fit ">
         <svg
            width="10"
            height="11"
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

  return (
    <section className="mt-12 px-6 md:ml-24 min-w-fit">
      <div className="flex flex-wrap justify-between md:justify-start">
        <button className={`rounded-full ${currentView === "collection" ? "bg-yellow-300" : "border-2 border-gray-600 text-gray-600" } p-3 text-sm w-[48%] max-w-[350px] md:p-2 md:w-32 md:mr-6 min-w-fit`} onClick={()=>setCurrentView("collection")}>
          My collection
        </button>
        <button className={` ${currentView === "likes" ? "bg-yellow-300" : "border-2 border-gray-600 text-gray-600" } rounded-full p-3  text-sm w-[48%] max-w-[350px] md:p-2 min-w-fit md:w-32`}  onClick={()=>setCurrentView("likes")}>
          Likes
        </button>
      </div>

      <div className="md:flex md:flex-wrap">
        {data.collection.length > 0 ? (
          collectionSkeleton
        ) : (
          <h2>Your collection is empty</h2>
        )}

      </div>
    </section>
  );
};

export default Catalogue;
