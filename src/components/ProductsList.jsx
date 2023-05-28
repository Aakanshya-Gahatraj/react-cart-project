/* eslint-disable react/prop-types */
import Product from "./Product";

function ProductsList(props) {
  //   console.log(props);
  return props.list.map((product, ind) => {
    return (
      <Product
        key={ind}
        product={product}
        increaseQty={props.increaseQty}
        decreaseQty={props.decreaseQty}
        remove={props.remove}
        index={ind}
      />
    );
  });
}

export default ProductsList;
