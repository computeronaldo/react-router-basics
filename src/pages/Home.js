import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>My Home Page</div>
      <p>
        Go to <Link to="/products">products page.</Link>
      </p>
    </>
  );
};

export default HomePage;
