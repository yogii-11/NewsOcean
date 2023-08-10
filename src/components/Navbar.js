/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = ()=> {

    return (
      <>
        <nav className="navbar bg-dark navbar-expand-lg navbar-dark sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/NewsOcean">NewsOcean</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/NewsOcean">Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet />
      </>
    )
  }

export default Navbar