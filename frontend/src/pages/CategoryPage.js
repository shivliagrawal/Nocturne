import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <p>Showing products for {name}</p>
    </div>
  );
};

export default CategoryPage;
