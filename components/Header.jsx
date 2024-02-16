import React from "react";

export default function Header() {
  return (
    <header className="header">
        <img 
            src="/images/meme1.jpeg" 
            className="header--image"
            alt="" 
            />
        <h2 className="header--title">Hello World!</h2>
        <h4 className="header--project">React Meme Project</h4>
    </header>
    )
}