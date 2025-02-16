import React from 'react';
//import { useState, useEffect } from 'react';

import { NewsData } from '../constants/Data';
import NewsCard from '../NewsCard';
import img1 from '../../Assets/pictures/FaquelagePhoto1.jpg';
//import img2 from '../Assets/FaquelagePhoto2.jpg';

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
    <div className='home'>
      <h1 className="homeTitle"><span className="h1_1">Faque</span><span className="h1_2">lage</span></h1>
      <h2 className="subtitle">Boundless Blend of Music</h2>

      <div className="homeBanner">
        <img src={img1} alt="the boys at work" />
      </div>
    
      <div className="news">
        <h2 className="newsTitle">News</h2>

        <div className="newsSecContent">
          {
            NewsData.map(data => {
              return (
                <NewsCard 
                key={data.id}
                imgSrc={data.imgSrc}
                title={data.title}
                subtitle={data.subtitle}
                text={data.text}
                link={data.link}
                linkName={data.linkName}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  ) 
}

export default Home
