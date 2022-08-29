import React from 'react'
import "../styles/Landing.css"
import Presentation from './Presentation'

const Landing = () => {
  return (
    <section className='principal container'>
        <div className="parent container">
            <div className="div1 container"></div>
            <Presentation/>
            <div className="div3 container">
            </div>
        </div>
    </section>
  )
}

export default Landing
