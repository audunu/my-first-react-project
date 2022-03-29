import React from "react";
import NAVbar from "./NAVbar";
import Hero from "./Hero";
import Card from "./Card";
//import katie from '../images/katie-zaferes.png'
import data from '../data'






const Page = () => {
    const cards = data.map(item => {
        
        return (
            <Card
                key={item.id}
                {...item}
            />
          
        )
    })

    return (
        <div className='page-container'>
            <NAVbar />
            <Hero />
            <section className="cards-list">
            {cards}
            </section>
        </div>
    )
}
export default Page