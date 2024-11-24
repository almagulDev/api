import React, { useState } from "react";
import { useProduct } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [inputValue, setInputValue] = useState("");
  const { addProduct, readProduct } = useProduct();
  console.log(inputValue);

  function handleSend() {
    let newProduct = {
      text: inputValue,
    };
    addProduct(newProduct);
    setInputValue("");
    readProduct();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginBlock: "30px",
      }}
    >
      <input
        style={{ paddingBlock: "4px" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="add..."
      />
      <Link to="/list">
        <button onClick={handleSend}>add</button>
      </Link>
    </div>
  );
};

export default AddProduct;
