'use client'
import react, { useState } from "react";
import Link from "next/link";
import styles from '@/app/navigation/navstyles.css'


const Navbar = () => {
    return (
        <nav className="navbar">
          <input type="checkbox" id="nav-check"/>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-elements">
            <ul>
                <li>
                <Link className="links" href="/">HOME</Link></li>
                <li>
                <Link className="links" href="/priorities">PRIORITIES</Link></li>
                <li>
                <Link className="links" href="/accomplishments">ACCOMPLISHMENTS</Link></li>
                <li>
                <Link className="links" href="/district">DISTRICT</Link></li>
                <li>
                <Link className="links" href="/contact">CONTACT</Link></li>
                <li>
                <Link className="links" href="https://www.efundraisingconnections.com/c/CaceresforSchoolBoard2024">CONTRIBUTE</Link></li>
            </ul>
          </div>
        </nav>
    );
}

export default Navbar;