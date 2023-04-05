import React, { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { app, storage } from "../../firebase.config";
import Signin from "../Profile/Signin";

const Upload = ({ user, signIn }) => {
  const database = getFirestore(app);
  let myCollection = collection(database, "songs");

  const [uploadData, setUploadData] = useState([]);
  const [song, setSong] = useState({
    title: "",
    artist: "",
    url: "",
    image: "",
    id: new Date() + "Seego",
    date: new Date().getTime() + 0,
  });
  const [progress, setProgress] = useState(0);

  function changeValue(e) {
    setSong((curr) => {
      return { ...curr, [e.name]: e.value };
    });
  }

  useEffect(() => {
    if (progress === "done") {
      addDoc(myCollection, { ...song, uploadBy: user.username });
      setTimeout(() => {
        setUploadData([]);
        setProgress(0);
        setSong({
          title: "",
          artist: "",
          url: "",
          image: "",
          uploadBy: user.username,
        });
      });
    }
  }, [progress, user.username, myCollection, song]);

  async function uploadToServer(data, type) {
    const mountainsRef = ref(storage, data.name);
    const uploadTask = uploadBytesResumable(mountainsRef, data);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(Number(progress));
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (type === "audio") {
            setProgress("done");
          }

          setSong((curr) => {
            if (type === "image") {
              return { ...curr, image: downloadURL };
            } else if (type === "audio") {
              return { ...curr, url: downloadURL };
            }
            return curr;
          });
        });
      }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!song.title) {
      alert("Invalid song title");
    } else if (!song.artist) {
      alert("invalid Artist name");
    } else {
      await uploadToServer(uploadData[1], "image");
      await uploadToServer(uploadData[0], "audio");
    }
  }

  return (
    <div className="text-gray-700 h-[440px] py-8 px-2 flex items-center justify-center">
      {user.username ? (
        <form
          className="flex flex-col text-center justify-center items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className=" m-2 block p-2 text-sm w-2/3 rounded-xl"
            type="text"
            name="title"
            placeholder="songtitle"
            value={song.title}
            onChange={(e) => changeValue(e.target)}
          />
          <input
            className=" m-2 block p-2 text-sm w-2/3 rounded-xl"
            type="text"
            name="artist"
            placeholder="artist"
            value={song.artist}
            onChange={(e) => changeValue(e.target)}
          />
          <p className="text-white text-xs text-left m-4">Song art cover: </p>
          <input
            type="file"
            className="block m-2 text-white"
            onChange={(e) => {
              setUploadData([...uploadData, e.target.files[0]]);
            }}
            accept={"image/*"}
          />
          <p className="text-white text-xs text-left m-4">Mp3 file:</p>

          <input
            type="file"
            className="block m-2 text-white"
            onChange={(e) => {
              setUploadData([e.target.files[0], ...uploadData]);
            }}
            accept={"audio/*"}
          />
          <button
            className={`bg-[#FACD66] p-2 w-28 text-base mt-8 rounded-xl ${
              progress > 0 || progress === "done"
                ? "bg-[#FACD99]"
                : "bg-[#FACD66]"
            }`}
            disabled={progress > 0 ? true : false}
          >
            {progress === 0
              ? "upload"
              : progress < 100
              ? Math.floor(progress) + "%"
              : "done"}
          </button>
        </form>
      ) : (
        <Signin signIn={signIn} />
      )}
    </div>
  );
};

export default Upload;
