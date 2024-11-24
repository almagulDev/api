import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const API =
    "https://api.elchocrud.pro/api/v1/c50f25fc01ae9b083d764eb497ef5cbc/testt";

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    let { data } = await axios(API);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  async function updateProduct(id, updateProduct) {
    await axios.patch(`${API}/${id}`, updateProduct);
    readProduct();
  }

  const values = {
    addProduct,
    readProduct,
    data,
    deleteProduct,
    getOneProduct,
    oneProduct,
    updateProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
