import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return ( <div>
    <h2>404</h2>
    <p>This Page cannot be reached</p>
    <Link to='/'>Back to Home Page</Link>
  </div> );
}
 
export default NoPage;