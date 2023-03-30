import React, { useEffect, useState } from "react";

const Loader = () => {

  return (
    <main className="flex justify-center items-center p-2  h-72 w-full m-auto">
      <div
        className={`w-2 h-2 mx-[1px]  loader1 rounded-full`}
      ></div>
      <div
        className={`w-2 h-2 mx-[3px] loader2  rounded-full`}
      ></div>{" "}
      <div
        className={`w-2 h-2 mx-[1px] loader3 rounded-full`}
      ></div>
    </main>
  );
};

export default Loader;
