import React from 'react'
import CardItem from './CardItem'
import "./Projects.css"

function Cards() {
    return (
        <div className='cards' id="Myprojects">
            <h1>Check out my projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items ">
                        <CardItem
                            src='images/split-and-share.png'
                            text='split and share: Find a perfect flatmate, a perfect flat and calculate the fair price for your room'
                            label='react.js, node.js'
                            path='https://split-and-share.herokuapp.com/'
                            color="#F2F1EC"
                        />
                        <CardItem
                            src='images/wit.png'
                            text='Women in tech : a website designed to close the gender gap that exists in the tech industry, by helping women who work in the tech sector to network through events. the main goal is to motivate more women to build businesses or to choose a career in the digital industry
'
                            label='hbs, node.js'
                            path='https://women-in-tech-ih.herokuapp.com/'
                            color="#0c7489"
                        />
                    </ul>
                    <ul className="cards__items ">
                        <CardItem
                            src="images/moveki.png"
                            text='Mo Ve Ki: If choosing between so many restaurant options stresses you out, you are tired of always going to the same ones you know or you simply like adventure, then Moveki is for you.'
                            label="css/html, js"
                            path="https://raizaescobar.github.io/Ironhack-Web-App/"
                            color="#002642"
                        >
                        </CardItem>
                        <CardItem
                            src="images/wip.png"
                            text='Wedding Page (Under construction)'
                            label="react.js, node.js"
                            path="#"
                        >
                        </CardItem>
                        <CardItem
                            src="images/wip.png"
                            text='Personal Page Margarita Aleks (Under construction)'
                            label="react.js"
                            path="#"
                        >
                        </CardItem>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
