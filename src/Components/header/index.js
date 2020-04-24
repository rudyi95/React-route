import React from "react";
import {Link} from "react-router-dom";

import "../header/style.css";
import logo from "../header/img/Nazar.jpg";


export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src = {logo} width="100%" height="100%" alt="logo"></img>
            </div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                    <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}