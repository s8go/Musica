import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Loader from "../Others/Loader";

const Releases = ({ songs, title, selectSong, url }) => {
  return (
    <section className="px-6 mt-12 md:ml-24">
      <div className="flex justify-between items-center">
        <h5 className="text-white text-2xl">{title}</h5>{" "}
        <Link to={url} className="underline text-yellow-300 text-lg">
          View all
        </Link>
      </div>

      <div className="overflow-x-scroll scrollbar-none mt-6 p-2">
        {songs.length > 0 ? (
          <Swiper
            className="flex w-full min-w-max "
            freeMode={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },

              600: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 4.5,
              },
            }}
          >
            {songs.map((release, i) => {
              return (
                <SwiperSlide
                  className=" mx-1 p-2 max-w-[200px] rounded-xl cursor-pointer bg-[#1A1E1F]"
                  key={i}
                  onClick={() => {
                    selectSong(release.id);
                  }}
                >
                  <div className="flex justify-between">
                    <img
                      src={release.image}
                      alt="music artwork"
                      className="block w-[100px] rounded-2xl"
                    />
                  </div>

                  <div className="mt-4">
                    <h6 className="text-white text-xl font-thin mt-4">
                      {release.title}
                    </h6>
                    <p className="text-gray-500 text-sm font-light">
                      {release.artist}
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
    </section>
  );
};

export default Releases;
