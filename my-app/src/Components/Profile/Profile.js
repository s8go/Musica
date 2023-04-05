import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UserImage from "../../images/User_font_awesome.svg.png";
import Loader from "../Others/Loader";
import Signin from "./Signin";
import { Link } from "react-router-dom";

const Profile = ({ data, selectSong, user, signIn, Logout }) => {
  
  return (
    <div className=" min-w-[300px] w-1/2 h-96 mx-auto text-center justify-evenly flex flex-col">
      {user.username !== undefined ? (
        <>
          <div className="flex items-center flex-col justify-center text-lg text-gray-500">
            <p className="m-5 text-white">{user.displayName}</p>
            <img
              src={user.image || UserImage}
              className="w-10 h-10 inline-block mx-auto mb-3 rounded-full"
              alt="profile img"
            />
            <p>@{user.username}</p>
           <div className="flex justify-evenly w-full">
            <Link to={"upload234"} className="text-xs py-1 px-3 rounded-lg mt-5  bg-[#1A1E1F] mx-5">upload +</Link>
           <button className="text-xs py-1 px-3 rounded-lg mt-5 bg-[#FACD66] text-[#1A1E1F]" onClick={Logout}>
              Logout
            </button>

           </div>
          </div>

          <div className=" p-3 relative  text-gray-500">
            <p className="my-3 mb-9 text-left text-white">Uploaded songs: {data
                  .filter((d) => d.uploadBy === user.username).length}</p>

            {data.length > 0 ? (
              <Swiper slidesPerView={3.5}>
                {data
                  .filter((d) => d.uploadBy === user.username)
                  .map((d, i) => {
                    return (
                      <SwiperSlide
                        className={`text-center  w-28  mx-1 bg-[#1A1E1F] p-4 rounded-xl cursor-pointer text-xs`}
                        key={i}
                      >
                        <div
                          className="h-20 overflow-hidden"
                          onClick={() => {
                            selectSong(d.id);
                          }}
                        >
                          <img
                            className="w-8 inline-block rounded-xl bg-slate-600"
                            src={d.image}
                            alt="song cover"
                          />
                          <p className="text-xs">{d.artist}</p>
                          <p className="text-xs">
                            {d.title.toString().slice(0, 5) + "..."}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            ) : (
              <Loader />
            )}

        
          </div>
        </>
      ) : (
       <Signin  signIn={signIn}/>
      )}
    </div>
  );
};

export default Profile;
