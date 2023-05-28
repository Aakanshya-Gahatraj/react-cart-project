/* eslint-disable react/prop-types */
import { useState } from "react";

function AddItem(props) {
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  return (
    <div className="p-4 mb-4 bg-slate-300">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addItem(prodName, prodPrice);
        }}
        className="mx-2"
      >
        <label htmlFor="productName">
          Enter Product Name :
          <input
            type="text"
            name="productName"
            value={prodName}
            className="my-4 ml-4"
            onChange={(e) => setProdName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="productName">
          Enter Product Price :
          <input
            type="number"
            name="productPrice"
            value={prodPrice}
            className="my-4 ml-4"
            onChange={(e) => setProdPrice(Number(e.target.value))}
          />
        </label>
        <br />
        <button className="mb-2 w-40 h-8 rounded text-center text-white font-semibold bg-blue-700">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddItem;
