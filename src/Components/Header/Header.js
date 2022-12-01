import React from "react";
import Chart from "../Chat and Releases/TopAlbum";
import Releases from "../Chat and Releases/Releases";
import Likes from "../../images/Frame 4.png"

const Header = ({ data, ChangeFocus }) => {
  
  return (
    <>
      <header className="h-full md:h-[500px] text-white px-6 pt-16 md:ml-24 md:pt-0 md:flex md:justify-between md:items-center">
        <div></div>

        <div className="flex flex-col justify-between bg-blue-300 rounded-3xl p-4 my-8 md:my-0 h-[70vh] w-full md:w-[60%] md:h-[70%] bg-header-image bg-contain bg-top-right bg-no-repeat">
          <h5 className="font-thin text-sm md:text-xl">Currate playlist</h5>
          <div>
            <h2 className="text-3xl font-medium">R & B Hits</h2>
            <p className="text-sm font-light mt-2">
              All mine, Lie again,Petty call me everyday, Out of time, No love,
              Bad habit and so much more
            </p>

            <div>
              <div className="mt-6 mb-4">
                <img src={Likes} alt="people who liked" /></div>
            </div>
          </div>
        </div>
        <div className="md:w-[40%] md:h-[70%]  md:ml-12">
          <Chart data={data} ChangeFocus={ChangeFocus} />
        </div>
      </header>
      <div>
        <Releases data={data} title="Trending Songs" />
      </div>

      <div className="lg:mt-20 mb-16 ">
        <Releases data={data} title="Recomended For You" />
      </div>
    </>
  );
};

export default Header;
