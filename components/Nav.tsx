import React, { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={navStyles.container}>
      <nav className={`${navStyles.nav}  ${isOpen ? navStyles.show : ""}`}>
        <div className={navStyles.newnav}>
          <div className={navStyles.logoTitle}>
            <div className={navStyles.logo}>
              <img src="http://localhost:3000/bookIcon.png" alt="logo" />
            </div>
            <span>
              <h3>Best Books</h3>
            </span>
          </div>
          <div className={navStyles.toggle} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={navStyles.firstlist}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/admin/books">Dashboard</Link>
            </li>
            <li>
              <Link href="/books">Shop</Link>
            </li>
          </ul>
        </div>

        <div className={`${navStyles.menu} ${isOpen ? navStyles.show : ""}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/admin/books">Dashboard</Link>
            </li>
            <li>
              <Link href="/books">Shop</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
