import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="title">Build React</h1>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/newb'>New Project</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;