/* eslint-disable react/prop-types */
// import React from "react";

function Footer(props) {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full h-12 text-center text-base font-semibold grid grid-cols-3 ">
      <button className=" bg-pink-800 text-white" onClick={props.reset}>
        Reset
      </button>
      <button className=" bg-black text-white">Total: {props.total}</button>
      <button
        className=" bg-purple-800 text-white"
        onClick={() => alert("Processing for payment")}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Footer;
