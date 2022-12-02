import ReactAudioPlayer from "react-audio-player";
import Header from "./Components/Header/Header";
import Catalogue from "./Components/Collection/Catalogue";
import ViewSong from "./Components/Collection/ViewSong";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/AppNav/Nav";
import { useState, useEffect, useRef } from "react";
import Error from "./Components/Error/Error";
import Playing from "./Components/Playing/Playing";
import allsongs from "./data/topchart.json"
import {songs} from "./Songs"
import Mood from "./data/Bella-Shmurda-Ase-(TrendyBeatz.com).mp3"
console.log(Mood)

function App() {
  const react_audio = useRef();
  const [data, setData] = useState(allsongs);
  const [focusedSong, setFocusedSong] = useState(allsongs.songs[0]);
  const [songPlay, setSongPlay] = useState(false);
const [playIndex, setPlayIndex] = useState(Math.floor(Math.random() * allsongs.songs.length))
  const [currentPlay, setCurrentPlay] = useState(allsongs.songs[playIndex]);
  const duration = useRef(react_audio.current?.audioEl.current.duration);
console.log(allsongs.songs[6])
useEffect(()=>{
  setCurrentPlay(curr => allsongs.songs[playIndex]);
  duration.current = react_audio.current?.audioEl.current.duration;
 
 if(songPlay) react_audio.current?.audioEl.current.play();
 else react_audio.current?.audioEl.current.pause(); 
})
 
  function playSong() {
 setSongPlay(curr=> !curr)
  }

  function nextSong() {
  if(playIndex + 1 !== allsongs.songs.length)   setPlayIndex(curr => curr+1)
  else setPlayIndex(0)
  }

  function prevSong() {
    if(playIndex > 0) setPlayIndex(curr => curr-1);
  }

  function ChangeFocus(el) {
    setFocusedSong(el);
  }

  function addToCollection(x) {
    setData((curr) => {
      return { ...curr, collection: [x, ...curr.collection] };
    });
  }

  return (
    <>
      <div className="bg-gray-800 py-16 min-h-screen">

      <ReactAudioPlayer src={allsongs.songs[playIndex].path} ref={react_audio} />

        <BrowserRouter>

          <Nav />
          <Playing
            currentPlay={currentPlay}
            playSong={playSong}
            nextSong={nextSong}
            prevSong={prevSong}
          />

          <Routes>
            <Route
              index
              element={<Header data={data} ChangeFocus={ChangeFocus} />}
            ></Route>
            <Route
              path="topalbums/:id"
              element={
                <ViewSong
                  data={data}
                  focusedSong={focusedSong}
                  addToCollection={addToCollection}
                />
              }
            ></Route>
            <Route
              path="collection"
              element={<Catalogue data={data} />}
            ></Route>

            <Route
              path="home"
              element={<Header data={data} ChangeFocus={ChangeFocus} />}
            ></Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
