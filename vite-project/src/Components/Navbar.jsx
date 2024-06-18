import React, { useState } from "react";
import Sidebar from './Sidebar/Sidebar';

function Navbar() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };


  return (
    <>
     <Sidebar isopen={isopen} toggle={toggle} />

      <div className="NavHead">
        <div className="Navbar">
        <div className="logo">
        <a href="/">  <img src="/images/logo.svg" id="rtdyfg" /></a>
          </div>
          <div className="MiddleNav">
            <ul>
             <a href="/strategy"> <li>Industries</li></a>
             <a href="/capabilities"><li>Capabilities</li></a>
             <a href="/aboutus"><li>About us</li></a>
             <a href="/"><li id="contact">Contact</li></a>
            </ul>
          </div>
          <div className="Menu" onClick={toggle}>
          <img src="/images/menu.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
