import React from 'react';
import './news.css';

import img1 from '../Assets/Cover Bild.jpg'
import img2 from '../Assets/raphapuss.jpg'
import img3 from '../Assets/FaquelagePhoto2Square.jpg'

const Data = [
  {
    id: 3,
    imgSrc: img3,
    title: 'Leipzig: ROOTS & SPROUTS',
    subtitle: '14.09.2024',
    text: '',
    link: 'https://roots-and-sprouts.de/event/faquelage/',
    linkName: 'Festival @ Kulturnhalle'
  },

  {
    id: 1,
    imgSrc: img1,
    title: 'ALBUM OUT NOW',
    subtitle: '',
    text: '',
    link: 'https://faquelage.bandcamp.com/album/questions',
    linkName: 'CD Bestellen'
  },

  {
    id: 2,
    imgSrc: img2,
    title: 'FEATURED VIDEO',
    subtitle: '',
    text: '',
    link: 'https://www.youtube.com/watch?v=OXdOKobg5sA&list=PLLki_nU8n8w3MZEAN4uta_8cCAejmJHkn',
    linkName: 'Shapes in the Water'
  },
]



const News = () => {
  return (
    <div className="news container">
      <h2 className='newsTitle'>News</h2>
      <section className="secContent">
        {
          Data.map(({id, imgSrc, title, subtitle, text, link, linkName}) => {
            return (
              <a href={link} target="_blank">
                <div key={id} className='newsCard'>
                  <div className="imageDiv">
                    <img src={imgSrc} alt={title} />
                  </div> 

                  <div className="cardInfo">
                    <h4 className="title">{title}</h4>
                    <h5 className="subtitle">{subtitle}</h5>
                    <h5 className="text">{text}</h5>
                    <h5 className="link"><div className="linkName">{linkName}</div></h5>
                  </div>
                </div>
              </a>
            )
          })
        }
      </section>
    </div>
  )
}

export default News