import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'
import img1 from '../Assets/Cover Bild.jpg'
import img2 from '../Assets/raphapuss.jpg'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    title: 'New Album Out Now!',
    subtitle: 'Question - Faquelage',
    description: '',
    link: 'https://faquelage.bandcamp.com/album/questions',
    linkName: 'CD Bestellen'
  },

  {
    id: 2,
    imgSrc: img2,
    title: 'Featured Video',
    subtitle: '',
    description: '',
    link: 'https://www.youtube.com/watch?v=OXdOKobg5sA&list=PLLki_nU8n8w3MZEAN4uta_8cCAejmJHkn',
    linkName: 'Shapes in the Water - Faquelage'
  },
]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <a href="">
          <h3 className='mainTitle'>News</h3>
        </a>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, title, subtitle, description, link, linkName}) => {
            return (
              <div key={id} className='newsCard'>
                <div className="imageDiv">
                  <img src={imgSrc} alt={title} />
                </div> 

                <div className='cardInfo'>
                  <h4 className="title">{title}</h4>
                  <h5 className="subtitle">{subtitle}</h5>
                  <h5 className="description">{description}</h5>
                  <h5 className="link"><a href={link} className="linkName" target='_blank'>{linkName}</a></h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
