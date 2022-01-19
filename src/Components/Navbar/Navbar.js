import React from "react";
import NavBar from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavBar["nav_bar"]}>
      <a href="#" className={NavBar["nav_brand"]}>
        UNIKA
      </a>
      <ul class={NavBar["nav_component"]}>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            HOME
          </a>
        </li>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            ABOUT
          </a>
        </li>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            SERVICES
          </a>
        </li>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            WORKS
          </a>
        </li>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            TEAM
          </a>
        </li>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            PRICES
          </a>
        </li>
        <li className={NavBar["nav_item"]}>
          <a href="#" className={NavBar["nav_link"]}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
