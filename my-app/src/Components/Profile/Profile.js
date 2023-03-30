import React from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import UserImage from "../../images/User_font_awesome.svg.png"

const Profile = ({data, selectSong}) => {
  return (
    <div className=" min-w-[300px] w-1/2 h-96 mx-auto text-center justify-evenly flex flex-col">
      <div className="flex items-center flex-col justify-center text-lg text-gray-500">
        <img src={UserImage} className="w-10 h-10 inline-block mx-auto mb-1 opacity-30" alt="profile img" />
        <p>@Seego</p>
        <button className="text-xs py-1 px-3 rounded-lg mt-5 bg-[#FACD66] text-[#1A1E1F]">Logout</button>
      </div>

      <div className=" p-3 relative  text-gray-500">
        <p className="my-3 mb-9 text-left text-white">Uploaded songs:</p>

        <Swiper slidesPerView={3.5}>
          {data.filter(d => d.uploadBy === "Seego").map(
            (d, i) => {
              return (
                <SwiperSlide
                  className={`text-center  w-28 text-xs mx-1 bg-[#1A1E1F] p-4 rounded-xl cursor-pointer`}
                  key={i}
                >
                  <img className="w-10 inline-block rounded-xl bg-slate-600" src={d.image} alt="song cover" />
                  <p>{d.artist}</p>
                  <p>{d.title.toString().slice(0, 5) + "..."}</p>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Profile;
