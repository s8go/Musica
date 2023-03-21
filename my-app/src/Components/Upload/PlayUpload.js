import React, { useCallback, useEffect, useRef, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app} from "../../firebase.config";

const PlayUpload = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [playing, setPlaying] = useState(0);
  const [playPause, setPlayPause] = useState(false);
  const [time, setTime] = useState({duration:0, currentTime: 0})
  const ref = useRef(null)
  const database = getFirestore(app);
  let myCollection = collection(database, "songs");

  useEffect(() => {
    goGet()
  },[] );

  useEffect(()=>{
   if(allSongs.length > 0){
    if(playPause) ref.current.play();
    else ref.current.pause()
   }
  })

  async function goGet(){
    const querySnapshot = await getDocs(myCollection);
    const data = await querySnapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id};
    });
    
  setAllSongs([...data])
}

console.log(allSongs[playing])

function playSong(){
 setPlayPause(!playPause)
}

function nextSong(){
  setPlaying(playing + 1)
 }

 function prevSong(){
  setPlaying(playing-1)
 }

  return (
    <div>
      <h3>Hello</h3>
      {allSongs.length > 0 && <audio className="hidden" src={allSongs[playing].url} controls ref={ref}></audio>}
      <button className="bg-white " onClick={()=>playSong()}>PLAY</button>
      <button className="bg-white " onClick={()=>nextSong()}>NEXT</button>
      <button className="bg-white " onClick={()=>prevSong()}>PREV</button>
     {
      allSongs.length > 0 &&  <img src={allSongs[playing].image} alt="" className="w-40 h-40"/>
     }

    </div>
  );
};

export default PlayUpload;
