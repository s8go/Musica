import songdata from "./data/topchart.json";
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

function App() {
  const [data, setData] = useState(songdata);
  const [focusedSong, setFocusedSong] = useState(songdata.songs[0]);
  const [songPlay, setSongPlay] = useState(false);
  const [playIndex, setPlayIndex] = useState(0)
  const [currentPlay, setCurrentPlay] = useState(allsongs.songs[playIndex]);
  const myjam = useRef();

  // const daa = new Audio(jam)

  console.log(currentPlay)
useEffect(()=>{
  setCurrentPlay(curr => allsongs.songs[playIndex])
 if(songPlay) myjam.current.play();
 else myjam.current.pause(); 
})
 
  function playSong() {
 setSongPlay(curr=> !curr)
  }

  function nextSong() {
    setPlayIndex(curr => curr+1)
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

      <audio preload="auto" src={allsongs.songs[playIndex].path} ref={myjam}></audio>

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
              path="topsongs"
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
