import React from 'react';
import Post from '../Post/index';

import "../Posts/style.css";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

export default function Posts() {
  return (
    <div className="post_container">
          <Post
            name='Anakin Skywalker'
            photo={ANAKIN_IMAGE}
            nickname="@dart_vader"
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date="26 февр."
            icon="C:\Users\Lenovo\CURSOR_HomeWork_Rudyi\HomeWork-015\my-app\src\components\post\img\icon.png"
            comments="486"
            share="146"
            like="887"
          />
        </div>
      
  )
}