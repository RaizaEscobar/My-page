import React from 'react'
import "./Aboutme.css"


export default function Aboutme() {
    return (
        <div id="aboutMe">
        <h1 className="about-title" >About me</h1>

        <div className="sectionAbout">
            <img className="sectionAbout-img" src='images/Raiza.jpg' alt="perfil" />
            <div className="description">
                <p> 
        
                
Hi, I am Raiza, a foodie, mountains lover, books lover and of course code lover.<br/><br/>

I am from Venezuela, but living in Barcelona since 2009. The last 6 years I have been working in the financial sector, especially in the banking sector, 

which has allowed me to develop new skills, such as working under pressure, business skills, negotiation skills and teamwork. <br/><br/>

Last year, in the midst of the worst world crisis of the last decades, I had my own existential crisis, so I decided to stop for a moment and think about how I saw myself in the following years, 
what I saw myself doing the rest of my life and the answer was...programming.

I love programming, feeling like every minute of time I spend studying is an investment in myself and my code; I learn fast and I love seeing results, that's something that programming gives me. 

So the logical but not easy next step was to quit my job and find the best way to become a programmer.<br/><br/>

I signed up for a programming bootcamp to acquire the necessary knowledge to be a developer; due to the bootcamp and my constant motivation to continue learning and improving myself, 
I currently consider that I have a firm knowledge of Html, Css, Javascript, and react, my favorite javascript framework.
                </p>   
                <div className="resume">
                    <a href="https://drive.google.com/file/d/1cUFF7lRRq0SWkHUGQXSgTwiyxZCF6nuW/view?usp=sharing" className="btn" target="_blank" rel="noreferrer"> Resume here!</a>
                </div>                     
            </div>

        </div>
        </div>
    )
}
