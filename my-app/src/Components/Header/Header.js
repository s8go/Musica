import React from "react";
import Chart from "../Chat and Releases/TopAlbum";
import Releases from "../Chat and Releases/Releases";
import Likes from "../../images/Frame 4.png";
import Home_img from "../../images/home-img.png";

const Header = ({ data, selectSong, albums, selectAlbum }) => {
  return (
    <>
      <header className="h-full  text-white px-6 pt-16 lg:mb-8 md:ml-24 md:pt-0 lg:flex lg:justify-between lg:items-center max-w-[1440px]">
        <div className="flex justify-center bg-[#609EAF] rounded-3xl my-8 md:my-0 h-[70vh] w-full lg:w-[60%] lg:max-w-[600px] lg:h-[350px] lg:mt-8 bg-header-image lg:bg-desktop-background bg-contain bg-right-top bg-no-repeat">
          <div className="flex flex-col justify-between w-full lg:w-1/2 p-8 ">
            <h5 className="font-light text-sm md:text-2xl">Currate playlist</h5>
            <div>
              <h2 className="text-3xl font-medium">Afrobeats Hits</h2>
              <p className="text-md font-light mt-4">
                {data
                  .slice(0, 10)
                  .map((item) => item.title)
                  .join(", ")}
              </p>

              <div>
                <div className="mt-6 md:mt-12 mb-4">
                  <img src={Likes} alt="people who liked" className="w-16" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 hidden lg:block">
            <img src={Home_img} alt="W" className="block w-full h-full" />
          </div>
        </div>
        <div className="lg:w-[40%] lg:h-[400px] lg:ml-12w-full">
          <Chart data={albums} selectAlbum={selectAlbum} />
        </div>
      </header>
      <div>
        <Releases
          url={"trending"}
          selectSong={selectSong}
          songs={data}
          title="Trending Songs"
        />
      </div>

      <div className="lg:mt-20 mb-32">
        <Releases
          url={"recomended"}
          songs={data.filter((item) => item.uploadBy === "Seego")}
          selectSong={selectSong}
          title="Recomended For You"
        />
      </div>
    </>
  );
};

export default Header;
