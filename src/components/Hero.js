import React from "react"
import photogrid from '../images/photo-grid.png'

const Hero = () => {
    return (

        <section className="container">
            <img src={photogrid} className='photo-grid'></img>
            <h1 className="heading">Online Experiences</h1>
            <p className="paragraph">Join unique interactive activites led by one-of-a-kind hosts - all without leaving home</p>
        </section >

    )
}

export default Hero