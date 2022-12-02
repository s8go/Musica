import React from "react";
import { useNavigate } from "react-router-dom";

const Chart = ({data, ChangeFocus}) => {
  const Navigate = useNavigate();


  return (
    <section className="h-full ">
      <h5 className="text-white text-2xl mt-12 md:mt-0">Top Albums</h5>

      <div className="overflow-x-scroll overflow-y-hidden mt-8 md:mt-2 md:overflow-x-hidden md:-ml-8 lg:ml-0 md:overflow-y-scroll md:h-[85%]">
        <div className="flex w-full min-w-fit  md:px-2 md:flex-col min-h-fit">
     {
      data.albums.map((chart, i)=>{
        return   <div
        key={chart.id}
        className="bg-gray-900 cursor-default rounded-3xl m-2 md:mx-0 lg:h-[85px] p-2 min-h-fit w-[250px] max-w-[470px] md:w-full min-w-fit"
        onClick={() => {
          ChangeFocus(chart)
          Navigate(`/topalbums/${chart.title}`);
        }}
      >
        <div className="flex justify-evenly flex-col md:flex-row md:gap-4 p-1">
          <div className="flex justify-between md:w-1/5 md:min-w-[50px]">
            <img
              src={chart.image}
              alt="music artwork"
              className=" md:w-[150px] h-[60px]"
            />
            <div className="text-white w-1/2 text-right visible md:invisible">
            <div className="relative w-fit m-auto">
          <div className="w-fit m-auto absolute  lg:left-[50%] top-[50%] z-[1000]">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="18"
                  stroke="white"
                  strokeOpacity="0.11"
                />
              </svg>
            </div>

            <div className="w-fit m-auto absolute top-3 left-3">
           <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                stroke="#FACD66"
                strokeWidth="0.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

           </div>
          </div>
           
            </div>
          </div>

          <div className="mt-4 md:mt-0 xl:-ml-20 lg:pl-16 md:-pl-8 ">
            <h6 className="text-white text-xl font-thin md:text-xs">
              {chart.title}
            </h6>
            <p className="text-gray-500 md:text-xs">{chart.artist}</p>
            <p className="text-white text-xs mt-8 md:mt-2">24:56</p>
          </div>

          <div className=" invisible md:visible  w-1/3">
          <div className="relative w-fit m-auto">
          <div className="w-fit m-auto absolute  lg:left-[50%] to0-[50%]">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="18"
                  stroke="white"
                  strokeOpacity="0.11"
                />
              </svg>
            </div>

            <div className="w-fit m-auto absolute top-3 left-3">
           <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                stroke="#FACD66"
                strokeWidth="0.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

           </div>
          </div>
          </div>
        </div>
      </div>
      })
     }
        </div>
      </div>

      
    </section>
  );
};

export default Chart;
