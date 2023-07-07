import React from "react";
import { Link } from "react-router-dom";
const Verify = ({  }) => {

  const id = 123;
  const value = `/user/verify`
  return (
    <div>
      {" "}
      <Link to={value}>Go to main Profile</Link>
    </div>
  );
};

export default Verify;
