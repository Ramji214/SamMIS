import React,{useState} from 'react'
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import  "../styles/Navbarstyles.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Login"> Login </Link>
          <Link to="/Dashboard"> Dashboard </Link>
          <Link to="/Subscription">Subscription </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/Dashboard "> Dashboard  </Link>
        <Link to="/Subscription ">Subscription  </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;