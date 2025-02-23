import React from 'react';
import { useState, useEffect } from 'react';

import HomeBanner from '../HomeBanner';
import { NewsData } from '../constants/Data';
import NewsCard from '../NewsCard';

const Home = () => { 
  return (
    <div className='home'>
      <div className="bannerSection">
        <HomeBanner />
      </div>

      <div className='titleSection' >
          <h1 className="homeTitle"><span className="h1_1">Faque</span><span className="h1_2">lage</span></h1>
          <h2 className="subtitle">Boundless Blend of Music</h2>
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
