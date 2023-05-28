/* eslint-disable react/prop-types */
// import React from 'react'

function Product(props) {
  return (
    <>
      <div className=" mx-4 my-2 grid grid-cols-5">
        <p className="col-span-2">
          {props.product.name}
          <span className=" ml-4 px-4 py-1 rounded text-white bg-gray-700">
            $ {props.product.price}
          </span>
        </p>
        <div className="flex ">
          <button
            className="w-6 rounded bg-red-400 text-white"
            onClick={() => props.decreaseQty(props.index)}
          >
            -
          </button>
          <button className="w-6">{props.product.quantity}</button>
          <button
            className="w-6 rounded bg-blue-500 text-white"
            onClick={() => props.increaseQty(props.index)}
          >
            +
          </button>
        </div>
        <h1>{props.product.price * props.product.quantity}</h1>
        <button
          className="w-40 h-8 rounded text-center text-white font-semibold bg-red-800"
          onClick={() => props.remove(props.index)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default Product;
