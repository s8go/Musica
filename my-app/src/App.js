import Header from "./Components/Header/Header";
import Catalogue from "./Components/Collection/Catalogue";
import ViewAlbum from "./Components/Collection/ViewAlbum";
import ViewSong from "./Components/Collection/ViewSong";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/AppNav/Nav";
import { useState, useEffect, useCallback } from "react";
import Error from "./Components/Others/Error";
import Playing from "./Components/Playing/Playing";
import Seego from "./Components/Seego";
import Upload from "./Components/Upload/Upload";

import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "./firebase.config";
import SearchResults from "./Components/SearchResult/SearchResults";
import Profile from "./Components/Profile/Profile";

function App() {
  const [allSongs, setAllSongs] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [focusedAlbum, setFocusedAlbum] = useState({});
  const [playing, setPlaying] = useState(0);
  const [playPause, setPlayPause] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  const database = getFirestore(app);
  let myCollection = collection(database, "songs");
  let myAlbums = collection(database, "albums");

  const goGet = useCallback(async ()=>{
    const querySnapshot = await getDocs(myCollection);
    const data = await querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    const query = await getDocs(myAlbums);
    const alb = await query.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    setAllSongs(
      [...data]
    );
    setAllAlbums([...alb]);
  }, [myAlbums, myCollection]
)


  useEffect(() => {
    goGet();
  }, []);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

  function getSearchResult(val) {
    if (val.length < 1) {
    setSearchRes([]);
      return;
    }
    let res = allSongs.filter((song) => {
      return (
        song.title.toLowerCase().includes(val.toLowerCase()) ||
        song.artist.toLowerCase().includes(val.toLowerCase())
      );
    });

    setSearchRes(res)
  }

  function playSong() {
    setPlayPause(!playPause);
  }

  function nextSong() {
    setPlaying(playing + 1);
  }

  function prevSong() {
    setPlaying(playing - 1);
  }

  function selectSong(id) {
    let selected = allSongs.findIndex((song) => song.id === id);
    setPlaying(selected);
    setPlayPause(true);
    console.log(selected, allSongs[selected], allSongs)
  }

  return (
    <>
      <div className="bg-[#1D2123] py-20 pb-28 min-h-screen min-w-[200px]">
        <BrowserRouter>
          <Nav getSearchResult={getSearchResult} />
          {searchRes.length > 0 && (
            <SearchResults songs={searchRes} selectSong={selectSong} />
          )}

          <Playing
            allSongs={allSongs}
            playing={playing}
            playPause={playPause}
            prevSong={prevSong}
            nextSong={nextSong}
            playSong={playSong}
          />

          <Routes>
            <Route
              index
              element={
                <Header
                  data={allSongs}
                  selectSong={selectSong}
                  albums={allAlbums}
                  selectAlbum={setFocusedAlbum}
                />
              }
            ></Route>

            <Route
              path="topalbums/album"
              element={
                <ViewAlbum data={allAlbums} focusedAlbum={focusedAlbum} />
              }
            ></Route>

            <Route
              path="trending"
              element={
                <ViewSong
                  data={allSongs}
                  topic="trending"
                  selectSong={selectSong}
                />
              }
            ></Route>
            <Route
              path="home/trending"
              element={
                <ViewSong
                  data={allSongs}
                  topic="trending"
                  selectSong={selectSong}
                />
              }
            ></Route>

            <Route
              path="home/recomended"
              element={
                <ViewSong
                  data={allSongs}
                  topic="For You"
                  selectSong={selectSong}
                />
              }
            ></Route>

            <Route
              path="recomended"
              element={
                <ViewSong
                  data={allSongs}
                  topic="For You"
                  selectSong={selectSong}
                />
              }
            ></Route>

            <Route
              path="collection"
              element={
                <Catalogue
                  data={{
                    collection: allSongs.reverse(),
                    likes: allSongs,
                  }}
                  playSong={selectSong}
                />
              }
            ></Route>

            <Route
              path="home"
              element={
                <Header
                  data={allSongs}
                  selectSong={selectSong}
                  albums={allAlbums}
                  selectAlbum={setFocusedAlbum}
                />
              }
            ></Route>

            <Route
              path="me"
              element={<Profile data={allSongs} selectSong={selectSong} />}
            ></Route>

            <Route path="/upload234" element={<Upload />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>

          <footer className="bg-[#1D2123]  h-[150px] flex justify-center text-white">
            <Seego />
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
