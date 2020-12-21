import React from 'react'
import "./CoverSection.css"
import Video from "react-background-video-player"

export default function CoverSection() {
    return (
        <div className="cover-container" id="start">
        <Video src="/videos/mountain.mov" className="video" style={{position:"fixed"}} autoPlay loop muted/>
        <h1>Hello, I'm Raiza Escobar</h1>
        <p> a web developer with passion for learning</p>
        </div>
    )
}
