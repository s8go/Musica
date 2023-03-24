import React from "react";
import { useNavigate } from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react"
import {freemode} from "swiper"
import "swiper/css"
import Loader from "../Others/Loader";

const Chart = ({data, selectAlbum}) => {
  const Navigate = useNavigate();
  


  return (
    <section className="h-full">
      <h5 className="text-white text-2xl mt-12 lg:mt-0">Top Albums</h5>

     {
      data.length > 0 ?  <div className="overflow-x-scroll overflow-y-hidden scrollbar-none mt-8 md:mt-2 lg:overflow-x-hidden lg:ml-0 lg:overflow-y-scroll lg:h-[85%]">
      <div className="lg:hidden">
      <Swiper className="w-full min-w-fit  lg:px-2 h-[250px] min-h-fit" freeMode={true}  breakpoints = {
         { 0: {
           slidesPerView:1.3
         },

         700:{
           slidesPerView: 2.3
         }
       }
     }
       >
    {
     data.map((chart, i)=>{
       
      return   <SwiperSlide
       key={chart.id}
       className="bg-[#1A1E1F] cursor-pointer rounded-3xl m-2 lg:mx-0 lg:h-[85px] p-2 min-h-fit md:h-[190px] max-w-[250px] lg:max-w-[470px] lg:w-full min-w-fit"
       onClick={() => {
        selectAlbum(chart)
        Navigate(`/topalbums/album?title=${chart.title}&id=${chart.id}`);
         
       }}
     >
      <Text content={chart}/>
     </SwiperSlide>
     })
    }
       </Swiper>
      </div>


       <div className="hidden w-full min-w-fit  lg:px-2 h-[250px] lg:flex lg:flex-col min-h-fit" 
       >
    {
     data.map((chart, i)=>{
       
       return   <div
       key={chart.id + i}
       className="bg-[#1A1E1F] cursor-default rounded-3xl m-2 lg:mx-0 lg:h-[85px] p-2 min-h-fit md:h-[190px] max-w-[250px] lg:max-w-[470px] lg:w-full min-w-fit"
       onClick={() => {
        selectAlbum(chart)
        Navigate(`/topalbums/album?title=${chart.title}&id=${chart.id}`);
         
       }}
     >
   <Text content={chart}/>
     </div>
     })
    }
       </div>
     </div> : <Loader/>
     }
      
    </section>
  );
};

export default Chart;


function Text({content: chart}){
  return (  <div className="flex justify-evenly flex-col lg:flex-row md:gap-4 p-1">
  <div className="flex justify-between w-full lg:w-1/5 lg:min-w-[50px] ">
    <img
      src={chart.image}
      alt="music artwork"
      className=" lg:w-[150px] h-[60px] rounded-xl"
    />
    <div className="text-white w-1/2 text-right visible lg:invisible">
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

  <div className="mt-4 md:mt-0 xl:-ml-20 lg:pl-16 md:-pl-8  ">
    <h6 className="text-white text-xl font-thin md:text-xs">
      {chart.title}
    </h6>
    <p className="text-gray-500 md:text-xs">{chart.artist}</p>
    <p className="text-white text-xs font-thin mt-8 md:mt-2">24:56</p>
  </div>

  <div className=" invisible lg:visible  w-1/3 ">
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
</div>)
}
