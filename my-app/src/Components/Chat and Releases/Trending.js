import React from "react";

const Trending = ({ data, title }) => {
  return (
    <section className="px-6 mt-12 md:ml-24 md:-mt-6">
      <h5 className="text-white text-2xl">{title}</h5>

      <div className="overflow-x-scroll mt-6">
        <div className="flex w-full min-w-max ">
          {data.songs.map((release, i) => {
            return (
              <div className=" mr-2 w-[200px] max-w-md p-0" key={i}>
                <div className="flex justify-between">
                  <img
                    src={release.image}
                    alt="music artwork"
                    className="block w-[150px]"
                  />
                </div>

                <div className="mt-4">
                  <h6 className="text-white text-xl font-thin mt-4">
                    {release.title.toString().slice(0, 17) + "..."}
                  </h6>
                  <p className="text-gray-500 text-sm font-light">
                    {release.artist}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
