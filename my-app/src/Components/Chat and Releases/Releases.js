import React from "react";
const Releases = ({songs, title, selectSong}) => {
 
  return (
    <section className="px-6 mt-12 md:ml-24">
      <h5 className="text-white text-2xl">{title}</h5>

      <div className="overflow-x-scroll scrollbar-none mt-6 p-2">
        <div className="flex w-full min-w-max ">
         {
          songs.map((release, i)=>{
            return  <div className=" mr-2 w-[200px] max-w-md p-0 cursor-pointer" key={i} onClick={()=>{selectSong(release.id)}}>
            <div className="flex justify-between">
              <img
                src={release.image}
                alt="music artwork"
                
                className="block w-[150px] rounded-2xl"
              />
            </div>

            <div className="mt-4">
              <h6 className="text-white text-xl font-thin mt-4">
               {release.title}
              </h6>
              <p className="text-gray-500 text-sm font-light">{release.artist}</p>
            </div>
          </div>

          })
         }

        </div>
      </div>
    </section>
  );
};

export default Releases;
