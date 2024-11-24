import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const { readProduct, data, deleteProduct } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div>
      {data.map((el) => (
        <>
          <div className="input">
            <h1>{el.text}</h1>
            <button onClick={() => deleteProduct(el._id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${el._id}`)}>edit</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListProduct;
