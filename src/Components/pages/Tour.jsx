import React from 'react';
import { TourAktuell, TourVergangenheit } from '../constants/Data';
import TourCard from '../TourCard';

const Tour = () => {
  return (
    <div className="tour container">
      <h2 className='tourTitle'>Aktuelle Tour</h2>
      <section className="tourSecContent">
        {
          TourAktuell.map(data => {
            return (
              <TourCard 
              key={data.id} 
              ort={data.ort} 
              datum={data.datum} 
              location={data.location} 
              locationLink={data.locationLink} 
              optionalerText={data.optionalerText} 
              optionalerLinkName={data.optionalerLinkName} 
              link={data.link} />
            )
          })
        }
      </section>

      <h2 className='tourTitle'>Vergangene Shows</h2>
      <section className="tourSecContent">
        {
          TourVergangenheit.map(({id, ort, datum, location, locationLink, optionalerText, optionalerLinkName, link}) => {
            return (
              <TourCard 
              key={id} 
              ort={ort} 
              datum={datum} 
              location={location} 
              locationLink={locationLink} 
              optionalerText={optionalerText} 
              optionalerLinkName={optionalerLinkName} 
              link={link} />
            )
          })
        }
      </section>
    </div>
  )
}

export default Tour