import React from 'react'
//import { useState, useEffect } from 'react'

import { HomeData as Data } from '../constants/Data'
import img1 from '../../Assets/pictures/FaquelagePhoto1.jpg'
//import img2 from '../Assets/FaquelagePhoto2.jpg'

const Home = () => {
  /* Image Slideshow - später

  const [currentImage, setCurrentImage] = useState(img1);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);

      setTimeout(() => {
        setCurrentImage((prevImg) => prevImg === img1 ? img2 : img1);
        setTransition(false);  
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []); */

  return (
    <>
      <section className='home'>
        <div className="overlay"></div>

        <div className='slideShowContainer'>  
          <img src={img1} alt="band" className='slideShowImage' />
        </div>

        <div className="homeContent container">
          <div className="textDiv">
            <h1 className="title flex">
              <span className="h1_1">Faque</span>
              <span className="h1_2">lage</span>
            </h1>
            <h2 className="subtitle">Boundless Blend of Music</h2>
          </div>
        </div>
      </section>
      
      <section className="about">
        <h2 className="aboutTitle">News</h2>

        <div className="aboutSecContent">
          {
            Data.map(data => {
              return (
                <div key={data.id} className='aboutCard'>
                  <div className="aboutImageDiv">
                    <img src={data.imgSrc} alt={data.name} />
                  </div> 

                  <div className="aboutCardInfo">
                    <h4 className="aboutName">{data.name}</h4>
                    <h5 className="aboutInstrument">Instrument: {data.instrument}</h5>
                    <h5 className="aboutSkill">Skill: {data.skill}</h5>
                    <h5 className="aboutLink">Follow on Instagram: <a href={data.instaLink} className="aboutLinkName" target='_blank'>{data.linkName}</a></h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  ) 
}

export default Home
