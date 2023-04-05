import React from "react";

const Seego = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-2xl  ">&#169;</p>
        <p className="text-gray-400 text-sm">
          This site is created by{" "}
          <a
            href="https://twitter.com/seego"
            target={"_blank"}
            rel="noreferrer"
            className="text-xl text-white underline"
          >
            Seego
          </a>
        </p>
        <p className="text-gray-400 text-sm">Dec 2022</p>
      </div>
    </>
  );
};

export default Seego;
