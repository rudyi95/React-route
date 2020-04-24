import React from 'react';

import "../main/style.css";


const IMG = "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg";

export default function Home() {
    return (
        <div className="main_container">
            <div className="info">
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem placeat dolores, sint inventore,
                in fugit saepe quidem expedita laborum voluptatibus laudantium voluptas!
                Harum, dolorem eligendi? A consectetur unde molestias nam?
                   </p>
            </div>
            {/* <img src={IMG} alt="" /> */}
        </div>
    )
};