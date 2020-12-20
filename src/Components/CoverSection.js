import React from 'react'
import "./CoverSection.css"

export default function CoverSection() {
    return (
        <div className="cover-container" id="start">
        <video src="/videos/mountain.mov" autoPlay loop muted/>
        <h1>Hello, I'm Raiza Escobar,</h1>
        <p> a web developer with passion for learning</p>
        </div>
    )
}
