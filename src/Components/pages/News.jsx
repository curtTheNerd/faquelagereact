import React from 'react';
import { NewsData as Data } from '../constants/Data';
// import NewsCard from '../NewsCard';



const News = () => {
  return (
    <div className="news container">
      <h2 className='newsTitle'>News</h2>
      <section className="newsSecContent">
        {
          Data.map(({id, imgSrc, title, subtitle, text, link, linkName}) => {
            return (
              <a href={link} key={id} target="_blank">
                <div className='newsCard'>
                  <div className="newsImageDiv">
                    <img src={imgSrc} alt={title} />
                  </div> 

                  <div className="newsCardInfo">
                    <h4 className="newsCardTitle">{title}</h4>
                    <h5 className="newsCardSubtitle">{subtitle}</h5>
                    <h5 className="newsText">{text}</h5>
                    <h5 className="newsLink"><div className="newsLinkName">{linkName}</div></h5>
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