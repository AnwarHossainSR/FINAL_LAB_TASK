import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <Link className="mr-3 text-decoration-none text-info" to="/">Home</Link>
        </Navbar.Brand>
        <Link className="ml-3 text-decoration-none text-info" to="/adddairy">Add Dairy</Link>


        {/* <Nav className="ml-auto nav_bar_wraper">
          {localStorage.getItem("user") ? (
            <>
              <Link className="mr-3 text-decoration-none text-info" to="/dashboard">Dashboard</Link>
            </>
          ) : (
            <>
              <Link className="mr-3 text-decoration-none text-info" to="/register">Register</Link>
              <Link className="mr-3 text-decoration-none text-info" to="/login">Login</Link>
            </>
          )}
        </Nav> */}
      </Navbar>
    </div>
  );
};

export default Header;
