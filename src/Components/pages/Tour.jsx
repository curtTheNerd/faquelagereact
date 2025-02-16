import React from 'react';
import { TourAktuell, TourVergangenheit } from '../constants/Data';


const Tour = () => {
  return (
    <div className="tour container">
      <h2 className='tourTitle'>Aktuelle Tour</h2>
      <section className="tourSecContent">
        {
          TourAktuell.map(({id, ort, datum, location, locationLink, optionalerText, optionalerLinkName, link}) => {
            return (
              <div key={id} className='tourCard'>
                <div className="tourCardInfo">
                  <div className="tourCardTitle">
                    <h4 className="tourPlace">{ort}</h4>
                    <h4 className="tourDate">{datum}</h4>
                  </div>
                  <h5><a href={locationLink} className="tourLocation" target='_blank'>{location}</a></h5>
                  <h5 className="tourText">{optionalerText}</h5>
                  <h5><a href={link} className="tourLocation" target='_blank'>{optionalerLinkName}</a></h5>
                </div>
              </div>
            )
          })
        }
      </section>

      <h2 className='tourTitle'>Vergangene Shows</h2>
      <section className="tourSecContent">
        {
          TourVergangenheit.map(({id, ort, datum, location, locationLink, optionalerText, optionalerLinkName, link}) => {
            return (
              <div key={id} className='tourCard'>
                <div className="tourCardInfo">
                  <div className="tourCardTitle">
                    <h4 className="tourPlace">{ort}</h4>
                    <h4 className="tourDate">{datum}</h4>
                  </div>
                  <h5><a href={locationLink} className="tourLocation" target='_blank'>{location}</a></h5>
                  <h5 className="tourText">{optionalerText}</h5>
                  <h5><a href={link} className="tourLocation" target='_blank'>{optionalerLinkName}</a></h5>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Tour