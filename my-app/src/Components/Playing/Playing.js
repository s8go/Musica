import React, { useEffect, useRef } from "react";
import play from "../../images/Frame 7.png";
import previous from "../../images/previous.png";
import next from "../../images/next.png";
import shuffle from "../../images/shuffle.png";
import repeat from "../../images/repeate-one.png";
import volumeSrc from "../../images/volume-high.png";

const Playing = ({
  allSongs,
  playing,
  nextSong,
  prevSong,
  playPause,
  playSong,
}) => {
  const screen = window.screen.availWidth;
  const ref = useRef(null);

  useEffect(() => {
    if (allSongs.length > 0) {
      if (playPause) ref.current.play();
      else ref.current.pause();
    }
  });

  return (
    <>
      {allSongs.length > 0 && (
        <audio
          className="hidden"
          src={allSongs[playing].url}
          controls
          ref={ref}
        ></audio>
      )}
      {allSongs.length > 0 ? (
        <div className="bg-play backdrop-blur-lg fixed left-0 w-full min-h-[100px] sm:h-20 p-4 bottom-0 flex z-[100000]">
          <div className="text-white flex flex-wrap justify-start items-center  w-2/3 gap-2 ">
            <img
              src={allSongs[playing].image}
              alt={"Artist Song"}
              className="block w-16 rounded-xl mr-4 "
            />
            <div >
              {screen < 400 ? (
                <>
                  {" "}
                  <h5 className="text-white text-xs md:text-sm">
                    {allSongs[playing].artist.length >= 15
                      ? allSongs[playing].artist.slice(0, 15) + "..."
                      : allSongs[playing].artist}
                  </h5>
                  <p className="text-sm md:text-base font-light">
                    {allSongs[playing].title.length >= 15
                      ? allSongs[playing].title.slice(0, 15) + "..."
                      : allSongs[playing].title}
                  </p>
                </>
              ) : (
                <>
                  <h5 className="text-white text-xs md:text-sm">
                    {allSongs[playing].artist}
                   
                  </h5>
                  <p className="text-sm md:text-base font-light">
                  {allSongs[playing].title}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className=" w-1/3 md:w-2/3 flex flex-col items-center justify-center">
            <div className="flex items-center justify-end md:justify-evenly w-full h-1/2 md:w-1/2">
              <img
                src={shuffle}
                alt="controls"
                className={`hidden md:block cursor-pointer  p-1 `}
                // onClick={() =>
                //   setSongPlay((curr) => {
                //     return { ...curr, shuffle: !curr.shuffle };
                //   })
                // }
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
                className={`hidden md:block cursor-pointer  p-1 ${""}`}
                // onClick={() =>
                //   setSongPlay((curr) => {
                //     return { ...curr, loop: !curr.loop };
                //   })
                // }
              />
            </div>

            <div className="hidden md:flex items-end w-4/5 px-4  h-1/2">
              {/* <input
            type="range"
            name="play-length"
            id="play"
            className="w-full"
            // max={duration || 1}
            value={0}
            readOnly
            // onChange={(e) => {
            //   e.target.value = songTime;
            // }}
          /> */}
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
                max={10}
              />
            </div>
          </div>
        </div>
      ) : (
        <h3>.</h3>
      )}
    </>
  );
};

export default Playing;
