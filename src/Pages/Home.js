import "../App.css"
import React from "react"
import CoverSection from "../Components/CoverSection"
import Projects from "../Components/Projects"
import Footer from "../Components/Footer"
import Aboutme from "../Components/Aboutme"

function Home() {
    return (
        <>
        <CoverSection/>
        <Projects/>
        <Aboutme/>
        <Footer/>
    </>
    )
   
}
export default Home;