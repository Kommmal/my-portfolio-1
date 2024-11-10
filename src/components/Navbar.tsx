"use client";

import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";
import "../app/globals.css"

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="navbar">
      <span className="navbar-brand">Portfolio</span>
      <ul className={`navbar-links ${menu ? "active" : ""}`}>
        <Link href="#About">
          <li className="navbar-item">About</li>
        </Link>
        <Link href="#Skills">
          <li className="navbar-item">Skills</li>
        </Link>
        <Link href="#Experience">
          <li className="navbar-item">Experience</li>
        </Link>
        <Link href="#Projects">
          <li className="navbar-item">Projects</li>
        </Link>
        <Link href="#Contact">
          <li className="navbar-item">Contact</li>
        </Link>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="navbar-icon"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="navbar-icon"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
