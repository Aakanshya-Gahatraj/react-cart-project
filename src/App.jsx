import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const prodList = [
    {
      name: "Exo XOXO Album",
      price: 100,
      quantity: 0,
    },
    {
      name: "Exo Lotto Album",
      price: 100,
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(prodList);
  const [totalAmount, setTotalAmount] = useState(0);

  function increaseQty(i) {
    let newProdList = [...productList];
    let newTotal = totalAmount;
    newProdList[i].quantity++;
    newTotal += newProdList[i].price;
    setProductList(newProdList);
    setTotalAmount(newTotal);
  }

  function decreaseQty(i) {
    let newProdList = [...productList];
    let newTotal = totalAmount;
    newProdList[i].quantity > 0 ? newProdList[i].quantity-- : "";
    newTotal > 0 ? (newTotal -= newProdList[i].price) : "";
    setProductList(newProdList);
    setTotalAmount(newTotal);
  }

  function remove(i) {
    let newProdList = [...productList];
    newProdList.splice(i, 1);
    setProductList(newProdList);
  }

  function reset() {
    let newProdList = [...productList];
    newProdList.map((product) => (product.quantity = 0));
    setProductList(newProdList);
    setTotalAmount(0);
  }

  function addItem(name, price) {
    let newProdList = [...productList];
    newProdList.push({ name: name, price: price, quantity: 0 });
    setProductList(newProdList);
  }

  return (
    <div className="flex flex-col ">
      <NavBar />
      <AddItem addItem={addItem} />
      <ProductsList
        list={productList}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        remove={remove}
      />
      <Footer reset={reset} total={totalAmount} />
    </div>
  );
}

export default App;
