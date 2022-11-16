import songdata from "./data/topchart.json";
import Header from "./Components/Header/Header";
import Catalogue from "./Components/Collection/Catalogue";
import ViewSong from "./Components/Collection/ViewSong";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/AppNav/Nav";
import {  useState } from "react";
import Error from "./Components/Error/Error";
import Playing from "./Components/Playing/Playing";


function App() {
  const [data, setData] = useState(songdata);
  const [focusedSong, setFocusedSong] = useState(songdata.songs[0]);
  const [currentPlay, setCurrentPlay] = useState(data.songs[0])
  console.dir(setCurrentPlay)

 

  function ChangeFocus(el) {
    setFocusedSong(el);
  }

  function addToCollection(x) {
    setData((curr) => {
      return { ...curr, collection: [x, ...curr.collection] };
    });
  }
console.log(currentPlay.artist)

  return (
    <>
      <div className="bg-gray-800 py-16 min-h-screen">
        <BrowserRouter>
          <Nav />
          <Playing currentPlay={currentPlay}/>

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

<Route
              path="*"
              element={<Error/>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
