import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Loader from "../Others/Loader";

const Releases = ({ songs, title, selectSong, url }) => {
  const screen = window.screen.availWidth > 1024;

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
            freeMode={true}
            speed={800}
            modules={[Navigation]}
            navigation={screen}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },

              600: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 4.5,
              },
            }}
          >
            {songs.slice(0, 9).map((release, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => {
                      selectSong(release.id);
                    }}
                    className="mx-1 p-2 max-w-[200px] rounded-xl cursor-pointer bg-[#1A1E1F] h-40 overflow-hidden"
                  >
                    <div className="flex justify-between">
                      <img
                        src={release.image}
                        alt="music artwork"
                        className="block w-20 rounded-2xl h-20"
                      />
                    </div>

                    <div className="mt-4">
                      <h6 className="text-white text-xl font-thin mt-4">
                        {release.title.length >= 15
                          ? release.title.slice(0, 15) + "..."
                          : release.title}
                      </h6>
                      <p className="text-gray-500 text-sm font-light">
                        {release.artist.length >= 25
                          ? release.artist.slice(0, 25) + "..."
                          : release.artist}
                      </p>
                    </div>
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
