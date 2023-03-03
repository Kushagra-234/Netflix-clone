import React, { useEffect, useState } from "react";
import "./nav.css"

const Nav = () => {
  const[show,handleShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true);

      } else handleShow(false);
    });
    // return ()=>{
    //   window.removeEventListener("scroll");
    // };
  },[]);

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1200px-Netflix_2014_logo.svg.png"
        alt="loading"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avtar"
        alt="netflix avatar"
      />
    </div>
  );
};

export default Nav;
