import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <div>My Home Page</div>
      <p>
        Go to <Link to="/products">products page.</Link>
      </p>
      <p>
        <button onClick={clickHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
