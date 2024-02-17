import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mx-auto min-w-72">
      <div className="text-2xl">Opp!!!</div>
      <div className="text-4xl">404</div>
      <div className="text-3xl">
        <Link to="/">GO Home</Link>
      </div>
    </div>
  );
};

export default Error;
