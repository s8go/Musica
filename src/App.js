import ReactAudioPlayer from "react-audio-player";
import Header from "./Components/Header/Header";
import Catalogue from "./Components/Collection/Catalogue";
import ViewSong from "./Components/Collection/ViewSong";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/AppNav/Nav";
import { useState, useEffect, useRef } from "react";
import Error from "./Components/Error/Error";
import Playing from "./Components/Playing/Playing";
import Sgxoe from "./Components/Sgxoe";
import allsongs from "./data/topchart.json";
import { songs } from "./Songs";

function App() {
  const react_audio = useRef();
  const [data, setData] = useState(allsongs);
  const [focusedSong, setFocusedSong] = useState(allsongs.songs[0]);
  const [songPlay, setSongPlay] = useState({
    playing: false,
    playIndex: Math.floor(Math.random() * allsongs.songs.length + 1),
    shuffle: false,
    loop: false,
  });
  const [playTime, setPlayTime] = useState(0);

  const [currentPlay, setCurrentPlay] = useState(
    allsongs.songs.filter((song) => {
     let value = song.id === songPlay.playIndex && song;
     return value;
    })[0]
  );

  //This code does nothing actually
[songs][0].toString().charAt(0);


  const currentTime = useRef(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {

    
    setCurrentPlay(
      (curr) =>
        allsongs.songs.filter((song) => {
         let value = song.id === songPlay.playIndex && song;
         return value;
        })[0]
    );
    setTimeout(() => {
      setDuration(react_audio.current?.audioEl.current?.duration);
    }, 500);

    const timeReader = setInterval(() => {
      currentTime.current = react_audio.current?.audioEl.current.currentTime;
    }, 1000);

    if (songPlay.playing) {
      react_audio.current?.audioEl.current.play();
    } else {
      react_audio.current?.audioEl.current.pause();
      clearInterval(timeReader);
    }
  }, [songPlay.playIndex, songPlay.playing, currentPlay]);


  function playSong() {
    setSongPlay((curr) => {
      return { ...curr, playing: !curr.playing };
    });


  }

  function nextSong() {
    setSongPlay((curr) => {
      if (songPlay.playIndex < allsongs.songs.length && !songPlay.shuffle)
        return {
          ...curr,
          playIndex: songPlay.playIndex + 1,
          nextClick: curr.nextClick + 1,
        };
      if (songPlay.shuffle) {
        return {
          ...curr,
          playIndex: Math.floor(Math.random() * allsongs.songs.length + 1),
          nextClick: curr.nextClick + 1,
        };
      } else return { ...curr, playIndex: 1 };
    });

    setPlayTime(0);
  }

  function prevSong() {
    setSongPlay((curr) => {
      if (songPlay.playIndex > 1 && !songPlay.shuffle)
        return {
          ...curr,
          playIndex: songPlay.playIndex - 1,
          nextClick: curr.nextClick + 1,
        };
      if (songPlay.shuffle) {
        return {
          ...curr,
          playIndex: Math.floor(Math.random() * allsongs.songs.length + 1),
          nextClick: curr.nextClick + 1,
        };
      } else return { ...curr, playIndex: allsongs.songs.length };
    });

    setPlayTime(0);
  }

  function selectSong(songIndex) {
    setSongPlay((curr) => {
      return { ...curr, playIndex: songIndex, playing: true };
    });

    setPlayTime(0);
  }

  function ChangeFocus(el) {
    setFocusedSong(el);
  }

  function addToLikes(x) {
    setData((curr) => {
      return { ...curr, likes: [x, ...curr.collection] };
    });
  }



  return (
    <>
      <div
        className="bg-[#1D2123] py-20 pb-28 min-h-screen min-w-[200px]"
      >
        <ReactAudioPlayer src={currentPlay.path} ref={react_audio} />

        <BrowserRouter>
          <Nav />

          <Playing
            currentPlay={currentPlay}
            playSong={playSong}
            nextSong={nextSong}
            prevSong={prevSong}
            time={{ playTime, setPlayTime }}
            songPlay={songPlay}
            setSongPlay={setSongPlay}
            duration={duration}
            songTime={react_audio.current?.audioEl.current?.currentTime}
          />

          <Routes>
            <Route
              index
              element={
                <Header
                  data={data}
                  ChangeFocus={ChangeFocus}
                  selectSong={selectSong}
                />
              }
            ></Route>
            <Route
              path="topalbums/:id"
              element={
                <ViewSong
                  data={data}
                  focusedSong={focusedSong}
                  addToLikes={addToLikes}
                />
              }
            ></Route>
            <Route
              path="collection"
              element={<Catalogue data={data} playSong={selectSong}/>}
            ></Route>

            <Route
              path="home"
              element={
                <Header
                  data={data}
                  ChangeFocus={ChangeFocus}
                  selectSong={selectSong}
                />
              }
            ></Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>

          <footer className="bg-[#1D2123]  h-[150px] flex justify-center text-white">
            <Sgxoe/>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
