import React, { useEffect, useState } from "react";
import { useProduct } from "../../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [inputValue, setInputValue] = useState("");
  const { getOneProduct, oneProduct, updateProduct } = useProduct();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setInputValue(oneProduct.text);
    }
  }, [oneProduct]);

  function handleSave() {
    let changedProduct = {
      text: inputValue,
    };
    updateProduct(id, changedProduct);
    setInputValue("");
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default EditProduct;
