import React from "react";
import Section from "../components/Section";

const Products = ({ data }) => {
  return (
    <>
          {data.map((product) => {
            return <Section key={product.id} {...product} />;
          })} 
    </>
  );
};

export default Products;
