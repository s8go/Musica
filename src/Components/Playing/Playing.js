import React from "react";
import play from "../../images/Frame 7.png";
import previous from "../../images/previous.png";
import next from "../../images/next.png";
import shuffle from "../../images/shuffle.png";
import repeat from "../../images/repeate-one.png";
import volume from "../../images/volume-high.png";

const Playing = ({ currentPlay }) => {

  return (
    <div className="bg-play backdrop-blur-lg fixed left-0 w-screen min-h-[100px] sm:h-20 p-4 bottom-0 flex z-[100000]">
      <div className="text-white flex flex-wrap justify-start items-center  w-2/3 md:w-1/3 gap-2">
        <img
          src={currentPlay.image}
          alt={"Artist Song"}
          className="block w-16 rounded-xl mr-4"
        />
        <div>
          <h5 className="text-white text-lg">
            {currentPlay.artist}
           
          </h5>
          <p className="text-sm md:text-base font-light">{currentPlay.title}</p>
        </div>
      </div>

      <div className=" w-1/3 md:w-2/3 flex flex-col items-center justify-center">
        <div className="flex items-center justify-end md:justify-evenly w-full h-1/2 md:w-1/2">
          <img
            src={shuffle}
            alt="controls"
            className="hidden md:block cursor-pointer"
          />
          <img
            src={previous}
            alt="controls"
            className="hidden md:block cursor-pointer"
          />
          <img src={play} alt="controls" className="cursor-pointer" />
          <img src={next} alt="controls" className="cursor-pointer" />
          <img
            src={repeat}
            alt="controls"
            className="hidden md:block cursor-pointer"
          />
        </div>

        <div className="hidden md:flex items-end w-4/5 px-4  h-1/2">
          <input type="range" name="play-length" id="play" className="w-full" />
        </div>
      </div>

      <div className="justify-center items-center hidden md:flex w-1/5">
        <img src={volume} alt="vol" className="block mr-4" />
        <div className="text-white flex items-start">
          {" "}
          <input
            type="range"
            name="play-length"
            id="play"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Playing;
