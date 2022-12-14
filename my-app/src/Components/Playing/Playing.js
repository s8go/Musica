import React, { useEffect, useState } from "react";
import play from "../../images/Frame 7.png";
import previous from "../../images/previous.png";
import next from "../../images/next.png";
import shuffle from "../../images/shuffle.png";
import repeat from "../../images/repeate-one.png";
import volumeSrc from "../../images/volume-high.png";

const Playing = ({
  currentPlay,
  playSong,
  nextSong,
  prevSong,
  duration,
  songPlay,
  time,
  setSongPlay,
  songTime=0,
}) => {
  
  const [volume, setVolume] = useState(10);

  
  useEffect(() => {
    if (songPlay.playing && songTime < duration) {
      setTimeout(() => {
        time.setPlayTime((curr) => curr + 1);
      }, 1000);
    }

    if (songTime >= duration) {
      time.setPlayTime(0);
      !songPlay.loop && nextSong();
    }
  });

  return (
    <div className="bg-play backdrop-blur-lg fixed left-0 w-screen min-h-[100px] sm:h-20 p-4 bottom-0 flex z-[100000]">
      <div className="text-white flex flex-wrap justify-start items-center  w-2/3 md:w-1/3 gap-2">
        <img
          src={currentPlay.image}
          alt={"Artist Song"}
          className="block w-16 rounded-xl mr-4"
        />
        <div>
          <h5 className="text-white text-xs md:text-sm">
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
            className={`hidden md:block cursor-pointer  p-1 ${
              songPlay.shuffle && "shadow-yellow-300 shadow-inner"
            }`}
            onClick={() =>
              setSongPlay((curr) => {
                return { ...curr, shuffle: !curr.shuffle };
              })
            }
          />
          <img
            src={previous}
            onClick={() => prevSong()}
            alt="controls"
            className="cursor-pointer"
          />
          <img
            src={play}
            alt="controls"
            className="cursor-pointer"
            onClick={playSong}
          />
          <img
            src={next}
            alt="controls"
            className="cursor-pointer"
            onClick={() => nextSong()}
          />
          <img
            src={repeat}
            alt="controls"
            className={`hidden md:block cursor-pointer  p-1 ${
              songPlay.loop && "shadow-yellow-300 shadow-inner"
            }`}
            onClick={() =>
              setSongPlay((curr) => {
                return { ...curr, loop: !curr.loop };
              })
            }
          />
        </div>

        <div className="hidden md:flex items-end w-4/5 px-4  h-1/2">
          <input
            type="range"
            name="play-length"
            id="play"
            className="w-full"
            max={duration || 1}
            value={songTime}
            onChange={(e) => {
              e.target.value = songTime;
            }}
          />
        </div>
      </div>

      <div className="justify-center items-center hidden md:flex w-1/5">
        <img src={volumeSrc} alt="vol" className="block mr-4" />
        <div className="text-white flex items-start">
          {" "}
          <input
            type="range"
            name="play-length"
            id="play"
            className="w-full"
            value={volume}
            max={10}
            onChange={(e) => {
              setVolume(10);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Playing;
